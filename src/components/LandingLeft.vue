<template>
  <div class="wrapper">
    <img class="logo" :src="image" alt="" />
    <div class="second-hand-logo">
      <div>SECOND</div>
      <div>HAND</div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/pulz_logo.png";
import svg from "@/assets/pulz_svg.svg";
export default {
  name: "PulzLogo",
  data() {
    return {
      image: image,
      svg: svg,
    };
  },
  props: {},
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 50%;
  height: 100%;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 82%;
  width: 94%;
}

.second-hand-logo {
  display: flex;
  justify-content: space-between;
  width: 94%;
  line-height: 1;
  margin-top: 1vw;
  font-size: 6.5vw;
  position: absolute;
  bottom: 30px;
}

@media (max-width: 450px) {
.wrapper {
  position: unset;
  width: 100%;
}


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
    left: 10px;
    top: 10px;
  }

  .second-hand-logo {
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 48px;
    position: relative;
    top: 84%;
    margin-bottom: 5vw;
    margin-top: 13vw;
    left: 10px;
  }
}
</style>
