<template>
  <div class="harmony-table-content-div">
    <ul>
      <li
        v-for="cephalometricAngle in cephalometricAngles"
        :key="cephalometricAngle.name"
      >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle}}°</li>
    </ul>
    <table>
      <tr>
        <th>SNA</th>
        <th>NL-NSL</th>
        <th>NSBa</th>
        <th>ML-NSL</th>
        <th>SNB</th>
      </tr>
    </table>
  </div>
</template>

<script>
import AngleCalcualator from "../../../resources/service/angle-calculator.js";

export default {
  name: "HarmonyTable",
  computed: {
    cephalometricAngles() {
      return AngleCalcualator.returnAngles();
    }
  }
};
</script>

<style scoped>
.harmony-table-content-div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

ul {
  list-style-type: none;
}
</style>