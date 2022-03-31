import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import App from "@/App";
import Lookup from "@/views/Lookup";

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        { path: '/lookup', component: Lookup },
        { path: '*', redirect: '/lookup' }
    ]
})

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
    el: '#app',
    vuetify,
    render: h=> h(App),
    router,
    data: () => ({
    })
})
