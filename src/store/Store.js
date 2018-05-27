import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		message: 'Hello',
		foodSubjects: ['favorites','breakfast','dinner','dessert','bread','sauce/dip','drink','soup','salad','cookies','cake','pie','other'],
		pageSelected: 'home',
		cloudinaryProjectFile: 'devany/recipes/', //this is used to set a projectChosen (not used in this app)
		CLOUDINARY_UPLOAD_PRESET: 'eajtwfr4',
		CLOUDINARY_UPLOAD_URL: 'https://api.cloudinary.com/v1_1/gdevany/image/upload',
		projectMainImageTag: 'recipe',
		loggedIn: false,
		searchWord: 'favorites',
		cloudName: 'gdevany',
		cloudinaryFilePath: 'devany/recipes'
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
		}
	},

	actions: {
		setPage: ({ commit }, payload) => {
			commit('setPage', payload)
		},
		searchWordChosen: ({ commit }, payload) => {
			commit('searchWordChosen', payload)
		}
	}
})
