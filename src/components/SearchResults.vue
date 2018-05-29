<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivSearchResults">
		<div class="" v-if="this.$store.state.pageSelected !=='home'">
			<h1 class="col-12 text-center">Search Results</h1>
			<h4 class="col-12 text-center">{{ this.$store.state.searchWord }}</h4>
		</div>
		<div v-else class="text-center">
			<h3>Here's some of our favorites</h3>
		</div>
		<div class="col-12 text-center title-done">Click image to toggle size</div>

		<!-- Display each recipe in list created by search -->
		<div class="row">
			<div v-for="(recipe, index) in recipes" :class="flexibleClass">
				<div class="d-flex flex-column align-items-center top-border title-done">
					<h4 class="text-center">{{ recipe.title }}</h4>
					<!-- Clicking image toggles viewer width BIG and SMALL -->
					<img
						:src="recipe.url"
						@click="superSize(index)"
						:class="isOneActive(index)"/>
					<span class="text-center title-done">{{ recipe.description }}</span>
				</div>
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
			isActive: false,
			chosenOne: -1
		}
	},
	computed: {
		flexibleClass() {
			if(this.isActive) {
				return "col-12"
			} else {
				return "col-12 col-md-6 col-xl-4"
			}
		}
	},
	methods: {
		isOneActive(index) {
			if(!this.isActive) {
				return 'showSmall'
			} else if(this.chosenOne === index) {
				return 'showBig'
			} else return 'showNone'
		},
		superSize(index) {
			this.isActive = !this.isActive;
			this.chosenOne = index;
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
		height: auto;
		margin: 10px;
	}

	.showBig {
		width: 115%;
	}

	.showSmall {
		width: 15vw;
	}

	.showNone {
		display: none;
	}

	.mainDivSearchResults {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border-radius: 10px;
		border: 2px solid black;
	}

	.top-border {
		/* border-style: inset double;
	 	border-color: #fd9355;
	 	border-width: medium; */
		border: medium inset  #fd9355;
		padding: 2rem;
	}
</style>
