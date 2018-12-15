import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueNativeSock from 'vue-native-websocket';
Vue.use(VueNativeSock, 'ws://0.0.0.0:3333', { format: 'json' });

import App from './components/App.vue';
import TopNav from './components/TopNav.vue';
import MainContent from './components/MainContent.vue';
import SearchBox from './components/SearchBox.vue';
import Chart from './components/Chart.vue';
import SearchResults from './components/SearchResults.vue';

Vue.component('app', App);
Vue.component('top-nav', TopNav);
Vue.component('main-content', MainContent);
Vue.component('search-box', SearchBox);
Vue.component('chart', Chart);
Vue.component('search-results', SearchResults);

const store = new Vuex.Store({
    state: {
        search: {
            query: '',
            results: [],
            duration: null
        }
    },
    mutations: {
        setQuery(state, query) {
            state.query = query
        },
        clearResults(state) {
            state.search.results = []
        },
        addResult(state, result) {
            state.search.results.push(result)
        },
        setDuration(state, duration) {
            state.search.duration = duration
        }
    },
    actions: {
        setQuery(context, query) {
            context.commit('setQuery', query)
        },
        clearResults(context) {
            context.commit('clearResults')
        },
        addResult(context, result) {
            context.commit('addResult', result)
        },
        setDuration(context, duration) {
            context.commit('setDuration', duration)
        }
    }
})

var app = new Vue({
    store
}).$mount('#app');