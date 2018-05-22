<template>
	<div class="row justify-content-center mainDivHeader">
		<div class="col-12 d-flex justify-content-center">
			<img src="../assets/ydsyummys.png" class="d-inline-block align-top">
		</div>
		<hr>
		<hr>
		<div justify-content-around>
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
			// image: "../assets/ydsyummys.png"
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

.mainDivHeader {
	margin-bottom: 1.5rem;
	border-bottom: 1px solid grey;
	background-color: #809f9e5e;
	padding: 1.5rem;
}

button {
	margin: 10px;
}
</style>
