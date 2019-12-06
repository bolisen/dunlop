<template>
  <div class="Schedule2">
    <div class="schedule2-img"></div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Schedule4",
  data() {
    return {};
  },
  components: {
    Back
  },
  created() {},
  methods: {},
  beforeDestroy() {}
};
</script>

<style scoped>
.Schedule2 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule2-img {
  width: 750px;
  height: 1355px;
  background-image: url("../assets/img/moment.png");
  background-size: 750px 1355px;
}
</style>
