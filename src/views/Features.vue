<template>
  <div
    class="Features"
    @touchstart="startHandle"
    @touchmove="prevent"
    @touchend="endHandel"
  >
    <div class="features-img">
      <div class="scene">
        <!-- show-front show-right show-back show-left -->
        <div
          class="cube"
          :class="cubeClass[cubeIndex]"
          :style="{ transform: cubeRotateYStyle }"
        >
          <div class="cube__face cube__face--front" @click.stop="goTips"></div>
          <div
            class="cube__face cube__face--back"
            @click.stop="goSchedule"
          ></div>
          <div
            class="cube__face cube__face--right"
            @click.stop="goPickup"
          ></div>
          <div class="cube__face cube__face--left" @click.stop="goAround"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getLS } from "@/utils";

export default {
  name: "Features",
  data() {
    return {
      cubeClass: ["show-front", "show-right", "show-back", "show-left"],
      touchstartX: 0
    };
  },
  computed: {
    ...mapState("app/store", {
      cubeIndex: state => state.cubeIndex,
      cubeRotateY: state => state.cubeRotateY,
      cubeRotateYStyle: state => state.cubeRotateYStyle
    })
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions({
      changeRotate: "app/store/changeRotate"
    }),
    startHandle(e) {
      // console.log("start");
      // console.log(e);
      this.touchstartX = e.changedTouches[0].clientX;
    },
    endHandel(e) {
      // console.log("end");
      // console.log(e);
      const touchendX = e.changedTouches[0].clientX;
      let cubeIndex = this.cubeIndex;
      let cubeRotateY = this.cubeRotateY;
      if (this.touchstartX - touchendX > 10) {
        cubeRotateY -= 90;
        if (this.cubeIndex === 3) {
          cubeIndex = 0;
        } else {
          cubeIndex += 1;
        }
      } else if (this.touchstartX - touchendX < -10) {
        cubeRotateY += 90;
        if (this.cubeIndex === 0) {
          cubeIndex = 3;
        } else {
          cubeIndex -= 1;
        }
      }
      const cubeRotateYStyle =
        "translateZ(-100px) rotateY(" + cubeRotateY + "deg)";
      this.changeRotate({
        cubeIndex,
        cubeRotateY,
        cubeRotateYStyle
      });
    },
    goSchedule() {
      // this.$router.push({
      //   name: "Schedule2"
      // });
      const has_sign = getLS("depulu_has_sign3");
      if (has_sign) {
        this.$router.push({
          name: "Schedule2"
        });
      } else {
        window.wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: res => {
            if (res.resultStr === "http://dlp.doorder.com/front/#/schedule") {
              this.$router.push({
                name: "Schedule"
              });
            } else {
              this.$toast({
                message: "请扫描正确的二维码",
                position: "top",
                duration: 2000
              });
            }
          }
        });
      }
    },
    // judgeDate() {
    //   return new Date().toLocaleDateString() === "2019/1/18";
    // },
    goTips() {
      this.$router.push({
        name: "Tips"
      });
    },
    goPickup() {
      this.$router.push({
        name: "Pickup"
      });
    },
    goAround() {
      this.$router.push({
        name: "Around"
      });
    },
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Features {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.features-img {
  width: 750px;
  height: 1180px;
  background-image: url("../assets/img/features1.png");
  background-size: 750px 1180px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene,
.scene * {
  box-sizing: border-box;
}
.scene {
  position: relative;
  width: 352px;
  height: 332px;
  perspective: 800px;
  /* perspective-origin: 80% 0%; */
}

.cube {
  width: 352px;
  height: 332px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: all 1s;
}

/* .cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
} */
/* .cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
} */
/* .cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
} */
/* .cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
} */
.cube.show-front > .cube__face--back,
.cube.show-front > .cube__face--left,
.cube.show-right > .cube__face--front,
.cube.show-right > .cube__face--left,
.cube.show-back > .cube__face--front,
.cube.show-back > .cube__face--right,
.cube.show-left > .cube__face--back,
.cube.show-left > .cube__face--right {
  opacity: 0.4;
}
.cube.show-front > .cube__face--right,
.cube.show-right > .cube__face--back,
.cube.show-back > .cube__face--left,
.cube.show-left > .cube__face--front {
  opacity: 0.8;
}

.cube__face {
  position: absolute;
  width: 352px;
  height: 332px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background-image: url("../assets/img/tips1.png");
  background-size: 339px 327px;
  transform: rotateY(0deg) translateZ(176px);
}
.cube__face--right {
  background-image: url("../assets/img/pickup1.png");
  background-size: 346px 332px;
  transform: rotateY(90deg) translateZ(176px);
}
.cube__face--back {
  background-image: url("../assets/img/schedule1.png");
  background-size: 346px 332px;
  transform: rotateY(180deg) translateZ(176px);
}
.cube__face--left {
  background-image: url("../assets/img/around1.png");
  background-size: 351px 328px;
  transform: rotateY(-90deg) translateZ(176px);
}
</style>
