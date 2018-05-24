<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivSearch">
		<h1 class="col-12 text-center">Search</h1>
		<div class="col-12 text-center title-done">Select one:</div>
		<!-- <div class="form-check form-check-inline title-done" v-for="food in foodSubjects">
			<label :for='food'>
				<input
					type='radio'
					:id='food'
					:value='food'
					v-model='foodChosen'>&nbsp{{ food }}
			</label>
		</div> -->
		<div class="title-done d-flex inline-flex flex-wrap justify-content-center">
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
		margin: 0;
	}

	.mainDivSearch {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border-radius: 10px;
	}

	.title-done {
		margin-bottom: 3rem;
	}
</style>
