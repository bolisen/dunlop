<template>
  <div class="test">
    test page
    <p>toast</p>
    <mt-button type="primary" size="small" @click="toastWarning"
      >warning toast</mt-button
    >&nbsp;
    <mt-button type="primary" size="small" @click="toastSuccess"
      >success toast</mt-button
    >&nbsp;
    <mt-button type="primary" size="small" @click="toastNormal"
      >normal toast</mt-button
    >&nbsp;
    <p>messgaebox</p>
    <mt-button type="primary" size="small" @click="messagePrompt"
      >prompt messgaebox</mt-button
    >&nbsp;
    <mt-button type="primary" size="small" @click="messageInput"
      >input messgaebox</mt-button
    >&nbsp;
    <p>indicator <span>项目中使用 triple-bounce</span></p>
    <mt-button type="primary" size="small" @click="indicatorTest('snake')"
      >snake indicator</mt-button
    >&nbsp;
    <mt-button
      type="primary"
      size="small"
      @click="indicatorTest('fading-circle')"
      >fading-circle indicator</mt-button
    >&nbsp;
    <mt-button
      type="primary"
      size="small"
      @click="indicatorTest('ouble-bounce')"
      >ouble-bounce indicator</mt-button
    >&nbsp;
    <mt-button
      type="primary"
      size="small"
      @click="indicatorTest('triple-bounce')"
      >triple-bounce indicator</mt-button
    >&nbsp;
    <p>wechat jssdk</p>
    <mt-button type="primary" size="small" @click="openwechatlocation"
      >open wechat location</mt-button
    >&nbsp;
    <mt-button type="primary" size="small" @click="getwechatlocation"
      >get wechat location</mt-button
    >&nbsp;
    <p>location: {{ locationres }}</p>
    <p>test input file</p>
    <div>
      <input type="file" />
      <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      locationres: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    toastWarning() {
      this.$toast({
        message: "warning",
        position: "middle", // 'top' 'bottom' 'middle' 默认： middle
        iconClass: "iconfont icon-warning",
        duration: 2000
      });
    },
    toastSuccess() {
      this.$toast({
        message: "success",
        position: "middle", // 'top' 'bottom' 'middle' 默认： middle
        iconClass: "iconfont icon-right",
        duration: 2000
      });
    },
    toastNormal() {
      this.$toast({
        message: "normal",
        position: "top", // 'top' 'bottom' 'middle' 默认： middle
        duration: 2000
      });
    },
    messagePrompt() {
      this.$messagebox({
        title: "提示",
        message: "确定要退出系统么?",
        showCancelButton: true,
        confirmButtonClass: "orange"
      }).then(res => {
        if (res === "confirm") {
          console.log(res);
        }
      });
    },
    messageInput() {
      this.$messagebox({
        title: "",
        message: "请输入名称",
        showInput: true,
        showCancelButton: true,
        confirmButtonClass: "orange"
      }).then(res => {
        if (res === "confirm") {
          console.log(res);
        }
      });
    },
    indicatorTest(type) {
      this.$indicator.open({
        text: "获取中",
        spinnerType: type
      });
      setTimeout(() => {
        this.$indicator.close();
      }, 1000);
    },
    openwechatlocation() {
      window.wx.openLocation({
        latitude: 31.1922, // 纬度，浮点数，范围为90 ~ -90
        longitude: 121.3343, // 经度，浮点数，范围为180 ~ -180。
        name: "上海", // 位置名
        address: "虹桥机场", // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
    getwechatlocation() {
      window.wx.getLocation({
        type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: res => {
          this.locationres = JSON.stringify(res);
        }
      });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.test p > span {
  font-size: 14px;
}
</style>
