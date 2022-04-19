<template>
  <div>
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
export default {
  name: "PulzLogo",
  mounted() {},
  data() {
    return {
      height: "",
    };
  },
  props: ["date1", "date2", "date3"],
};
</script>

<style scoped>
.collections-link {
  width: 0;
  position: absolute;
  left: 10px;
  padding-top: 542px;
  font-size: 180px;
  /* bottom: -260vw; */
  cursor: pointer;
  display: grid;
}

.date-link {
  letter-spacing: -5px;
  line-height: 0.87;
}

@media (max-width: 450px) {
  .collections-link {
    width: 0;
    position: absolute;
    font-size: 84px;
    bottom: -410%;
    left: 0;
    padding: 0 10px;
  }

  .date-link {
    height: 90px;
  }
}
</style>
