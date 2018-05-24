<template>
  <!-- <div class="container-fluid mainDivApp" :style=" 'background-image:url(' + bgImage + '); background-size: contain' "> -->
	<div class="container-fluid mainDivApp">
		<app-header></app-header>
		<app-recipes></app-recipes>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Recipes from './components/Recipes.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			// bgImage: require("./assets/deserts.png")
    }
  },
	components: {
		appHeader: Header,
		appRecipes: Recipes
	}
}
</script>

<style>
	body {
		/* background-image: url('~./assets/deserts.png');
		background-size: contain; */
		background-color: #fd9355;
	}

	.mainDivApp {
		/* background-color: #bbc19859; */
		min-height: 100vh;
		padding-left: 3rem;
		padding-right: 3rem;
	}
</style>
