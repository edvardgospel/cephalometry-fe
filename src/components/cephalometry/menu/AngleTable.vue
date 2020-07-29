<template>
  <div class="angle-table-content-div">
    <div id="infoBox" ref="infoBox" style="height: 100mm; position:absolute; left:-999em;"></div>
    <ul>
      <li
        v-for="cephalometricAngle in cephalometricAngles"
        :key="cephalometricAngle.name"
      >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle.toFixed(1)}}°</li>
    </ul>
    <ul>
      <li
        v-for="cephalometricDistance in cephalometricDistances"
        :key="cephalometricDistance.name"
      >{{ cephalometricDistance.name }}: {{pixelToMillimeter(cephalometricDistance.distance).toFixed(1)}}</li>
    </ul>
    <ul>
      <li>Modified ANB: {{growthForecast.newANB}}</li>
      <li>Modified ML-NL: {{growthForecast.newMLNL}}</li>
      <li>Modified N: {{growthForecast.newN}}</li>
      <li>Condylus: {{growthForecast.condyl}}</li>
      <li>Canalis mandibula: {{growthForecast.canalisMand}}</li>
      <li>Mandibula: {{growthForecast.mandibula}}</li>
    </ul>
  </div>
</template>

<script>
import AngleCalcualator from "../../../resources/service/angle-calculator.js";
import DistanceCalculator from "../../../resources/service/distance-calculator.js";
export default {
  name: "AngleTable",
  data() {
    return {
      height: 0,
    };
  },
  mounted() {
    this.height = document.getElementById("infoBox").clientHeight;
  },
  computed: {
    cephalometricAngles() {
      return AngleCalcualator.getAngles(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      );
    },
    cephalometricDistances() {
      return DistanceCalculator.getDistances(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      );
    },
    growthForecast() {
      return this.$store.getters.GROWTH_FORECAST;
    },
  },
  methods: {
    pixelToMillimeter(px) {
      let height = px / (this.height / 100);
      return height;
    },
  },
};
</script>

<style scoped>
.angle-table-content-div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: scroll;
}

ul {
  list-style-type: none;
}
</style>