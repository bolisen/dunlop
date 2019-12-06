<template>
  <div class="Schedule2">
    <div
      class="schedule2-img"
      @touchstart="startHandle"
      @touchmove="prevent"
      @touchend="endHandel"
    ></div>
    <div class="to4" @click.stop="goSchedule4"></div>
    <Back />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Back from "@/components/Back";
export default {
  name: "Schedule2",
  data() {
    return {
      touchstartY: 0,
      flag: false
    };
  },
  computed: {
    ...mapState("app/store", {
      isTip: state => state.isTip
    })
  },
  components: {
    Back
  },
  created() {},
  mounted() {
    if (!this.isTip) {
      this.$toast({
        message: "您已签到成功",
        position: "middle", // 'top' 'bottom' 'middle' 默认： middle
        iconClass: "iconfont icon-right",
        duration: 2000
      });
      this.changeIsTip();
    }
  },
  methods: {
    ...mapActions({
      changeIsTip: "app/store/changeIsTip"
    }),
    startHandle(e) {
      this.touchstartY = e.changedTouches[0].clientY;
    },
    endHandel(e) {
      const touchendY = e.changedTouches[0].clientY;
      let temp = Math.abs(this.touchstartY - touchendY);
      if (temp > 20) this.goSchedule3();
    },
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    goSchedule3() {
      this.$router.push({
        name: "Schedule3"
      });
    },
    goSchedule4() {
      this.$router.push({
        name: "Schedule4"
      });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Schedule2 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.schedule2-img {
  position: relative;
  width: 750px;
  height: 100%;
  background-image: url("../assets/img/schedule2-img1.png");
  background-size: 750px 100%;
}
.to4 {
  position: absolute;
  width: 200px;
  height: 70px;
  left: 272px;
  top: 390px;
  z-index: 200px;
}
</style>
