<template>
  <div id="textarea-element" class="main-wr-left">
    <div class="second-hand-sub-oct18">
      <div
        class="collection-name"
        :style="{ marginTop: isActive ? 70 + 'px' : '120px' }"
        @click="moveTo()"
      >
        OCT18
      </div>
      <img
        src="@/assets/X_desktop.svg"
        class="close-button"
        @click="this.$router.push({ name: 'home' })"
      />
    </div>
    <div
      :style="{ bottom: isActive ? height_text + 'px' : '20px' }"
      :class="[{ slidein: isActive }, { collectiontext: !isActive }]"
    >
      <div style="margin-top: 50px; width: 100%">
        <div>FOTO: Bernarda Conič</div>
        <div>MUA: Laura Butkovič</div>
        <div style="width: inherit">
          Models: Tjaša Šček, Laura Butkovič,<br />
          Fejzo Košir, Žan Tell
        </div>
      </div>
    </div>
    <SubGallery18
      ref="height"
      date1="APR18"
      date2="DEC19"
      date3="OCT20"
      date4="SEP22"
    ></SubGallery18>
  </div>
</template>
<script>
import SubGallery18 from "@/components/SubGallery18.vue";

export default {
  name: "HomeView",
  components: {
    SubGallery18,
  },
  beforeCreate() {
    document.body.className = "oct18";
    this.isScrolledApr = false;
  },
  mounted() {
    this.onScroll();
    this.moveTo();
  },
  data() {
    return {
      isScrolledApr: false,
      height: null,
      isActive: false,
      scrolled1: null,
    };
  },
  watchers: {
    checkScrolled() {
      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        return scrolled;
      });
    },
  },
  methods: {
    onScroll() {
      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        this.height =
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          ) - window.innerHeight;
        if (
          scrolled > 3000 &&
          scrolled > this.height - window.innerHeight - 40
        ) {
          this.scrolled1 = window.scrollY;
          this.height_text = -this.height + window.innerHeight + 60;
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      });
    },
    moveTo() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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

.second-hand-sub-oct18 {
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10vw;
  position: fixed;
  left: 10px;
}

.slidein {
  position: absolute !important;
  font-size: 0.9vw;
  text-align: justify;
  text-transform: uppercase;
  width: 23%;
  left: 20px;
}

.collection-name {
  letter-spacing: -5px;
  line-height: 0.6;
  margin-top: 12vh;
  transition: all 0.8s ease-out;
  cursor: pointer;
}

.collectiontext {
  font-size: 0.9vw;
  position: fixed;
  text-align: justify;
  text-transform: uppercase;
  width: 23%;
  bottom: 20px;
  left: 20px;
}

.collectionscreds {
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
  height: 83px;
  width: 83px;
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
body .oct18 {
  height: auto;
  min-height: 100% !important;
  margin: 0 !important;
  overflow: auto;
  background-color: white;
  color: #282525;
  font-family: "Merienda", Helvetica, Arial;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: "Merienda", Helvetica, Arial;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #282525;
  /* height: 510vh;
  width:100%; */
}

.main-wr {
  width: 100%;
  justify-content: end;
}

@media (max-width: 450px) {
  HTML,
  body {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  body .apr18 {
    margin: 0 !important;
  }

  div.main-wr-left {
    position: unset;
    margin-left: 0;
  }

  .second-hand-sub-oct18 {
    position: fixed;
    font-size: 75px;
    left: 10px;
    top: 10px;
  }

  .close-button {
    font-size: 84px;
    height: 65px;
    width: 55px;
    right: 15px;
  }

    .slidein {
    padding: 0 10px;
    font-size: 16px;
    position: absolute !important;
    z-index: -1;
    text-align: justify;
    text-transform: uppercase;
    top: 60%;
    bottom: 0;
    text-align: justify;
    width: 94%;
    padding: 0 !important;
    left: 10px;
}

  .collection-name {
    margin-top: 0 !important;
    line-height: 1;
    padding: 0 !important;
    font-size: 84px;
  }

  .collectiontext {
    padding: 0 10px;
    font-size: 16px;
    position: absolute !important;
    z-index: -1;
    text-align: justify;
    text-transform: uppercase;
    top: 60%;
    bottom: 0;
    text-align: justify;
    width: 94%;
    padding: 0 !important;
    left: 10px;
  }

  .collections-creds {
    position: absolute !important;
    text-align: left;
    font-size: 14px;
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
    padding-top: 40vh !important;
  }

  .date-link {
    height: 90px;
  }

  .collections-link {
    font-size: 44px;
  }
}
</style>
