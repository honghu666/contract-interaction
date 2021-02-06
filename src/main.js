import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import App from './App.vue'
import Clipboard from 'clipboard';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.Clipboard = Clipboard;
Vue.prototype.configs = {
  ethAddress: "0x029BcE480309E0125CF6a921523Fb1bE06c48Dc4",
  btcAddress: "1JMpxB35CQvhxGmrhqbh5dbe9LwJT8tU3q"
};

const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');