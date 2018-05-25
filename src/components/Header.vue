<template>
	<div class="row align-items-end mainDivHeader">
		<div class="col-12 col-md-4 d-flex justify-content-center logoDiv">
			<span class="logoText">YD's Yummys</span>
		</div>
		<!-- <div class="col-12 col-sm-3 logoDiv">
			<img :src="image">
		</div> -->
		<div class="d-flex justify-content-center col-12 col-md-5 offset-md-3 col-lg-4 offset-lg-4 logoDiv">
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
		width: 100%;
		height: auto;
		margin: 0.5rem;
	}

	.title-done {
		margin-bottom: 2rem;
	}

	.logoDiv {
		background-color: #e6e123;
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;

	}

	.logoText {
		font-size: 1.5rem;
		font-family: Bauhaus93;
		color: #d33664;
		margin: 0.5rem 0.5rem;
	}

	.mainDivHeader {
		background-image: url('~../assets/cupcakes.jpg');
		background-size: contain;
		min-height: 8rem;
		margin: auto -15px 1rem -15px;
		background-color: #2ebbd6;
		padding: 1.5rem 1.5rem 0;
	}

	button {
		margin: 0.5rem 0.5rem;
	}
</style>
