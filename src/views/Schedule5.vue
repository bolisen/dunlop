<template>
  <div
    class="Schedule3"
    @touchstart="startHandle"
    @touchmove="prevent"
    @touchend="endHandel"
  >
    <div class="schedule3-img" @click="preview"></div>
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
        current: "http://dlp.doorder.com/front/clear2.png", // 当前显示图片的http链接
        urls: ["http://dlp.doorder.com/front/clear2.png"] // 需要预览的图片http链接列表
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
  background-image: url("../assets/img/meet2.png");
  background-size: 750px 1355px;
}
</style>
