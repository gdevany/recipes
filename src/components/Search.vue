<template>
  <div class="col-12 col-lg-10 offset-lg-1 justify-content-center mainDivSearch">
		<h1 class="col-12 text-center">Search</h1>
		<div class="col-12 text-center padBottom"><small>Select one:</small></div>

		<div class="padBottom d-flex inline-flex flex-wrap justify-content-center">
			<span
				class=""
				v-for="food in foodSubjects">
					<label :for='food' class="btn btn-outline-info" :class="activateClass(food)">
						<input
							type='radio'
							name="options"
							:id='food'
							:value='food'
							v-model='foodChosen'>&nbsp{{ food }}
					</label>
			</span>
		</div>
		<div class="text-center">Choosing 'other' will return all recipes</div>
		<button class="col-12 btn btn-secondary btn-lg btn-block" @click="searchIt">Search</button>
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
		},
		activateClass(food) {
			if(this.foodChosen === food)
			return {active: true};
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
		margin: 2rem 0;
	}

	.btn-outline-info {
		border-color: red;
	}

	.mainDivSearch {
		padding-top: 3rem;
		background-color: #4f4a4a;
		border: 2px solid black;
		color: #e4e1e1;
	}
</style>
