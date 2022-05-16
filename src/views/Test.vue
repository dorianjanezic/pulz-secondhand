<template>
  <div class="wrapper">
    <div class="nav">
      <div class="sub-nav">
        <img
          src="@/assets/X_desktop.svg"
          class="close-button"
          @click="this.$router.push({ name: 'home' })"
        />
      </div>
    </div>
    <div class="container">
      <div class="left">
        <div class="title">DEC19</div>
        <div class="credits">
          <div>FOTO: Valentina Jarc</div>
          <div>MUA: Laura Butkovič</div>
          <div>STYLING: Lovro Lukić</div>
          <div>
            Models: Zala Maja Ravnihar,<br />
            Nina Butkovič, Damjan Aškerc Juković, Lovro Lukić
          </div>
        </div>
      </div>
      <div class="right">
        <div v-for="photo in photos" :key="photo">
          <img class="photos" :src="photo" />
        </div>
      </div>
    </div>
    <div class="links">
      <div>OCT20</div>
      <div>OCT18</div>
      <div>APR18</div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/pulz_logo.png";
import dec19_1 from "@/assets/dec19/dec19_1.jpg";
import dec19_2 from "@/assets/dec19/dec19_2.jpg";
import dec19_3 from "@/assets/dec19/dec19_3.jpg";
import dec19_4 from "@/assets/dec19/dec19_4.jpg";
import dec19_5 from "@/assets/dec19/dec19_5.jpg";
import dec19_6 from "@/assets/dec19/dec19_6.jpg";
export default {
  name: "PulzLogo",
  beforeCreate() {
    document.body.className = "test";
  },
  mounted () {
    this.onScroll()
  },
  data() {
    return {
      image: image,
      photos: [dec19_1, dec19_2, dec19_3, dec19_4, dec19_5, dec19_6],
      height: null
    };
  },
  props: {},
  methods: {
    onScroll() {
      // console.log(window.innerHeight - 180);
      window.addEventListener("scroll", () => {
        // const scrolled = window.scrollY;
        this.height =
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          ) - window.innerHeight;
        console.log(this.height);
        console.log(window.innerHeight);
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 20px;
}

.container {
  display: flex;
}

.nav {
  height: 5%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6vw;
  padding-bottom: 20px;
}

.sub-nav {
  position: fixed;
}

.right {
  width: 50%;
}

.left {
  width: 50%;
}

.photos {
  width: -webkit-fill-available;
}

.close-button {
  height: 6vw;
}

.title {
  position: fixed;
  font-size: 10vw;
  line-height: 0.5;
}

.credits {
  position: fixed;
  text-align: left;
  bottom: 20px;
  text-transform: uppercase;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-content: flex-end;
  font-size: 10vw;
  line-height: 1;
  text-align: left;
  height: 100vh;
}
</style>
