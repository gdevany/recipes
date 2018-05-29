<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivAddRecipe">
		<add-recipe-login v-if="!this.$store.state.loggedIn"></add-recipe-login>
		<form v-else>
			<h1 class="col-12 text-center title-done">Let's add a new Yummy:</h1>
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
			<div class="col-12 text-center headline1 title-done" v-if="!cloudinaryInfo.successDL && titleGiven">
				<h2>{{ cloudinaryInfo.title }}</h2>
			</div>

			<div class="col-12 form-group title-done" v-if="!cloudinaryInfo.successDL && titleGiven && !descGiven">
				<label for="description"></label>
				<textarea
					placeholder="Give a description, or just type some key words"
					rows="3"
					class="form-control"
					v-model="cloudinaryInfo.description"
					@keydown.enter.prevent="descGiven = true"></textarea>
			</div>
			<div class="col-12 text-center headline1 title-done" v-if="!cloudinaryInfo.successDL && descGiven">
				<span>{{ cloudinaryInfo.description }}</span>
			</div>

			<div class="col-12" v-if="!cloudinaryInfo.successDL && descGiven">
				Please select one or more search tags for this recipe:
			</div>

			<div
				class="title-done d-flex inline-flex flex-wrap justify-content-center"
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
  	<div class="col-12" v-if="cloudinaryInfo.category.length > 1 && !cloudinaryInfo.successDL">
			<input
				type="file"
				class="form-control title-done"
				@change="upload(cloudinaryInfo, $event)"
				accept="auto"/>
		</div>
		<div
				v-if="cloudinaryInfo.successDL"
				v-for="recipe in cloudinaryInfo.recipes"
				class="col-12 d-flex flex-column align-items-center">
			<h4 class="text-center">Congratulations! You have added another YUMMY!</h4>
			<img :src="recipe.url" />
			<h2>{{ recipe.title }}</h2>
			<span>{{ recipe.description }}</span>
			<span>{{ recipe.tags }}</span>
			<button
				class="btn btn-primary"
				@click="setPage('home')"
				v-if="cloudinaryInfo.successDL === true">Take me back home
			</button>
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
		// this.CLOUDINARY_UPLOAD_PRESET = 'eajtwfr4'
	},
	methods: {
		recipeNotYetSubmitted() {
			if(!cloudinaryInfo.successDL) {
				return true
			} else {
				return false
			}
		},
		activateClass(food) {
			if(this.cloudinaryInfo.category.includes(food))
			return {active: true};
		},
		...mapActions([
			'setPage'
		]),
    upload: (cInfo, evt) => {
			let file = evt.target.files;
			console.log(file[0].name);
			//removes the images file extension because cloudinary adds it
			let fileNameIdxOfPeriod = file[0].name.indexOf(".");
			let fileNameWithoutExtension = file[0].name.slice(0,fileNameIdxOfPeriod);
			const formData = new FormData();
      formData.append('file', file[0]);
      formData.append('upload_preset', cInfo.uploadPreset);
      formData.append('tags', [cInfo.category]);
			formData.append('context', `caption=${cInfo.description}|title=${cInfo.title}`)
			formData.append('public_id', `${cInfo.filePath}/${fileNameWithoutExtension}`)
			axios.post(cInfo.uploadUrl, formData)
			.then(res => {
				console.log(res);
        cInfo.recipes.unshift({
          url: res.data.secure_url,
					title: res.data.context.custom.title,
					description: res.data.context.custom.caption,
					tags: res.data.tags
        });
				console.log(res.data);
				cInfo.successDL = true;
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
</style>
