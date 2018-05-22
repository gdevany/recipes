<template>
  <div class="col-12 justify-content-center">
		<form>
			<div class="col-12 form-group" v-if="cloudinaryInfo.successDL === false">
				<label for="title"></label>
				<input
					autofocus
					placeholder="Give it a title"
					class="form-control"
					v-model="cloudinaryInfo.title"
					@keydown.enter.prevent="titleGiven = true"></input>
			</div>
			<div class="col-12 form-group" v-if="cloudinaryInfo.successDL === false">
				<label for="description"></label>
				<textarea
					placeholder="Give a description, or just type some key words"
					rows="3"
					class="form-control"
					v-model="cloudinaryInfo.description"
					@keydown.enter.prevent="titleGiven = true"></textarea>
			</div>
			<div class="col-12" v-if="titleGiven === true && cloudinaryInfo.successDL === false">
				Please select one or more search tags for this recipe:
			</div>
			<span class="form-check form-check-inline" v-if='titleGiven === true && cloudinaryInfo.successDL === false' v-for="food in foodSubjects">
				<label :for='food'>
					<input
						type='checkbox'
						:id='food'
						:value='food'
						v-model='cloudinaryInfo.category'>&nbsp{{ food }}
				</label>
			</span>
		</form>
  	<div class="col-12" v-if="cloudinaryInfo.category.length > 1 && cloudinaryInfo.successDL === false">
			<input
				type="file"
				class="form-control title-done"
				@change="upload(cloudinaryInfo, $event)"
				accept="image/*"/>
		</div>
		<div
				v-if="cloudinaryInfo.successDL === true"
				v-for="recipe in cloudinaryInfo.recipes"
				class="col-12 d-flex flex-column align-items-center">
			<span>Congratulations! You have added another YUMMY!</span>
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
import axios from 'axios'
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			foodSubjects: this.$store.state.foodSubjects,
			titleGiven: false,
			cloudinaryInfo: {
				successDL: false,
				recipes: [],
				title: '',
				description: '',
				category: ['recipe'],
				uploadPreset: this.$store.state.CLOUDINARY_UPLOAD_PRESET,
				uploadUrl: this.$store.state.CLOUDINARY_UPLOAD_URL,

			}
		}
	},
	created() {
		// this.CLOUDINARY_UPLOAD_PRESET = 'eajtwfr4'
	},
	methods: {
		...mapActions([
			'setPage'
		]),
    upload: (cInfo, evt) => {
			console.log(cInfo);
			let file = evt.target.files;
			const formData = new FormData();
      formData.append('file', file[0]);
      formData.append('upload_preset', cInfo.uploadPreset);
      formData.append('tags', [cInfo.category]);
			formData.append('context', `caption=${cInfo.description}|title=${cInfo.title}`)
      axios.post(cInfo.uploadUrl, formData)
			.then(res => {
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
	}

	button {
		margin: 2rem;
	}

	span {
		margin-bottom: 1rem;
	}

	.title-done {
		margin-bottom: 3rem;
	}
</style>
