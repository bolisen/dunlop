<template>
  <div class="Around">
    <div class="around-img"><img src="../assets/img/around-img1.png" /></div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Around",
  data() {
    return {};
  },
  components: {
    Back
  },
  created() {},
  mounted() {},
  methods: {},
  beforeDestroy() {}
};
</script>

<style scoped>
.Around {
  height: 100%;
  overflow-y: auto;
}
.around-img {
  width: 750px;
  height: 1366px;
  /*   background-image: url("../assets/img/around-img1.png");
  background-size: cover; */
}
img {
  width: 100%;
  height: auto;
}
</style>
