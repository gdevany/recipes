<template>
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
      msg: 'Welcome to the best recipes in the world',
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
		min-height: 100vh;
	}
</style>
