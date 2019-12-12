import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/features",
      name: "Features",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "features" */ "./views/Features.vue")
    },
    {
      path: "/schedule",
      name: "Schedule",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule" */ "./views/Schedule.vue")
    },
    {
      path: "/schedule2",
      name: "Schedule2",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule2" */ "./views/Schedule2.vue")
    },
    {
      path: "/schedule3",
      name: "Schedule3",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule3" */ "./views/Schedule3.vue")
    },
    {
      path: "/schedule4",
      name: "Schedule4",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule4" */ "./views/Schedule4.vue")
    },
    {
      path: "/schedule5",
      name: "Schedule5",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule4" */ "./views/Schedule5.vue")
    },
    {
      path: "/schedule6",
      name: "Schedule6",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "schedule4" */ "./views/Schedule6.vue")
    },
    {
      path: "/tips",
      name: "Tips",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () => import(/* webpackChunkName: "tips" */ "./views/Tips.vue")
    },
    {
      path: "/pickup",
      name: "Pickup",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "pickup" */ "./views/Pickup.vue")
    },
    {
      path: "/around",
      name: "Around",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () =>
        import(/* webpackChunkName: "around" */ "./views/Around.vue")
    },
    {
      path: "/test",
      name: "Test",
      meta: { title: "2020年度邓禄普轮胎代理商会议" },
      component: () => import(/* webpackChunkName: "test" */ "./views/Test.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
