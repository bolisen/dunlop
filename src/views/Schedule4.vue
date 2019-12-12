<template>
  <div class="Schedule2">
    <div class="schedule2-img">
      <div>
        <div class="box" v-for="(item, index) in list" :key="index">
          <img :src="'http://dlp.doorder.com' + item.img" alt="" />
        </div>
      </div>
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Schedule4",
  data() {
    return {
      list: []
    };
  },
  components: {
    Back
  },
  created() {},
  methods: {
    getImg() {
      this.$http
        .post("/index/sign/listImg")
        .then(res => {
          this.list = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getImg();
  }
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
  height: 1355px;
  background: url("../assets/img/moment.png") no-repeat center center;
  background-size: 750px 1355px;
}
.schedule2-img > div {
  margin: 300px auto 0;
}
.box {
  float: left;
  width: 50%;
  height: 200px;
}
.box img {
  margin: 0 atuo;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid ffd801;
}
</style>
