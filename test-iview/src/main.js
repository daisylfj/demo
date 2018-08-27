// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import iView from 'iview'
import store from './store/index'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import gapi from 'vue-gapi'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
const router = new VueRouter({
    esModule: false,
    routes: [ 
        {
            path: '',
            component: (resolve) => require(['./components/HOME.vue'], resolve)
        },
        {
            path: '/1-1',
            component: (resolve) => require(['./components/1-1.vue'], resolve)
        },
        {
            path: '/ACT-sub',
            component: (resolve) => require(['./components/ACT-sub.vue'], resolve)
        },
        {
            path: '/ACT',
            component: (resolve) => require(['./components/ACT.vue'], resolve)
        },
        {
            path: '/HOME',
            component: (resolve) => require(['./components/HOME.vue'], resolve)
        },
        {
            path: '/FAQ',
            component: (resolve) => require(['./components/FAQ.vue'], resolve)
        }
    ]
});
const apiConfig = {
  apiKey:"AIzaSyCHUuYz1fEjDBLI_iiweJFYUAqoZoQioqM",
  clientId:"580763462399-e47qaeetm9plbct4m6rl7ndqr84ve60q.apps.googleusercontent.com",
  discoveryDocs:["https://people.googleapis.com/$discovery/rest?version=v1","https://www.googleapis.com/discovery/v1/apis/admin/directory_v1/rest"],
  scope:"https://www.googleapis.com/auth/user.emails.read https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/script.external_request"
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
}
// Use the plugin and pass along the configuration
Vue.use(gapi, apiConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App), //不加这句render画面不能出来  1-2/1-3
  components: { App },
  template: '<App/>'
})

