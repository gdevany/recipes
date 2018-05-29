<template>
  <div class="col-12 col-lg-8 offset-lg-2 justify-content-center mainDivLogin">
		<div class="">
			<h1 class="col-12 text-center title-done">Please log in:</h1>
			<form>
				<div class="col-12 form-group">
					<label for="password"></label>
					<input
						autofocus
						placeholder="Enter the super secret password"
						class="form-control"
						v-model="pwEntered"
						@keydown.enter.prevent="pwCheck">
					</input>
				</div>
			</form>
		</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			pwEntered: '',
		}
	},
	methods: {
		...mapActions([
			'pwIsCorrect'
		]),
		pwCheck() {
			if(this.pwEntered === 'gregiscool') {
				this.pwIsCorrect(true)
			} else {
				this.pwEntered = '';
				alert("Wrong password.  Who is cool?")
			}
		}
	}
}
</script>

<style scoped>
	.mainDivLogin {
		padding-top: 3rem;
		background-color: #e3e8ce;
		border-radius: 10px;
		border: 7px inset #fd9355;
	}
</style>
