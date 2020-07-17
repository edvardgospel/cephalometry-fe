<template>
  <div class="angle-table-content-div">
    <ul>
      <li
        v-for="cephalometricAngle in cephalometricAngles"
        :key="cephalometricAngle.name"
      >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle.toFixed(2)}}°</li>
    </ul>
  </div>
</template>

<script>
import AngleCalcualator from "../../../resources/service/angle-calculator.js";
export default {
  name: "AngleTable",
  computed: {
    cephalometricAngles() {
      return AngleCalcualator.returnAngles(this.$store.getters.CEPHALOMETRY_COORDINATES);
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