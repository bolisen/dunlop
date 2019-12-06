<template>
  <div class="Pickup">
    <div class="pickup-img">
      <!--    <a class="tel1" href="tel:18317168002"></a>
      <a class="tel2" href="tel:18801936667"></a>
      <a class="tel3" href="tel:18726122280"></a>
      <a class="tel4" href="tel:18726122280"></a>
      <a class="tel5" href="tel:17621954965"></a>
      <a class="tel6" href="tel:18801936667"></a>
      <a class="tel7" href="tel:18717764190"></a>
      <a class="tel8" href="tel:15001903934"></a> -->
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Pickup",
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
.Pickup {
  height: 100%;
}
.pickup-img {
  width: 750px;
  height: 1476px;
  background-image: url("../assets/img/pickup-img1.png");
  background-size: 750px 1476px;
  position: relative;
}
.pickup-img > a {
  position: absolute;
  display: block;
  width: 150px;
  height: 40px;
  /* background-color: rgba(0, 0, 0, 0.6); */
}
.tel1 {
  top: 426px;
  right: 100px;
}
.tel2 {
  top: 526px;
  right: 100px;
}
.tel3 {
  top: 586px;
  right: 100px;
}
.tel4 {
  top: 656px;
  right: 100px;
}
.tel5 {
  top: 736px;
  right: 100px;
}
.tel6 {
  top: 806px;
  right: 100px;
}
.tel7 {
  bottom: 180px;
  right: 330px;
}
.tel8 {
  bottom: 180px;
  right: 130px;
}
</style>
