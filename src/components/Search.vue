<template>
  <div class="row justify-content-center">
		<h1 class="col-12 text-center">Search</h1>
		<span class="col-12 text-center title-done">Select one:</span>
		<div class="form-check form-check-inline title-done" v-for="food in foodSubjects">
			<label :for='food'>
				<input
					type='radio'
					:id='food'
					:value='food'
					v-model='foodChosen'>&nbsp{{ food }}
			</label>
		</div>
		<br>
		<button class="col-12 btn btn-primary" @click="setPage('searchResults')">Search</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			foodChosen: '',
			foodSubjects: this.$store.state.foodSubjects
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
	label {
		font-size: 1.5rem;
		margin: .5rem 1.5rem;
	}

	button {
		margin: 0;
	}

	.title-done {
		margin-bottom: 3rem;
	}
</style>
