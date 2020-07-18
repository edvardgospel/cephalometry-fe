<template>
  <div class="harmony-table-content-div">
    <div class="inner-harmony-table-header-div">
      <div class="table-header-div">SNA</div>
      <div class="table-header-div">NL-SNL</div>
      <div class="table-header-div">NSBa</div>
      <div class="table-header-div">ML-NSL</div>
      <div class="table-header-div">SNB</div>
      <div class="table-header-div">ML-NL</div>
    </div>
    <div class="inner-harmony-table-values-div">
      <div class="table-values-div">
        <div v-for="el in sna" :key="el.id" :class="{red: el==snaAngle}">{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding: 5px"
          v-for="el in nl_nsl"
          :key="el.id"
          :class="{red: el==nlNslAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding: 11.5px"
          v-for="el in nsba"
          :key="el.id"
          :class="{red: el==nsBaAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding: 5px"
          v-for="el in ml_nsl"
          :key="el.id"
          :class="{red: el==mlNslAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div style="padding: 3px" v-for="el in snb" :key="el.id" :class="{red: el==snbAngle}">{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding: 4px"
          v-for="el in ml_nl"
          :key="el.id"
          :class="{red: el==mlNlAngle}"
        >{{el}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AngleCalcualator from "../../../resources/service/angle-calculator.js";

export default {
  name: "HarmonyTable",
  data() {
    return {
      sna: Array(103 - 61 + 1)
        .fill()
        .map((_, i) => 61 + i),
      nl_nsl: [
        "15",
        "·",
        "14",
        "·",
        "13",
        "·",
        "12",
        "·",
        "11",
        "·",
        "10",
        "·",
        "9",
        "·",
        "8",
        "·",
        "7",
        "·",
        "6",
        "·",
        "5",
        "·",
        "4",
        "·",
        "3",
        "·",
        "2",
        "·",
        "1",
        "·"
      ],
      nsba: Array(142 - 122 + 1)
        .fill()
        .map((_, i) => 122 + i)
        .reverse(),
      ml_nsl: Array(43 - 14 + 1)
        .fill()
        .map((_, i) => 14 + i)
        .reverse(),
      snb: Array(97 - 64 + 1)
        .fill()
        .map((_, i) => 64 + i),
      ml_nl: [
        "·",
        "28",
        "·",
        "27",
        "·",
        "26",
        "·",
        "25",
        "·",
        "24",
        "·",
        "23",
        "·",
        "22",
        "·",
        "21",
        "·",
        "20",
        "·",
        "19",
        "·",
        "18",
        "·",
        "17",
        "·",
        "16",
        "·",
        "15",
        "·",
        "14",
        "·",
        "13"
      ]
    };
  },
  computed: {
    cephalometricAngles() {
      return AngleCalcualator.returnAngles(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      );
    },
    snaAngle() {
      console.log(
        "snaAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "SNA")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "SNA")
        .angle.toFixed();
    },
    nlNslAngle() {
      console.log(
        "nlNslAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "NL-NSL")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "NL-NSL")
        .angle.toFixed();
    },
    nsBaAngle() {
      console.log(
        "nsBaAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "NSBa")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "NSBa")
        .angle.toFixed();
    },
    mlNslAngle() {
      console.log(
        "mlNslAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "ML-NSL")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "ML-NSL")
        .angle.toFixed();
    },
    snbAngle() {
      console.log(
        "snbAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "SNB")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "SNB")
        .angle.toFixed();
    },
    mlNlAngle() {
      console.log(
        "mlNlAngle:" +
          this.cephalometricAngles
            .find(angle => angle.name === "ML-NL")
            .angle.toFixed()
      );
      return this.cephalometricAngles
        .find(angle => angle.name === "ML-NL")
        .angle.toFixed();
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

.inner-harmony-table-header-div {
  height: 2.5rem;
  border-bottom: 1px solid #dddddd;
}

.inner-harmony-table-values-div {
  height: 94%;
  overflow: scroll;
}

.table-header-div,
.table-values-div {
  float: left;
  text-align: center;
  width: 16.66%;
}

.table-header-div {
  margin: 0.6rem auto;
}

.red {
  color: red;
}
</style>