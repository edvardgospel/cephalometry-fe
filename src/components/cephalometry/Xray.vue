<template>
  <img class="xray-img" :src="cephalometricImage" />
</template>

<script>
export default {
  name: "Xray",
  computed: {
    cephalometricImage() {
      return this.$store.getters.CEPHALOMETRIC_IMAGE;
    }
  }
};
</script>

<style scoped>
.xray-img {
  width: 100%;
}
</style>
