<template>
  <div class="Home">
    <div class="home-img" @click="goFeatures" @touchend="goFeatures"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goFeatures() {
      this.$router.push({
        name: "Features"
      });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.home-img {
  width: 750px;
  height: 1180px;
  background-image: url("../assets/img/index1.png");
  background-size: 750px 1180px;
  background-position: center;
}
</style>
