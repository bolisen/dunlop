<template>
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    this.registerWX();
  },
  mounted() {},
  methods: {
    registerWX() {
      const url = window.location.href.split("#")[0];
      this.$http
        .post("/index/index/getJssdk", { url })
        .then(res => {
          console.log(res);
          window.wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: [
              "onMenuShareTimeline",
              "onMenuShareAppMessage",
              "scanQRCode"
            ] // 必填，需要使用的JS接口列表
          });
          window.wx.ready(function() {
            // alert('ready')
            console.log("ready");
            const options = {
              title: "邓禄普代理商会议",
              link: `${window.location.origin}`,
              imgUrl: `${window.location.origin}/share.jpeg`,
              desc: "2021年度邓禄普轮胎代理商会议欢迎您莅临",
              success: res => {
                console.log(res);
              },
              cancel: res => {
                console.log(res);
              }
            };
            window.wx.onMenuShareTimeline(options);
            window.wx.onMenuShareAppMessage(options);
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          });
          window.wx.error(function(res) {
            // alert(JSON.stringify(res))
            console.log(res);
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  beforeDestroy() {}
};
</script>

<style>
@import "../node_modules/animate.css/animate.css";
@import "~@/assets/fonts/iconfont.css";
@import "~@/assets/style/style.css";
@import "~@/assets/style/font.css";
#app {
  width: 750px;
  height: 100%;
  overflow-y: auto;
  background-image: url("./assets/img/bg1.png");
  background-size: 750px 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.mint-toast {
  top: 150px !important;
  font-weight: bold;
}
</style>
