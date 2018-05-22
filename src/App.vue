<template>
  <div class="container">
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

<style lang="scss">

</style>
