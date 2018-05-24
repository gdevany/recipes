<template>
	<div class="row align-items-center flex-column mainDivHeader">
		<div class="title-done logoDiv">
			<img :src="image">
		</div>
		<div class="logoDiv">
			<button class="btn btn-primary" @click="setPage('home')">Home</button>
			<button class="btn btn-primary" @click="setPage('search')">Search</button>
			<button class="btn btn-primary" @click="setPage('addRecipe')">Add Recipe</button>
		</div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			image: require("../assets/ydsyummys.png")
		}
	},
	methods: {
		...mapActions([
			'setPage'
		])
	}
}
</script>

<style scoped>
	img {
		/* width: auto;
		height: 2rem; */
	}

	.title-done {
		margin-bottom: 2rem;
	}

	.logoDiv {
		background-color: #e6e123;
		border-radius: 5px;
	}

	.mainDivHeader {
		background-image: url('~../assets/deserts.png');
		background-size: contain;
		margin-bottom: 1.5rem;
		margin-right: -48px;
		margin-left: -48px;
		border-bottom: 1px solid grey;
		background-color: #2ebbd6;
		padding: 1.5rem;
	}

	button {
		margin: 10px;
	}
</style>
