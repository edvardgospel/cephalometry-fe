<template>
  <div class="angle-table-content-div">
    <ul>
      <li
        v-for="cephalometricAngle in cephalometricAngles"
        :key="cephalometricAngle.name"
      >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle.toFixed(2)}}°</li>
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
export default {
  name: "AngleTable",
  computed: {
    cephalometricAngles() {
      return AngleCalcualator.getAngles(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      );
    },
    growthForecast() {
      return this.$store.getters.GROWTH_FORECAST;
    }
  }
};
</script>

<style scoped>
.angle-table-content-div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

ul {
  list-style-type: none;
}
</style>