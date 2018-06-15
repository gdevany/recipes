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
		background-color: #383232;
		font-family: candara;
	}

	.container-fluid {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}

	.btn-primary {
		background-color: #d33664;
	}

	.padBottom {
		margin-bottom: 3rem;
	}

	.mainDivApp {
		min-height: 100vh;
	}

	.shortPad {
		padding: 0;
	}
</style>
