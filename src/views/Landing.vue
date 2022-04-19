<template>
  <div class="main-wr">
    <LandingLeft></LandingLeft>
    <LandingRight></LandingRight>
  </div>
</template>

<script>
import LandingLeft from "@/components/LandingLeft.vue";
import LandingRight from "@/components/LandingRight.vue";

export default {
  name: "HomeView",
  components: {
    LandingRight,
    LandingLeft,
  },
  mounted () {
   window.scrollTo(0, 100) 
  window.scrollTo(0, 0)
},
    beforeCreate: function() {
        document.body.className = 'landing';
    }
};
</script>

<style>
.landing{
  height: auto;
  min-height: 100% !important;
  margin: 0;
  overflow: auto;
  background-color: #ff552d;
  color: #282525;
  /* overflow: hidden; */
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
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
}

@media (max-width:450px) {
  .main-wr {
    display: block;
    width:100%;
  }
  .main-wr-left {
    position: unset;
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
.body .home {
  margin:20px;
}
}
::-webkit-scrollbar {
  width: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #282525; 
}
</style>
