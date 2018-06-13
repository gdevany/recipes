<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivAddRecipe">
		<!-- Show login screen if not logged in yet -->
		<add-recipe-login v-if="!this.$store.state.loggedIn"></add-recipe-login>
		<!-- If logged in, start form to add recipe -->
		<form v-else>
			<h1 class="col-12 text-center padBottom">Let's add a new Yummy:</h1>
			<div
				class="col-12 form-group"
				v-if="!cloudinaryInfo.successDL && !titleGiven">
				<label for="title"></label>
				<input
					placeholder="Give it a title"
					class="form-control"
					v-model="cloudinaryInfo.title"
					@keydown.enter.prevent="titleGiven = true"></input>
			</div>
			<div class="col-12 text-center headline1 padBottom" v-if="!cloudinaryInfo.successDL && titleGiven">
				<h2>{{ cloudinaryInfo.title }}</h2>
			</div>

			<div class="col-12 form-group padBottom" v-if="!cloudinaryInfo.successDL && titleGiven && !descGiven">
				<label for="description"></label>
				<textarea
					placeholder="Give a description, or just type some key words"
					rows="3"
					class="form-control"
					v-model="cloudinaryInfo.description"
					@keydown.enter.prevent="descGiven = true"></textarea>
			</div>
			<div class="col-12 text-center headline1 padBottom" v-if="!cloudinaryInfo.successDL && descGiven">
				<span>{{ cloudinaryInfo.description }}</span>
			</div>

			<div class="col-12 text-center" v-if="!cloudinaryInfo.successDL && descGiven">
				Please select one or more search tags for this recipe:
			</div>

			<div
				class="padBottom d-flex inline-flex flex-wrap justify-content-center"
				v-if="!cloudinaryInfo.successDL && descGiven">
				<span class="" v-for="food in foodSubjects">
						<label :for='food' class="btn btn-outline-info" :class="activateClass(food)">
							<input
								type='checkbox'
								name="options"
								:id='food'
								:value='food'
								v-model='cloudinaryInfo.category'>&nbsp{{ food }}
						</label>
				</span>
			</div>
		</form>
		<!-- If form done, submit it -->
  	<div class="col-12" v-if="cloudinaryInfo.category.length > 1 && !cloudinaryInfo.successDL">
			<input
				type="file"
				class="form-control padBottom"
				@change="upload(cloudinaryInfo, $event)"
				accept="auto"/>
		</div>
		<!-- Once successful Image download, show the response & give option to delete -->
		<div
				v-if="cloudinaryInfo.successDL"
				v-for="recipe in cloudinaryInfo.recipes"
				class="col-12 d-flex flex-column align-items-center">
			<h4 class="text-center">Here's your new recipe</h4>
			<img :src="recipe.url" />
			<h2 class="text-center">{{ recipe.title }}</h2>
			<span class="text-center">{{ recipe.description }}</span>
			<div class="d-inline-flex flex-wrap justify-content-center">
				<div v-for="tag in recipe.tags">
					<button
						class="btn btn-outline-info"
						v-if="tag !== 'recipe'">{{ tag }}
					</button>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-sm-6">
					<button
						class="btn keepDeleteButtons saveItButton"
						@click="setPage('home')"
						v-if="cloudinaryInfo.successDL === true">Keep It
					</button>
				</div>
				<div class="col-12 col-sm-6">
					<button
						class="btn keepDeleteButtons deleteButton"
						@click="deleteNewImage(recipe.token)"
						v-if="cloudinaryInfo.successDL === true">Delete this entry and start over
					</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Login from './Login.vue';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			listOfAllRecipes: [],
			foodSubjects: this.$store.state.foodSubjects,
			titleGiven: false,
			descGiven: false,
			cloudinaryInfo: {
				successDL: false,
				recipes: [],
				title: '',
				description: '',
				category: ['recipe'],
				uploadPreset: this.$store.state.CLOUDINARY_UPLOAD_PRESET,
				uploadUrl: this.$store.state.CLOUDINARY_UPLOAD_URL,
				filePath: this.$store.state.cloudinaryFilePath,
			}
		}
	},
	created() {
		// Preload a list of file names of all recipes
		axios.get(
			`https://res.cloudinary.com/${this.$store.state.cloudName}/image/list/${this.$store.state.projectMainImageTag}.json`
		).then(res => {
			res.data.resources.map(t => {
				let strippedFileNameIndex = t.public_id.lastIndexOf('/') + 1;
				let fileName = t.public_id.slice(strippedFileNameIndex);
				this.listOfAllRecipes.push(fileName);
			})
		})
	},
	methods: {
		activateClass(food) {
			if(this.cloudinaryInfo.category.includes(food))
			return {active: true};
		},
		...mapActions([
			'setPage'
		]),
    upload(cInfo, evt) {
			let file = evt.target.files;

			// Remove the image file extension because cloudinary adds it
			let fileNameIdxOfPeriod = file[0].name.indexOf(".");
			let fileNameWithoutExtension = file[0].name.slice(0,fileNameIdxOfPeriod);

			// Check if file name exists first, if so -> add Random # to new name
			if(this.listOfAllRecipes.includes(fileNameWithoutExtension)) {
				fileNameWithoutExtension = fileNameWithoutExtension + Math.floor(Math.random()*1000);
			}

			const formData = new FormData();
      formData.append('file', file[0]);
      formData.append('upload_preset', cInfo.uploadPreset);
      formData.append('tags', [cInfo.category]);
			formData.append('context', `caption=${cInfo.description}|title=${cInfo.title}`)
			formData.append('public_id', `${cInfo.filePath}/${fileNameWithoutExtension}`)
			axios.post(cInfo.uploadUrl, formData)
			.then(res => {
        cInfo.recipes.unshift({
          url: res.data.secure_url,
					title: res.data.context.custom.title,
					description: res.data.context.custom.caption,
					tags: res.data.tags,
					token: res.data.delete_token
        });
				cInfo.successDL = true;
      })
    },
		deleteNewImage(token) {
			const formData = new FormData();
			formData.append('token', token);
			formData.append('upload_preset', this.$store.state.CLOUDINARY_UPLOAD_PRESET);
			axios.post(this.$store.state.CLOUDINARY_DELETEIMAGE_URL, formData)
			.then(res => {
				if(res.data.result === 'ok') {
					console.log(res);
					alert('You have successfully deleted this entry');
					this.setPage('home');
				}
			})
		}
  },
	components: {
		addRecipeLogin: Login
	}
}
</script>

<style scoped>
	label {
		font-size: 1.5rem;
		margin: .5rem 1.5rem;
	}

	img {
		height: 200px;
		width: auto;
		border: 1px solid black;
	}

	button {
		margin: 2rem;
	}

	span {
		margin-bottom: 1rem;
	}

	.mainDivAddRecipe {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border: 2px solid black;
	}

	.headline1 {
		color: red;
	}

	.btn-outline-info {
		margin: 0;
	}

	.keepDeleteButtons {
		margin: 2rem 0;
		white-space: normal;
		width: 100%;
		height: 5rem;
		border: 1px solid black;
		font-size: 1.2rem;
	}

	.deleteButton {
		background-color: #ff6868;
	}

	.saveItButton {
		background-color: #66bd66;
	}
</style>
