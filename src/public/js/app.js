import Vue from 'vue';

import VueNativeSock from 'vue-native-websocket';
Vue.use(VueNativeSock, 'ws://0.0.0.0:3333', { format: 'json' });

import App from './components/App.vue';
import TopNav from './components/TopNav.vue';
import MainContent from './components/MainContent.vue';
import SearchBox from './components/SearchBox.vue';
import SearchBox2 from './components/SearchBox2.vue';
import Chart from './components/Chart.vue';
import SearchResults from './components/SearchResults.vue';

Vue.component('app', App);
Vue.component('top-nav', TopNav);
Vue.component('main-content', MainContent);
Vue.component('search-box', SearchBox);
Vue.component('search-box2', SearchBox2);
Vue.component('chart', Chart);
Vue.component('search-results', SearchResults);

var app = new Vue({
    el: '#app',
});