<template>
  <div class="main-wr-right-sub" id="textarea-element" ref="height">
    <div class="collections" v-for="photo in photos" :key="photo">
      <img class="photosapr fade-in" :src="photo" alt="" />
    </div>
    <div class="collections-link">
      <div class="date-link" @click="this.$router.push({ name: date1 })">
        {{ date1 }}
      </div>
      <div class="date-link" @click="this.$router.push({ name: date2 })">
        {{ date2 }}
      </div>
      <div class="date-link" @click="this.$router.push({ name: date3 })">
        {{ date3 }}
      </div>
    </div>
  </div>
</template>

<script>
var fadeInElements = [];

import apr18_1 from "@/assets/apr18/apr18_1.jpg";
import apr18_2 from "@/assets/apr18/apr18_2.jpg";
import apr18_3 from "@/assets/apr18/apr18_3.jpg";
import apr18_4 from "@/assets/apr18/apr18_4.jpg";
import apr18_5 from "@/assets/apr18/apr18_5.jpg";
import apr18_6 from "@/assets/apr18/apr18_6.jpg";
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + 20; // 200 = buffer
        var elemBottom = rect.bottom;
        return elemTop < window.innerHeight && elemBottom >= 0;
      };

      const handleScroll = () => {
        for (var i = 0; i < fadeInElements.length; i++) {
          var elem = fadeInElements[i];
          if (isElemVisible(elem)) {
            elem.style.opacity = "1";
            fadeInElements.splice(i, 1); // only allow it to run once
          }
        }
      };
      fadeInElements = Array.from(document.getElementsByClassName("fade-in"));

      window.addEventListener("scroll", () => {});
      document.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    onUnmounted(() => {});
  },
  name: "LandingGallery",
  mounted () {
   this.randomize(this.photos);
  },
  data() {
    return {
      photos: [apr18_1, apr18_2, apr18_3, apr18_4, apr18_5, apr18_6],
      arr: []
    };
  },
  methods: {
    setOpacity() {
      let scrolled = window.scrollY;
      console.log(scrolled);

      if (scrolled > 3000) {
        let links = document.getElementsByClassName("collections-links");
        links.style.opacity = 1;
      }
    },
    randomize(arr) {
      var i, j, tmp;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      return this.arr;
    },
  },
  props: ["date1", "date2", "date3"],
};
</script>

<style scoped>
.main-wr-right-sub {
  float: right;
  position: absolute;
  width: 100%;
  margin-top: 120px;
  right: 20px;
  z-index: -1;
}

.collections {
  width: 100%;
  height: 100%;
  display: flex;
  right: 0;
  justify-content: flex-end;
  cursor: auto;
}

.fade-in {
  opacity: 0;
  transition: 0.6s all ease-out;
  box-sizing: border-box;

  display: inline-block;
}

.photosapr {
  max-width: 50%;
  margin-bottom: 20px;
}

.collections-link {
  padding-top: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 180px;
  position: absolute;
  left: 30px;
  cursor: pointer;
}

.date-link {
  letter-spacing: -5px;
  line-height: 0.87;
}

@media (max-width: 450px) {
  .main-wr-right-sub {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 547px;
    right: 0 !important;
  }

  .photosapr {
    margin-bottom: 20px;
    max-width: 100%;
  }

  .collections-link {
    width: 0;
    font-size: 84px;
    left: 0;
    padding: 0 10px;
    display: grid;
    position: unset;
  }

  .date-link {
    height: 90px;
  }
  .collections {
    display: unset;
  }
}
</style>