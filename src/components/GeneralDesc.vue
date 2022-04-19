<template>
  <div class="main-wr-left">
    <div class="second-hand-sub">
      <div class="collection-name">{{ dateTitle }}</div>
      <img
        src="@/assets/X_desktop.svg"
        class="close-button"
        @click="this.$router.push({ name: 'home' })"
      />
    </div>
    <div
      class="collection-text"
      :style="[
        { position: isScrolledDesc ? 'absolute' : 'fixed' },
        { top: isScrolledDesc ? textHeight + 'px' : '60vh' },
      ]"
    >
      The myth of the tortured artist stretches back to ancient times. Optimum
      creativity, we are often told, can only emerge under stressful and adverse
      conditions. Struggle is intrinsic to the production of great art.
    </div>
    <div
      class="collections-creds"
      :style="[
        { position: isScrolledCreds ? 'absolute' : 'fixed' },
        { top: isScrolledCreds ? credsHeight + 'px' : '85vh' },
      ]"
    >
      <div>FOTO: {{ foto }}</div>
      <div>MUA: {{ mua }}</div>
      <div>{{ styling }}</div>
      <div>Models: {{ models }}</div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/pulz_logo.png";
export default {
  name: "PulzLogo",
  mounted() {
    this.isScrolledDesc = false;
    this.isScrolledCreds = false;
    this.height = null;
    this.heightCalculated = false;
    this.textHeight = null;
    this.credsHeight = null;
    console.log(this.isScrolledDesc);
    this.onScroll(), window.scrollTo(0, 0), this.getHeight();
    console.log(this.height);
  },
  data() {
    return {
      image: image,
      isScrolledDesc: null,
      isScrolledCreds: null,
      height: null,
      heightLinks: "",
      heightCalculated: false,
      textHeight: null,
      credsHeight: null,
    };
  },
  props: [
    "dateTitle",
    "foto",
    "mua",
    "models",
    "styling",
    "date1",
    "date2",
    "date3",
  ],
  methods: {
    onScroll() {
      window.addEventListener("scroll", () => {
        // console.log(this.isScrolledDesc);
        const scrolled = window.scrollY;
        console.log(scrolled);
        console.log(this.height);
        // console.log(this.textHeight);
        if (this.heightCalculated == false) {
          this.height =
            Math.max(
              document.body.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.clientHeight,
              document.documentElement.scrollHeight,
              document.documentElement.offsetHeight
            ) - window.innerHeight;
          this.heightCalculated = true;
        } //    console.log(window.innerHeight);
        //    console.log(this.height);

        if (scrolled > this.height - window.innerHeight + 5) {
          this.textHeight = this.height - 300;
          this.credsHeight = this.height - 120;
          this.isScrolledCreds = true;
          this.isScrolledDesc = true;
          //  document.getElementsByClassName('second-hand-sub').style.position = "absolute"
        } else {
          this.isScrolledDesc = false;
          this.isScrolledCreds = false;
        }
      });
    },
    getHeight() {
      this.heightLinks = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    },
  },
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
  font-size: 180px;
  position: fixed;
  left: 10px;
}

.collection-name {
  letter-spacing: -5px;
}

.collection-text {
  font-size: 1vw;
  position: fixed;
  text-align: justify;
  text-transform: uppercase;
  width: 23%;
  top: 60vh;
  bottom: 0;
}

.collections-creds {
  position: fixed;
  text-align: left;
  font-size: 1vw;
  top: 85vh;
  text-transform: uppercase;
}

.close-button {
  display: flex;
  justify-content: right;
  font-size: 50px;
  font-weight: 100;
  right: 20px;
  position: fixed;
  height: 35px;
  width: 36px;
  top: 20px;
  cursor: pointer;
}

.collections-link {
  width: 0;
  position: absolute;
  left: 10px;
  padding-top: 542px;
  font-size: 180px;
  /* bottom: -260vw; */
  cursor: pointer;
  display: grid;
  top: 1000px;
}

.date-link {
  letter-spacing: -5px;
  line-height: 0.87;
}

@media (max-width: 450px) {
  body {
    margin: 0;
  }

  div.main-wr-left {
    position: unset;
    width: 100%;
    height: 100%;
    margin-left: 0;
  }

  .second-hand-sub {
    position: fixed;
    font-size: 84px;
    padding: 0 5px;
  }

  .close-button {
    font-size: 84px;
    height: 57px;
    width: 50px;
  }

  .collection-name {
    margin-top: 0;
    line-height: 1;
    padding: 0 !important;
  }

  .collection-text {
    font-size: 14px;
    position: absolute !important;
    z-index: -1;
    text-align: left;
    text-transform: uppercase;
    width: auto;
    padding: 0 20px;
    top: 280px !important;
    bottom: 0;
    text-align: justify;
  }

  .collections-creds {
    position: absolute !important;
    text-align: left;
    font-size: 14px;
    top: 400px !important;
    text-transform: uppercase;
    width: auto;
    padding: 0 20px;
  }

  .collections-link {
    width: 0;
    position: absolute;
    font-size: 84px;
    bottom: -410%;
    left: 0;
    padding: 0 10px;
  }

  .date-link {
    height: 90px;
  }
}
</style>
