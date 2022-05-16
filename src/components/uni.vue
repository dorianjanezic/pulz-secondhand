<template>
<div class="wrapper">
    <div class="nav">
              <img
        src="@/assets/X_desktop.svg"
        class="close-button"
        @click="this.$router.push({ name: 'home' })"
      />
    </div>
    <div class="container">
        <div class="left">
            
        </div>
        <div class="right">

        </div>
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
.wrapper {
    display: flex;
    flex-direction: column;
}

.nav {
    height: 5%;
}
</style>
