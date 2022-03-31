import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import App from "@/App";
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        { path: '/lookup', component: HelloWorld },
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
