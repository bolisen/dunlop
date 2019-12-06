<template>
  <div class="Tips">
    <div class="tips-img">
      <a class="tel1" href="tel:13776206018"></a>
      <a class="tel2" href="tel:13020251395"></a>
      <a class="tel3" href="tel:13564671412"></a>
      <a class="tel4" href="tel:13818839650"></a>
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Tips",
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
.Tips {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tips-img {
  width: 750px;
  height: 1180px;
  background-image: url("../assets/img/tips_img1.png");
  background-size: 750px 1180px;
  position: relative;
}
.tips-img > a {
  position: absolute;
  display: block;
  width: 150px;
  height: 36px;
  left: 170px;
  /* background-color: rgba(0, 0, 0, 0.6); */
}
.tel1 {
  bottom: 145px;
}
.tel2 {
  bottom: 105px;
}
.tel3 {
  bottom: 69px;
}
.tel4 {
  bottom: 33px;
}
</style>
