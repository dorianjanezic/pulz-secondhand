<template>
  <div class="main-wr-left">
    <div class="second-hand-sub">
      <div class="collection-name">APR18</div>
      <div class="close-button">X</div>
    </div>
    <div class="collection-text">
      The myth of the tortured artist stretches back to ancient times. Optimum
      creativity, we are often told, can only emerge under stressful and adverse
      conditions. Struggle is intrinsic to the production of great art.
    </div>
    <div class="collections-creds">
      <div>FOTO: FUGA</div>
      <div>MUA: Marta Šporin</div>
      <div>Styling: Estera Lovrec</div>
      <div>Models: Živa Munda, Nino Kovač</div>
    </div>
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
div.main-wr-left {
  width: 100%;
  height: 100%;
  top: 0;
  margin-left: 20px;
}
.photos {
  max-height: 82%;
  position: fixed;
  left: 10px;
  width: 47%;
}

.second-hand-sub {
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 124px;
  position: fixed;
}

.collection-name {
  margin-top: 30px;
}

.collection-text {
  font-size: 14px;
  position: fixed;
  text-align: left;
  text-transform: uppercase;
  width: 23%;
  top: 380px;
  bottom: 0;
}

.collections-creds {
  position: fixed;
  text-align: left;
  font-size: 14px;
  top: 555px;
  text-transform: uppercase;
}

.close-button {
  display: flex;
  justify-content: right;
  font-size: 50px;
  font-weight: 100;
}

@media (max-width: 450px) {
  .main-wr-left {
    position: unset;
    width: 100%;
    height: 100%;
  }

  .second-hand-sub {
    position: fixed;
    font-size: 84px;
  }

  .close-button {
    font-size: 84px;
  }

  .collection-name {
    margin-top: 0;
  }

  .collection-text {
    font-size: 14px;
    position: absolute;
    text-align: left;
    text-transform: uppercase;
    width: 90%;
    top: 280px;
    bottom: 0;
    text-align: justify;
  }

  .collections-creds {
    position: absolute;
    text-align: left;
    font-size: 14px;
    top: 400px;
    text-transform: uppercase;
  }

  .close-button {
    margin-right: 20px;
  }
}
</style>
