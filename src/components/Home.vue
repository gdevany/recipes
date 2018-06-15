<template>
		<div class="col-12 justify-content-center">
			<div class="col-12 col-lg-10 offset-lg-1 mainDivHome">
				<div class="text-center header">The {{ familyName }} family recipes</div>
				<div class="text-center shortLine">
					The answer to the endless search for our family recipies
				</div>
			</div>
			<home-search-results class="noPad"></home-search-results>
		</div>
</template>

<script>
import SearchResults from './SearchResults.vue'

export default {
	components: {
		homeSearchResults: SearchResults
	},
	data() {
		return {
			familyName: this.$store.state.familyName
		}
	},
	created() {
		window.scroll(0,0);
	}
}
</script>

<style scoped>
	.mainDivHome {
		background-color: #e4e1e1;
		border-radius: 10px;
	 	border: 0.1rem inset #272522;
		margin-bottom: 1rem;
	}

	.header {
		font-size: 2.5rem;
		font-weight: bold;
		color: #383232;
		line-height: 2.5rem;
		letter-spacing: 0.1rem;
		padding: 1rem;
		font-family: Bauhaus93;
		text-shadow: 0 1px 0 #ccc,
							0 2px 0 #c9c9c9,
							0 3px 0 #bbb,
							0 4px 0 #b9b9b9,
							0 5px 0 #aaa,
							0 6px 1px rgba(0,0,0,.1),
							0 0 5px rgba(0,0,0,.1),
							0 1px 3px rgba(0,0,0,.3),
							0 3px 5px rgba(0,0,0,.2),
							0 5px 10px rgba(0,0,0,.25),
							0 10px 10px rgba(0,0,0,.2),
							0 20px 20px rgba(0,0,0,.15);
	}

	.noPad {
		padding-left: 0;
		padding-right: 0;
	}

	.shortLine {
		line-height: 1rem;
		margin-bottom: 1rem;
	}
</style>
