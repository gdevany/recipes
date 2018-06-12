import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		message: 'Hello',
		sspw: 'GREG',
		familyName: 'Devany',
		cloudName: 'gdevany',
		cloudinaryFilePath: 'devany/recipes',
		CLOUDINARY_UPLOAD_PRESET: 'eajtwfr4',
		CLOUDINARY_UPLOAD_URL: `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
		CLOUDINARY_DELETEIMAGE_URL: `https://api.cloudinary.com/v1_1/${this.cloudName}/delete_by_token`,
		projectMainImageTag: 'recipe',
		pageSelected: 'home',
		loggedIn: false,
		searchWord: 'favorites',
		foodSubjects: [
			'favorites',
			'breakfast',
			'dinner',
			'dessert',
			'bread',
			'sauce/dip',
			'drink',
			'soup',
			'salad',
			'cookies',
			'cake',
			'pie',
			'other'
		]
	},

	getters: {
		getPageSelected: state => {
			return state.pageSelected;
		}
	},

	mutations: {
		setPage: (state, payload) => {
			state.pageSelected = payload
		},
		searchWordChosen: (state, payload) => {
			payload === 'other' ?
				state.searchWord = 'recipe'
				: state.searchWord = payload;
		},
		pwIsCorrect: (state, payload) => {
				state.loggedIn = payload
		}
	},

	actions: {
		setPage: ({ commit }, payload) => {
			commit('setPage', payload)
		},
		searchWordChosen: ({ commit }, payload) => {
			commit('searchWordChosen', payload)
		},
		pwIsCorrect: ({ commit }, payload) => {
			commit('pwIsCorrect', payload)
		}
	}
})
