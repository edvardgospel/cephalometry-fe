<template>
  <div class="angle-table-content-div">
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
  name: "AngleTable",
  props: {
    cephalometricAngles: Array
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