import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { changeWxTitle } from "./utils";
import request from "./request";
import { Button, Toast, MessageBox, Indicator, InfiniteScroll } from "mint-ui";

Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
Vue.$indicator = Vue.prototype.$indicator = Indicator;

Vue.config.productionTip = false;
Vue.use(InfiniteScroll);
Vue.prototype.$http = request;

Vue.component(Button.name, Button);

router.afterEach(route => {
  // console.log(route);
  changeWxTitle(route.meta.title);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
