<template>
  <div class="main-wr-right-sub" id="righ" ref="mainbox">
    <div class="collections" v-for="photo in photos" :key="photo">
      <img class="photosoct2 fade-in" id="photo" :src="photo"/>
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

import dec19_1 from "@/assets/dec19/dec19_1.jpg";
import dec19_2 from "@/assets/dec19/dec19_2.jpg";
import dec19_3 from "@/assets/dec19/dec19_3.jpg";
import dec19_4 from "@/assets/dec19/dec19_4.jpg";
import dec19_5 from "@/assets/dec19/dec19_5.jpg";
import dec19_6 from "@/assets/dec19/dec19_6.jpg";
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + 100; // 200 = buffer
        var elemBottom = rect.bottom;
        return elemTop < window.innerHeight && elemBottom >= 0;
      };

      const handleScroll = () => {
        for (var i = 0; i < fadeInElements.length; i++) {
          typeof(fadeInElements[i])
          var first = fadeInElements[0]
          var elem = fadeInElements[i];
          first.style.opacity = "1"
          if (isElemVisible(elem)) {
            elem.style.opacity = "1";
            fadeInElements.splice(i, 1); // only allow it to run once
          }
        }
      };
      fadeInElements = Array.from(document.getElementsByClassName("fade-in"));
      fadeInElements[0].style.opacity = "1"

      fadeInElements[0].classList.remove('fade-in')
      
      //  let lastphoto = fadeInElements[fadeInElements.length -1];
      //  lastphoto.style.paddingBottom = "100vh";
      window.addEventListener("scroll", () => {});

      //  let rect = lastphoto.getBoundingClientRect()
      //  console.log(rect.y);
      //  let height = document.getElementsByClassName("collections")
      //  console.log(height.scrollHeight);
      //  var limit = document.body.offsetHeight - window.innerHeight;

      //  console.log(document.body.scrollHeight);
      document.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    onUnmounted(() => {
      // document.removeEventListener('scroll', handleScroll)
    });
  },
  name: "LandingGallery",
  data() {
    return {
      photos: [
        dec19_1,
        dec19_2,
        dec19_3,
        dec19_4,
        dec19_5,
        dec19_6,
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
  props: ["date1", "date2", "date3"],
};
</script>

<style scoped>
.main-wr-right-sub {
  float: right;
  position: absolute;
  width: 100%;
  height: fit-content;
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

@media (max-width: 450px) {
  .main-wr-right-sub {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 547px;
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
}
</style>