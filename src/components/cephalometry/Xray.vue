<template>
  <div class="xray-div" id="xray-div-id">
    <canvas id="canvas-id" width="640" height="650"></canvas>
    <img class="xray-img" :src="cephalometricImage" />
  </div>
</template>

<script>
import LineCalculator from "../../resources/service/line-calculator.js";

export default {
  name: "Xray",
  mounted() {
    var canvas = document.getElementById("canvas-id");
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      context.beginPath();
      context.lineWidth = "1";
      context.strokeStyle = "#ffff00";
      for (let cephLine of this.cephalometryLines) {
        context.moveTo(cephLine.line.ax, cephLine.line.ay);
        context.lineTo(cephLine.line.bx, cephLine.line.by);
      }
      context.stroke();
    }
  },
  computed: {
    cephalometricImage() {
      return this.$store.getters.CEPHALOMETRIC_IMAGE;
    },
    cephalometryCoordinates() {
      return this.$store.getters.CEPHALOMETRY_COORDINATES;
    },
    cephalometryLines() {
      return LineCalculator.getLines(this.cephalometryCoordinates);
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

#canvas-id {
  display: block;
  position: absolute;
}

.xray-img {
  width: 100%;
}
</style>
