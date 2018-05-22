<template>
	<nav class="navbar navbar-light bg-light justify-content-between">
    <img src="../assets/ydsyummys.png" class="d-inline-block align-top">
		<div>
			<button class="btn btn-primary" @click="setPage('home')">Home</button>
			<button class="btn btn-primary" @click="setPage('search')">Search</button>
			<button class="btn btn-primary" @click="setPage('addRecipe')">Add Recipe</button>
		</div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			// image: "./assets/logo.png"
		}
	},
	methods: {
		...mapActions([
			'setPage'
		])
	}
}
</script>

<style lang="scss">
img {
	// width: auto;
	// height: 2rem;
}

.navbar {
	margin-bottom: 5rem;
	min-height: 5rem;
}

button {
	// margin: auto 0 !important;
}
</style>
