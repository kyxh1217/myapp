import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import KuiAjax from './service/KuiAjax';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
import KuiUtils from './constant/AppUtils';
import 'vant/lib/index.css';


// eslint-disable-next-line no-unused-expressions
process.env.VUE_APP_MOCK && import('./mock/mock.js');

const request = KuiAjax(router);
Vue.use(Vant);
Vue.use(request);
Vue.config.productionTip = false;
Vue.prototype.KuiUtils = KuiUtils;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
