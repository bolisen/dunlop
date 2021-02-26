<template>
  <div
    class="Schedule3"
    @touchstart="startHandle"
    @touchmove="prevent"
    @touchend="endHandel"
  >
    <div class="schedule3-img" @click="preview">
      <img src="../assets/img/meet4.png" class="schedule3-bgimg">
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Schedule3",
  data() {
    return {};
  },
  components: {
    Back
  },
  created() {},
  mounted() {},
  methods: {
    startHandle(e) {
      this.touchstartY = e.changedTouches[0].clientY;
    },
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    goSchedule3() {
      this.$router.push({
        name: "Schedule6"
      });
    },
    preview() {
      window.wx.previewImage({
        current: "http://pa-api.jiaxinxinyu.com/meet4.png", // 当前显示图片的http链接
        urls: ["http://pa-api.jiaxinxinyu.com/meet4.png"] // 需要预览的图片http链接列表
      });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Schedule3 {
  height: 100%;
}
.schedule3-img {
  width: 750px;
  height: 1355px;
}
.schedule3-bgimg {
  width: 80%;
  height: 80%;
  padding-left:65px;
  padding-top: 80px;
}
</style>
