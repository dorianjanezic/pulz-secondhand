<template>
  <div id="app">
    <h1>Hey my app!</h1>
  </div>
</template>
<script>
export default {
  name: "app",
  mounted() {
    console.log(window.p5); // it's found
    window.p5.createCanvas(640, 480);
  },
};
</script>
