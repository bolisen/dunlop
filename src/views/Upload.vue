<template>
  <div class="center">
    <picture-input
        ref="pictureInput"
        @change="onChange"
        :crop="false"
        width="600"
        height="600"
        margin="16"
        :removable="canRemove"
        removeButtonClass="btn-remove"
        :hideChangeButton="true"
        accept="image/*"
        size="10"
        :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: '点击或拖拽上传',
        tap: '点击上传',
        remove: '移除图片'
      }">
    </picture-input>
    <div v-if="uploading" class="tip btn-remove">正在上传，请稍候...</div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: "Upload",
  components: {
    PictureInput
  },
  data() {
    return {
      canRemove: false,
      uploading: false
    };
  },
  methods: {
    onChange (image) {
      if (image) {
        console.log(image, this.$refs.pictureInput.file)
        let formData = new FormData();
        formData.append("image", this.$refs.pictureInput.file);
        this.uploading = true;
        this.canRemove = false;
        this.$http.form("/index/upload/upload", formData).then(() => {
          this.canRemove = true;
          this.uploading = false;
          alert('上传成功');
        }).catch(() => {
          this.canRemove = true;
          this.uploading = false;
          alert('上传失败');
        })
      }
    }
  }
};
</script>

<style>
.btn-remove {
  padding: 16px 32px;
  font-size: 28px;
  border-radius: 16px;
  background: #38abd0;
  color: #fff;
}
</style>
<style scoped>
.center {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 100px;
}

.btn-remove.tip {
  display: inline-block;
  margin-top: 30px;
}
</style>
