<template>
  <div class="Pickup">
  <div class="pickup-img">
    <img src="" alt="">
      <!--<a class="tel1" href="tel:13651777606"></a>
      <a class="tel2" style="height:0.6rem" href="tel:13811410413"></a>
      <a class="tel3" style="height:0.6rem" href="tel:18124289170"></a>
      <a class="tel4" href="tel:18801936667"></a>
      <a class="tel5" href="tel:13020241395"></a>
      <a class="tel6" href="tel:18962600508"></a>
      <a class="tel7" href="tel:18621378075"></a>
      <a class="tel8" href="tel:18601707030"></a>
      <a class="tel9" href="tel:18801936667"></a>
      <a class="tel10" href="tel:13020251395"></a>
      <a class="tel11" href="tel:13357112331"></a>
      <a class="tel12" href="tel:18901877166"></a>
      <a class="tel13" href="tel:18801936667"></a>
      <a class="tel14" href="tel:13020251395"></a>
      <a class="tel15" href="tel:18801936667"></a>
      <a class="tel16" href="tel:13020251395"></a>
      <a class="tel18" href="tel:18801936667"></a>
      <a class="tel19" href="tel:13020251395"></a>-->
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
  top: 390px;
  right: 100px;
}
.tel2 {
  top: 430px;
  right: 100px;
}
.tel3 {
  top: 466px;
  right: 100px;
}
.tel4 {
  top: 506px;
  right: 100px;
}
.tel5 {
  top: 536px;
  right: 100px;
}
.tel6 {
  top: 566px;
  right: 100px;
}
.tel7 {
  top: 606px;
  right: 100px;
}
.tel8 {
  top: 646px;
  right: 100px;
}
.tel9 {
  top: 686px;
  right: 100px;
}
.tel10 {
  top: 706px;
  right: 100px;
}
.tel11 {
  top: 736px;
  right: 100px;
}
.tel12 {
  top: 766px;
  right: 100px;
}
.tel13 {
  top: 796px;
  right: 100px;
}
.tel14 {
  top: 826px;
  right: 100px;
}
.tel15 {
  top: 856px;
  right: 100px;
}
.tel16 {
  top: 886px;
  right: 100px;
}
.tel17 {
  bottom: 350px;
  right: 100px;
}
.tel18 {
  bottom: 320px;
  right: 100px;
}
.tel19 {
  bottom: 290px;
  right: 100px;
}
</style>
