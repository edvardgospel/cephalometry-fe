<template>
  <div class="harmony-table-content-div">
    HarmonyTable
    <ul>
      <li
        v-for="cephalometricAngle in cephalometricAngles"
        :key="cephalometricAngle.name"
      >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle}}°</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HarmonyTable",
  props: {
    cephalometricAngles: Array
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