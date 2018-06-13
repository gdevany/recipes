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
		background-color: #fd9355;
		font-family: candara;
	}

	.btn-primary {
		background-color: #17a2b8;
	}

	.padBottom {
		margin-bottom: 3rem;
	}

	.mainDivApp {
		min-height: 100vh;
	}
</style>
