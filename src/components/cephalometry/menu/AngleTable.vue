<template>
  <div class="angle-table-content-div">
    <div id="infoBox" ref="infoBox" style="height: 100mm; position:absolute; left:-999em;"></div>
    <div class="table-content-left-div">
      <ul>
        <li>
          <span>
            <b>Angles:</b>
          </span>
        </li>
        <li v-for="cephalometricAngle in cephalometricAngles" :key="cephalometricAngle.name">
          <b>{{ cephalometricAngle.name }}: </b>{{cephalometricAngle.angle.toFixed(1)}}°
        </li>
      </ul>
    </div>
    <div class="table-content-right-div">
      <ul>
        <li>
          <span>
            <b>Distances:</b>
          </span>
        </li>
        <li
          v-for="cephalometricDistance in cephalometricDistancesInMillimeters"
          :key="cephalometricDistance.name"
        >
          <b>{{ cephalometricDistance.name }}: </b>{{cephalometricDistance.distance.toFixed(1)}} mm
        </li>
        <li>
          <b>Index:</b>
          {{(cephalometricDistancesInMillimeters[cephalometricDistances.length-2].distance /
          cephalometricDistancesInMillimeters[cephalometricDistances.length-1].distance * 100).toFixed(1)}}%
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <b>Growth forecast:</b>
          </span>
        </li>
        <li>
          <b>Modified ANB:</b>
          {{growthForecast.newANB}}°
        </li>
        <li>
          <b>Modified ML-NL:</b>
          {{growthForecast.newMLNL}}°
        </li>
        <li>
          <b>Modified N:</b>
          {{growthForecast.newN}}°
        </li>
        <li>
          <b>Condylus:</b>
          {{growthForecast.condyl}}
        </li>
        <li>
          <b>Canalis mandibula:</b>
          {{growthForecast.canalisMand}}
        </li>
        <li>
          <b>Mandibula:</b>
          {{growthForecast.mandibula}}
        </li>
      </ul>
    </div>
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
    this.$store.commit("SET_CEPHALOMETRY_ANGLES", this.cephalometricAngles);
    this.$store.commit(
      "SET_CEPHALOMETRY_DISTANCES_IN_MM",
      this.cephalometricDistancesInMillimeters
    );
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
    cephalometricDistancesInMillimeters() {
      var distancesInMM = [];
      for (let distance of this.cephalometricDistances) {
        distancesInMM.push({
          name: distance.name,
          distance: this.pixelToMillimeter(distance.distance),
        });
      }
      return distancesInMM;
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
}

.table-content-left-div,
.table-content-right-div {
  height: 100%;
  width: 50%;
  margin: 1rem auto;
}

.table-content-left-div {
  float: left;
}

.table-content-right-div {
  float: right;
}

ul {
  list-style-type: none;
}

span {
  display: inline-block;
  font-size: 1.1rem;
  margin-bottom: 3px;
}
</style>