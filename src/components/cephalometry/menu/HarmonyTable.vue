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
      <canvas id="canvas" width="640" height="600"></canvas>
      <div class="extra-space-div"></div>
      <div class="table-values-div">
        <div v-for="el in sna" :key="el.id" :class="{red: el==snaAngle}">{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding-bottom: 10.6px"
          v-for="el in nl_nsl"
          :key="el.id"
          :class="{red: el==nlNslAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding-bottom: 23.5px"
          v-for="el in nsba"
          :key="el.id"
          :class="{red: el==nsBaAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding-bottom: 8.9px"
          v-for="el in ml_nsl"
          :key="el.id"
          :class="{red: el==mlNslAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding-bottom: 5.5px"
          v-for="el in snb"
          :key="el.id"
          :class="{red: el==snbAngle}"
        >{{el}}</div>
      </div>
      <div class="table-values-div">
        <div
          style="padding-bottom: 6.5px"
          v-for="el in ml_nl"
          :key="el.id"
          :class="{red: el==mlNlAngle}"
        >{{el}}</div>
      </div>
      <div style="float:left" class="extra-space-div"></div>
    </div>
  </div>
</template>

<script>
import AngleCalcualator from "../../../resources/service/angle-calculator.js";

export default {
  name: "HarmonyTable",
  data() {
    return {
      sna: Array(103 - 60 + 1)
        .fill()
        .map((_, i) => 60 + i),
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
      nsba: Array(142 - 121 + 1)
        .fill()
        .map((_, i) => 121 + i)
        .reverse(),
      ml_nsl: Array(44 - 13 + 1)
        .fill()
        .map((_, i) => 13 + i)
        .reverse(),
      snb: Array(97 - 63 + 1)
        .fill()
        .map((_, i) => 63 + i),
      ml_nl: [
        "29",
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
      return AngleCalcualator.getAngles(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      );
    },
    snaAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "SNA")
        .angle.toFixed();
    },
    nlNslAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "NL-NSL")
        .angle.toFixed();
    },
    nsBaAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "NSBa")
        .angle.toFixed();
    },
    mlNslAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "ML-NSL")
        .angle.toFixed();
    },
    snbAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "SNB")
        .angle.toFixed();
    },
    mlNlAngle() {
      return this.cephalometricAngles
        .find(angle => angle.name === "ML-NL")
        .angle.toFixed();
    }
  },
  mounted() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      context.beginPath();
      context.moveTo(0, 273);
      context.lineTo(106, 273);
      context.lineTo(106, 153);
      context.lineTo(212, 153);
      context.lineTo(212, 146);
      context.lineTo(320, 146);
      context.lineTo(320, 193);
      context.lineTo(426, 193);
      context.lineTo(426, 273);
      context.lineTo(640, 273);

      context.moveTo(0, 362);
      context.lineTo(106, 362);
      context.lineTo(106, 460);
      context.lineTo(212, 460);
      context.lineTo(212, 478);
      context.lineTo(320, 478);
      context.lineTo(320, 441);
      context.lineTo(426, 441);
      context.lineTo(426, 362);
      context.lineTo(640, 362);

      context.lineWidth = "0.7";
      context.strokeStyle = "#2c3e50";
      context.stroke();

      context = canvas.getContext("2d");
      context.beginPath();
      context.setLineDash([15, 10]); /*dashes are 5px and spaces are 3px*/
      context.moveTo(0, 320);
      context.lineTo(640, 320);
      context.stroke();
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
  width: 100%;
  overflow: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.inner-harmony-table-values-div::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.inner-harmony-table-values-div {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.table-header-div,
.table-values-div {
  float: left;
  text-align: center;
  width: 16.66%;
}

.extra-space-div {
  height: 25%;
  width: 100%;
}

.table-header-div {
  margin: 0.6rem auto;
}

.red {
  color: red;
}

canvas {
  display: block;
  position: absolute;
  z-index: -1;
}
</style>