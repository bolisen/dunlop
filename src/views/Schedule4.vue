<template>
  <div class="Schedule2">
    <div class="schedule2-img"><img src="../assets/img/moment.png" /></div>
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule2-img {
  width: 750px;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>
