<template>
  <div class="col-12 justify-content-center mainDivSearch">
		<h1 class="col-12 text-center">Search</h1>
		<div class="col-12 text-center title-done">Select one:</div>
		<span class="form-check form-check-inline title-done" v-for="food in foodSubjects">
			<label :for='food'>
				<input
					type='radio'
					:id='food'
					:value='food'
					v-model='foodChosen'>&nbsp{{ food }}
			</label>
		</span>
		<br>
		<button class="col-12 btn btn-primary" @click="searchIt">Search</button>
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
			'setPage', 'searchWordChosen'
		]),
		searchIt() {
			this.setPage('searchResults');
			this.searchWordChosen(this.foodChosen);
		}
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

	.mainDivSearch {
		padding-top: 3rem;
		background-color: #e3e8ce;
		opacity: 0.8;
	}

	.title-done {
		margin-bottom: 3rem;
	}
</style>
