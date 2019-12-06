<template>
  <div class="Back" @click="goBack">
    <img src="../assets/img/left.png" alt="back" />
  </div>
</template>

<script>
export default {
  name: "Back",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Back {
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.Back > img {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
