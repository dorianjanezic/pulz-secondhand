<template>
  <div class="main-wr-right-sub">
    <div class="collections" v-for="photo in photos" :key="photo">
      <img class="photosoct2 fade-in" id="photo" :src="photo" />
    </div>
    <div class="collections-link">
      <div class="date-link apr18" @click="this.$router.push({ name: date1 })">
        {{ date1 }}
      </div>
      <div class="date-link" @click="this.$router.push({ name: date2 })">
        {{ date2 }}
      </div>
      <div class="date-link" @click="this.$router.push({ name: date3 })">
        {{ date3 }}
      </div>
      <div class="date-link" @click="this.$router.push({ name: date4 })">
        {{ date4 }}
      </div>
    </div>
  </div>
</template>

<script>
var fadeInElements = [];

import sep22_1 from "@/assets/sep22/sep22_1.jpg";
import sep22_2 from "@/assets/sep22/sep22_2.jpg";
import sep22_3 from "@/assets/sep22/sep22_3.jpg";
import sep22_4 from "@/assets/sep22/sep22_4.jpg";
import sep22_5 from "@/assets/sep22/sep22_5.jpg";
import sep22_6 from "@/assets/sep22/sep22_6.jpg";
import sep22_7 from "@/assets/sep22/sep22_7.jpg";
import sep22_8 from "@/assets/sep22/sep22_8.jpg";
import sep22_9 from "@/assets/sep22/sep22_9.jpg";
import sep22_10 from "@/assets/sep22/sep22_10.jpg";
import sep22_11 from "@/assets/sep22/sep22_11.jpg";
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + 10; // 200 = buffer
        var elemBottom = rect.bottom;
        return elemTop < window.innerHeight - 100 && elemBottom >= 0;
      };

      const handleScroll = () => {
        for (var i = 0; i < fadeInElements.length; i++) {
          typeof fadeInElements[i];
          var first = fadeInElements[0];
          var elem = fadeInElements[i];
          // console.log(first);
          first.style.opacity = "1";
          if (isElemVisible(elem)) {
            elem.style.opacity = "1";
            fadeInElements.splice(i, 1); // only allow it to run once
          }
        }
      };
      fadeInElements = Array.from(document.getElementsByClassName("fade-in"));
      fadeInElements[0].style.opacity = "1";

      fadeInElements[0].classList.remove("fade-in");
      window.addEventListener("scroll", () => {});
      document.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    onUnmounted(() => {});
  },
  name: "LandingGallery",
  data() {
    return {
      photos: [
        sep22_1,
        sep22_2,
        sep22_3,
        sep22_4,
        sep22_5,
        sep22_6,
        sep22_7,
        sep22_8,
        sep22_9,
        sep22_10,
        sep22_11,
      ],
    };
  },
  mounted() {
    this.randomize(this.photos);
  },
  methods: {
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
  props: ["date1", "date2", "date3", "date4"],
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

.photosoct2 {
  max-width: 50%;
  margin-bottom: 20px;
}

.collections-link {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 180px;
  position: absolute;
  left: 30px;
  cursor: pointer;
}

.date-link {
  letter-spacing: -5px;
  line-height: 0.87;
}

.apr18 {
  left: 5px;
  position: relative;
}

@media (max-width: 450px) {
  .main-wr-right-sub {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 70%;
    right: 0 !important;
  }

  .photosoct2 {
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
    height: 0;
    justify-content: left;
  }

  .date-link {
    height: 90px;
  }
  .collections {
    display: unset;
  }

  .apr18 {
    left: 2px;
  }
}
</style>