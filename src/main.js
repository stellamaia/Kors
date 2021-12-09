import Vue from 'vue'
import App from './App.vue'
import VMask from 'v-mask'


import Vuelidate from 'vuelidate'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuelidate)
Vue.use(VMask);

new Vue({
  render: h => h(App),
}).$mount('#app')
