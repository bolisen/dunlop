<template>
  <div class="Schedule2">
    <div class="schedule2-img">
      <div>
        <div class="box" v-for="(item, index) in list" :key="index">
          <img
            :src="'http://pa-api.jiaxinxinyu.com' + item.img"
            alt=""
            @click="preview('http://pa-api.jiaxinxinyu.com' + item.img)"
          />
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
      list: [],
      imgList: []
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
          for (let i = 0; i < this.list.length; i++) {
            let imgStr = "http://pa-api.jiaxinxinyu.com" + this.list[i].img;
            this.imgList.push(imgStr);
          }
          console.log(this.imgList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    preview(img) {
      window.wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: this.imgList // 需要预览的图片http链接列表
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
  margin: 400px auto 0;
}
.box {
  float: left;
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
}
.box img {
  width: 250px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid ffd801;
}
</style>
