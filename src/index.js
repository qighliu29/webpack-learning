import Vue from 'vue';
import App from './App.vue';
import StyleSheet from './assets/style/stylesheet.scss'; // eslint-disable-line no-unused-vars

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App, {
        props: {
            top: false,
        },
    }),
});

