<template>
  <div class="row col-12 justify-content-center">
		<h1 class="col-12 text-center">Search Results</h1>
		<span class="col-12 text-center title-done">Select one:</span>
		<div v-for="recipe in recipes">
			<div class="recipe">
				<img v-bind:src="recipe.url" />
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			recipes: []
		}
	},
	methods: {
		...mapActions([
			'setPage'
		])
	},
	created() {
		axios.get(
      `https://res.cloudinary.com/${this.$store.state.cloudName}/image/list/${this.$store.state.projectMainImageTag}.json`
    ).then(res => {
			this.recipes = res.data.resources.map(t => {
				return {
					publicId: t.public_id,
					url: `https://res.cloudinary.com/${this.$store.state.cloudName}/image/upload/v${t.version}/${t.public_id}.jpg`
				}
			})
    })
	}
}
</script>

<style scoped>
	img {
		width: 100px;
		height: 100px;
		margin: 10px;
	}

	.title-done {
		margin-bottom: 3rem;
	}
</style>
