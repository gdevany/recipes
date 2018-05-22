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
      msg: 'Welcome to Your Vue.js App'
    }
  },
	components: {
		appHeader: Header,
		appRecipes: Recipes
	}
}
</script>

<style>
	.mainDivApp {
		background-color: #bbc19859;
		min-height: 100vh;
		padding-left: 3rem;
		padding-right: 3rem;

	}
</style>
