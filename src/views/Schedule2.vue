<template>
  <div class="Schedule2">
    <div
      class="schedule2-img"
      @clicks="goSchedule3"
      @touchend="goSchedule3"
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
    return {};
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
  height: 1355px;
  background-image: url("../assets/img/schedule2-img1.png");
  background-size: 750px 1355px;
}
.to4 {
  position: absolute;
  width: 200px;
  height: 70px;
  left: 272px;
  top: 410px;
  z-index: 200px;
}
</style>
