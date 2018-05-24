<template>
  <div class="row col-12 justify-content-center mainDivSearchResults">
		<h1 class="col-12 text-center">Search Results</h1>
		<h4 class="col-12 text-center">{{ this.$store.state.searchWord }}</h4>
		<span class="col-12 text-center title-done">Select one:</span>
		<div v-for="recipe in recipes" class="results">
			<div class="d-flex flex-column align-items-center">
				<img :src="recipe.url" />
				<h4>{{ recipe.title }}</h4>
				<span class="text-center">{{ recipe.description }}</span>
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
      `https://res.cloudinary.com/${this.$store.state.cloudName}/image/list/${this.$store.state.searchWord}.json`
    ).then(res => {
			this.recipes = res.data.resources.map(t => {
				console.log(t);
				return {
					title: t.context.custom.title,
					description: t.context.custom.caption,
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

	.mainDivSearchResults {
		background-color: #e3e8ce;
	}

	.title-done {
		margin-bottom: 3rem;
	}

	.results {
		width: 15rem;
		margin: 2rem;
	}
</style>
