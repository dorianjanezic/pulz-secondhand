<template>
  <div class="main-wr-right-sub">
    <div class="collections" v-for="photo in photos" :key="photo">
      <img class="photos fade-in" :src="photo" alt="" />
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

import okt20_1 from "@/assets/okt20/okt20_1.jpg";
import okt20_2 from "@/assets/okt20/okt20_2.jpg";
import okt20_3 from "@/assets/okt20/okt20_3.jpg";
import okt20_4 from "@/assets/okt20/okt20_4.jpg";
import okt20_5 from "@/assets/okt20/okt20_5.jpg";
import okt20_6 from "@/assets/okt20/okt20_6.jpg";
import okt20_7 from "@/assets/okt20/okt20_7.jpg";
import okt20_8 from "@/assets/okt20/okt20_8.jpg";
import okt20_9 from "@/assets/okt20/okt20_9.jpg";
import okt20_10 from "@/assets/okt20/okt20_10.jpg";
import okt20_11 from "@/assets/okt20/okt20_11.jpg";
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + 80; // 200 = buffer
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
        okt20_1,
        okt20_2,
        okt20_3,
        okt20_4,
        okt20_5,
        okt20_6,
        okt20_7,
        okt20_8,
        okt20_9,
        okt20_10,
        okt20_11,
      ],
    };
  },
  props: ["date1", "date2", "date3"],
};
</script>

<style scoped>
.main-wr-right-sub {
  float: right;
  position: absolute;
  width: 100%;
  margin-top: 75px;
  right: 20px;
  z-index: -1;
}

.collections {
  width: 100%;
  height: 100%;
  display: flex;
  right: 0;
  justify-content: flex-end;
}

.fade-in {
  opacity: 0;
  transition: 0.6s all ease-out;
  box-sizing: border-box;

  display: inline-block;
}

.photos {
  max-width: 50%;
  margin-bottom: 20px;
}

.collections-link {
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 180px;
  position: absolute;
  left: 30px;
}

.date-link {
  letter-spacing: -5px;
  line-height: 0.87;
}

@media (max-width: 450px) {
  .main-wr-right-sub {
    width: 100%;
    margin-top: 547px;
    right: 0 !important;
  }

  .second-hand-sub {
    position: unset;
  }

  .photos {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .collections-link {
    padding-top: 40vh !important;
    width: 0;
    position: absolute;
    font-size: 84px;
    left: 0;
    padding: 0 10px;
    display: grid;
  }

  .date-link {
    height: 90px;
  }
}
</style>
