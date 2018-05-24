<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivSearchResults">
		<div class="" v-if="this.$store.state.pageSelected !=='home'">
			<h1 class="col-12 text-center">Search Results</h1>
			<h4 class="col-12 text-center">{{ this.$store.state.searchWord }}</h4>
			<div class="col-12 text-center title-done">Select one:</div>
		</div>
		<div v-else class="text-center">
			<h3>Mmm  Mmm  good stuff</h3>
		</div>

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
		//GET image filtered by state.searchWord (which was set in Search.vue)
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
		width: 20rem;
		height: auto;
		margin: 10px;
	}

	.mainDivSearchResults {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border-radius: 10px;
	}

	.title-done {
		margin-bottom: 3rem;
	}

	.results {
		/* width: 15rem;
		margin: 2rem; */
	}
</style>
