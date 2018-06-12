<template>
	<div class="row align-items-end mainDivHeader">
		<div class="col-12 col-md-5 d-flex align-self-end">
			<span class="logoText logoDiv">YD's Yummys</span>
		</div>
		<div class="col-12 col-md-5 ml-auto d-flex justify-content-around logoDiv">
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

	.padBottom {
		margin-bottom: 2rem;
	}

	.logoDiv {
		background-color: #e6e123;
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
		margin-top: -2px;
	}

	.logoText {
		font-size: 2.0rem;
		font-family: Bauhaus93;
		color: #d33664;
		padding: 0.1rem 0.5rem;
		/* border-radius: 15px; */
		/* border-top-right-radius: 15px; */
		/* border-top-left-radius: 15px; */
	}

	.mainDivHeader {
		background-image: url('~../assets/cupcakes.jpg');
		background-size: contain;
		min-height: 8rem;
		margin: auto -15px 1rem -15px;
		background-color: #2ebbd6;
		padding: 1.5rem 1.5rem 0 0;
	}

	button {
		margin: 0.5rem;
	}
</style>
