<template>
  <div class="xray-div" id="xray-div-id">
    <img class="xray-img" :src="cephalometricImage" />
    <div
      class="xray-dot-div"
      v-for="cephalometryCoordinate in cephalometryCoordinates"
      :key="cephalometryCoordinate.name"
      :style="{top: cephalometryCoordinate.y + 'px', left: cephalometryCoordinate.x +'px'}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Xray",
  computed: {
    cephalometricImage() {
      return this.$store.getters.CEPHALOMETRIC_IMAGE;
    },
    cephalometryCoordinates() {
      return this.$store.getters.CEPHALOMETRY_COORDINATES;
    }
  }
};
</script>

<style scoped>
.xray-div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.xray-img {
  width: 100%;
}

.xray-dot-div {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: yellow;
}
</style>
