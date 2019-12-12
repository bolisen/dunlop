<template>
  <div class="Schedule">
    <div class="schedule-img">
      <div class="schedule-form f18">
        <div class="form-input">
          <input type="text" v-model.trim="name" placeholder="姓名" />
        </div>
      </div>
      <!--  <div class="schedule-btn" :class="{ act: date118 }" @click="sign">
        签到
      </div> -->
      <div class="schedule-btn" @click="sign">签到</div>
      <p class="schedule-tip f12">*请填写姓名，以便查看会议安排</p>
      <div class="schedule-tip1 f16" v-show="isFaile">
        <p>签到失败</p>
        <p>请核查您的姓名</p>
        <p>或者联系会务组邓益</p>
        <p><a href="tel:13776206018">13776206018</a></p>
      </div>
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
import { setLS } from "@/utils";
export default {
  name: "Schedule",
  data() {
    return {
      name: "",
      date118: false,
      loading: false,
      isFaile: false
    };
  },
  components: {
    Back
  },
  created() {
    //this.judgeDate();
  },
  mounted() {},
  methods: {
    judgeDate() {
      if (
        new Date().toLocaleDateString() === "2019/12/13" &&
        new Date().getHours() > 9
      ) {
        this.date118 = true;
      }
    },
    sign() {
      if (!this.date118) return;
      if (!this.name) {
        this.$toast({
          message: "请输入姓名",
          position: "top",
          duration: 2000
        });
        return;
      }
      if (this.loading) return;
      this.loading = true;
      this.$http
        .post("/index/sign/addPost", {
          name: this.name
        })
        .then(res => {
          console.log(res);
          setLS("depulu_has_sign3", 1);
          this.isFaile = false;
          this.loading = false;
          this.$router.replace({
            name: "Schedule2"
          });
        })
        .catch(() => {
          this.loading = false;
          this.isFaile = true;
        });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Schedule {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule-img {
  width: 750px;
  height: 1180px;
  background-image: url("../assets/img/schedule-img1.png");
  background-size: 750px 1180px;
}
.schedule-form {
  padding-top: 345px;
}
.form-input {
  margin: 0 auto 38px;
  width: 390px;
  height: 77px;
  border: 2px solid #b6851c;
}
.form-input > input {
  box-sizing: border-box;
  width: 100%;
  height: 77px;
  line-height: 77px;
  padding-left: 10px;
  background-color: #ffffff;
  color: #333333;
}
.form-input > input::placeholder {
  color: #a4a4a4;
}
.schedule-btn {
  margin: 0 auto 26px;
  width: 394px;
  height: 77px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  background-color: #fee100;
}
.schedule-btn.act {
  background-color: #fee100;
}
.schedule-tip {
  width: 394px;
  margin: 0 auto;
  color: #ffffff;
}
.schedule-tip1 {
  margin-top: 375px;
  text-align: center;
  color: #ffffff;
}
.schedule-tip1 a {
  color: #ffffff;
  text-decoration-line: underline;
}
</style>
