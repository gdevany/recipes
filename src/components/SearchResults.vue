<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivSearchResults">
		<div class="" v-if="this.$store.state.pageSelected !=='home'">
			<h1 class="col-12 text-center">Search Results</h1>
			<h4 class="col-12 text-center">{{ this.$store.state.searchWord }}</h4>
		</div>
		<div v-else class="text-center">
			<h3>Mmm  Mmm  good stuff</h3>
		</div>
		<div class="col-12 text-center title-done">Click image to toggle size</div>

		<!-- Display each recipe in list created by search -->
		<div v-for="recipe in recipes" class="results">
			<div class="d-flex flex-column align-items-center bottom-border title-done">
				<h4>{{ recipe.title }}</h4>
				<!-- Clicking image toggles viewer width BIG and SMALL -->
				<img :src="recipe.url" @click="superSize" :style="{width: superSized + 'vw'}"/>
				<span class="text-center title-done">{{ recipe.description }}</span>
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
			recipes: [],
			superSized: 40
		}
	},
	methods: {
		superSize() {
			this.superSized === 90 ? this.superSized = 40 : this.superSized = 90;
		},
		...mapActions([
			'setPage'
		])
	},
	created() {
		//GET image list and data filtered by state.searchWord (set in Search.vue)
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
		/* width: 20rem; */
		height: auto;
		margin: 10px;
	}

	.mainDivSearchResults {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border-radius: 10px;
		border: 2px solid black;
	}

	.title-done {
		margin-bottom: 3rem;
	}

	.bottom-border {
		border-bottom: 1px solid grey;
	}

	.results {
		/* width: 15rem;
		margin: 2rem; */
	}
</style>
