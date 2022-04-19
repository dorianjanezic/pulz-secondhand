<template>
    <img class="logo" :src="image" alt="" />
    <div class="second-hand-logo">
      <div>SECOND</div>
      <div>HAND</div>
  </div>
</template>

<script>
import image from "@/assets/pulz_logo.png";
export default {
  name: "PulzLogo",
  data() {
    return {
      image: image,
    };
  },
  props: {},
};
</script>

<style scoped>
.logo {
  max-height: 82%;
  position: fixed;
  left: 20px;
  top: 20px;
  width: 47%;
}

.second-hand-logo {
  width: 47.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 5.7vw;
  position: fixed;
  top: 84%;
  left: 17px;
  line-height: 1;
  margin-top: 1vw;
}

@media (max-width:450px) {
  .main-wr {
    display: block;
  }
  .main-wr-left {
    position: unset;
  }

  .logo {
    height: 120vw;
    position: relative;
    width: 94%;
        top: 3vw;
    left: 0;
  }

.second-hand-logo {
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 44px;
    position: relative;
    top: 84%;
    margin-bottom: 10vw;
    margin-top: 4vw;
    /* padding: 0 20px; */
    left: 3vw;
}
}
</style>
