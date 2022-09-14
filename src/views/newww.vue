<template>
  <div class="big-container">
    <div>
      <div class="exit">
        <img
          src="@/assets/X_desktop.svg"
          class="close-button"
          @click="this.$router.push({ name: 'home' })"
        />
      </div>
      <div class="container">
        <div class="left">
          <div class="title">apr18</div>
          <div class="subtitle">
            <div>FOTO: BERNARDA CONIČ</div>
            <div>MUA: LAURA BUTKOVIČ</div>
            <div>
              MODELS: LAURA BUTKOVIČ, NINA BUTKOVIČ, VALENTINA GOLIČ, FEJZO
              KOŠIR
            </div>
          </div>
        </div>
        <div class="right">
          <div class="gallery" v-for="photo in photos" :key="photo"></div>
          <img :src="photo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  display: flex;
}

.left {
  width: 50%;
}

.title {
  letter-spacing: -5px;
  line-height: 0.7;
  transition: all 0.8s ease-out;
  cursor: pointer;
  font-size: 180px;
  text-transform: uppercase;
  position: fixed;
  margin: 0;
  left: 12px;
  top: 100px;
}

.text {
  margin: 0;
}

.subtitle {
  position: fixed;
  text-align: left;

  line-height: 0.7;
  font-size: 1vw;
  width: 25%;
}

.right {
  width: 50%;
}

.exit {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  width: 5rem;
  position: fixed;
}

.photos {
  max-width: 100%;
}
</style>

<script>
import okt18_1 from "@/assets/okt18/okt18_1.jpg";
import okt18_2 from "@/assets/okt18/okt18_2.jpg";
import okt18_3 from "@/assets/okt18/okt18_3.jpg";
import okt18_4 from "@/assets/okt18/okt18_4.jpg";
import okt18_5 from "@/assets/okt18/okt18_5.jpg";
import okt18_6 from "@/assets/okt18/okt18_6.jpg";
import okt18_7 from "@/assets/okt18/okt18_7.jpg";
import okt18_8 from "@/assets/okt18/okt18_8.jpg";
import okt18_9 from "@/assets/okt18/okt18_9.jpg";
export default {
  setup() {},
  name: "update-new",
  data() {
    return {
      photos: [
        okt18_1,
        okt18_2,
        okt18_3,
        okt18_4,
        okt18_5,
        okt18_6,
        okt18_7,
        okt18_8,
        okt18_9,
      ],
    };
  },
};
</script>
