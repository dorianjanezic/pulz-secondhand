<template>
  <div class="main-wr-right">
    <div
      class="collections fade-in"
      v-for="(photo, index) in photos"
      :key="photo"
    >
      <img
        class="photos fade-in"
        @click="goToRoute(index)"
        :src="photo"
        :alt="photo"
      />
      <div class="collection-desc">
        <div @click="goToRoute(index)" class="collection-date">
          {{ photo.slice(5, 11).replace("_", "").toUpperCase() }}
        </div>
        <div @click="goToRoute(index)" class="circle" href="/#/okt20"></div>
      </div>
    </div>
    <div
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div class="desc">
        What is Pulz? It’s a feeling, a pulsation, a vibration and a beat. It’s
        an idea of connection – to oneself, to our past and to the future. Pulz
        is a belief in the power of conscious and environmentally friendly
        living through vintage clothes and everyday objects that carry history
        with them and enrich our present. Pulz is also the understanding of
        healing power of music and art alongside the one our local community has
        to offer. And finally, Pulz is the tight friendship that happens
        spontaneously along the way.
      </div>
      <div class="contact-wr">
        <div class="contact">
          <a
            class="contact-links"
            href="https://www.instagram.com/pulz_second_hand/"
            >INSTAGRAM</a
          >
          <a
            class="contact-links"
            href="https://www.facebook.com/Pulz-Second-Hand-137809510209279s"
            >FACEBOOK</a
          >
        </div>
        <div class="contact">
          <a class="contact-links" href="mailto:hello@pulzshop.com"
            >HELLO@PULZSHOP.COM</a
          >
          <a href="tel:+38670559196" class="contact-links">070 559 196</a>
        </div>
        <div class="contact">
          <div>TAVČARJEVA</div>
          <div>ULICA</div>
          <div>11</div>
          <div>LJUBLJANA</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var fadeInElements = [];
import sep22 from "@/assets/LandingPagePhotos/sep_22.jpg";
import okt20 from "@/assets/LandingPagePhotos/okt_20.jpg";
import okt18 from "@/assets/LandingPagePhotos/okt_18.jpg";
import dec19 from "@/assets/LandingPagePhotos/dec_19.jpg";
import apr18 from "@/assets/LandingPagePhotos/apr_18.jpg";
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + 50; // 200 = buffer
        var elemBottom = rect.bottom;
        return elemTop < window.innerHeight && elemBottom >= 0;
      };

      const handleScroll = () => {
        for (var i = 1; i < fadeInElements.length; i++) {
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

    onUnmounted(() => {
      // document.removeEventListener('scroll', handleScroll)
    });
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "LandingGallery",
  data() {
    return {
      photos: [sep22, okt20, dec19, okt18, apr18],
      routes: ["SEP22", "OCT20", "DEC19", "OCT18", "APR18"],
      arr: [],
      animationName: undefined,
    };
  },
  props: {},
  watch: {
    $route(to, from) {
      const to_depth = to.path.split("/").length;
      const from_depth = from.path.split("/").length;
      this.animationName = to_depth < from_depth ? "slide-right" : "slide-left";
    },
  },
  methods: {
    goToRoute(item) {
      this.$router.push({ name: this.routes[item] });
    },
  },
};
</script>

<style>
/*transition the opacity when the element enters and leaves the DOM*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/*set opacity to 0 at element's entrance and exit*/
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.main-wr-right {
  position: absolute;
  right: 20px;
  width: 49%;
  height: 100%;
  top: 20px;
}

.collections {
  width: 100%;
  height: 100%;
  display: contents;
  cursor: pointer;
}

.photos {
  max-width: 100%;
}

.collection-desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
}

.fade-in {
  opacity: 0;
  transition: 0.6s all ease-out;
  box-sizing: border-box;
}

.circle {
  height: 20px;
  width: 20px;
  background-color: #282525;
  border-radius: 50%;
  display: inline-block;
  transform: translateY(2px);
}

.desc {
  text-transform: uppercase;
  text-align: justify;
  margin-bottom: 35.5vh;
  font-size: 1.2vw;
  line-height: 1.3;
  padding-top: 15px;
}

.contact-wr {
  margin-bottom: 20px;
}
.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  font-size: 1.2vw;
  line-height: 1;
  text-decoration: none;
}

.contact:not(:last-child) {
  margin-bottom: 14vh;
}

.contact-links {
  text-decoration: none;
  color: #282525;
}

.collection-date {
  font-size: 24px;
  line-height: 1;
}

@media (max-width: 450px) {
  .main-wr {
    display: block;
  }
  .main-wr-left {
    position: unset;
  }

  .main-wr-right {
    position: unset;
    width: 100%;
  }

  .photos {
    max-height: 82%;
    position: unset;
    width: 94%;
  }

  .contact:not(:last-child) {
    margin-bottom: 26vw;
  }

  .contact-wr {
    margin-bottom: 0;
  }

  .second-hand {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 54px;
    position: unset;
    top: 84%;
    margin-top: 0;
  }

  .desc {
    margin-bottom: 35vh;
    padding: 0 12px;
    font-size: 2vh;
  }
  .collection-desc {
    margin-bottom: 20px;
    padding: 0 12px;
  }
  .collection-date {
    font-size: 14px;
  }
  .circle {
    height: 15px;
    width: 15px;
    background-color: #282525;
    border-radius: 50%;
    display: inline-block;
    transform: translateY(0px);
  }

  .contact {
    margin-bottom: 10px;
    font-size: 2vh;
    padding: 0vh 12px;
  }

  /* .fade-in {
opacity: 1;
} */
}
</style>
