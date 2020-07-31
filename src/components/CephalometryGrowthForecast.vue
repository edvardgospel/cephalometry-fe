<template>
  <div class="content-div">
    <div class="form-div">
      <form id="form-id" @submit.prevent="submitForm">
        <div class="inner-form-div">
          <div class="form-header-div">
            <span>Growth forecast</span>
          </div>
          <label class="form-input-label" for="newAnb">Modified ANB:</label>
          <input type="text" class="form-input" id="newAnb" v-model="newANB" />
          <label class="form-input-label" for="newMlNl">Modified ML-NL:</label>
          <input type="text" class="form-input" id="newMlNl" v-model="newMLNL" />
          <label class="form-input-label" for="newN">Modified N:</label>
          <input type="text" class="form-input" id="newN" v-model="newN" />
          <label class="form-input-label" for="condyl">Condylus:</label>
          <input
            type="text"
            class="form-input"
            :class="{red: !isCorrectValue(condyl)}"
            id="condyl"
            v-model="condyl"
          />
          <label class="form-input-label" for="canalisMand">Canalis mandibulae:</label>
          <input
            type="text"
            class="form-input"
            :class="{red: !isCorrectValue(canalisMand)}"
            id="canalisMand"
            v-model="canalisMand"
          />
          <label class="form-input-label" for="mandibula">Mandibula:</label>
          <input
            type="text"
            class="form-input"
            :class="{red: !isCorrectValue(mandibula)}"
            id="mandibula"
            v-model="mandibula"
          />
        </div>
      </form>
    </div>
    <div class="meta-elements-div">
      <div class="meta-elements-labels-div">
        <span class="reset-form-span" @click="resetForm">Reset form</span>
      </div>
      <div class="generate-button-div">
        <button
          type="submit"
          form="form-id"
          class="generate-button-unclickable"
          :class="{'generate-button-clickable': isAllInputFilled && areCorrectValues}"
        >Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import AngleCalcualator from "../resources/service/angle-calculator.js";

export default {
  name: "CephalometryGrowthForecast",
  data() {
    return {
      newANB: AngleCalcualator.getANB(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1),
      newMLNL: AngleCalcualator.getMLNL(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1),
      newN: AngleCalcualator.getN(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1),
      condyl: "0",
      canalisMand: "0",
      mandibula: "0",
    };
  },
  computed: {
    isAllInputFilled() {
      return (
        this.newANB !== "" &&
        this.newMLNL !== "" &&
        this.newN !== "" &&
        this.condyl !== "" &&
        this.canalisMand !== "" &&
        this.mandibula !== ""
      );
    },
    areCorrectValues() {
      return (
        this.isCorrectValue(this.condyl) &&
        this.isCorrectValue(this.canalisMand) &&
        this.isCorrectValue(this.mandibula)
      );
    }
  },
  methods: {
    resetForm() {
      this.newANB = AngleCalcualator.getANB(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1);
      this.newMLNL = AngleCalcualator.getMLNL(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1);
      this.newN = AngleCalcualator.getN(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(1);
      this.condyl = "0";
      this.canalisMand = "0";
      this.mandibula = "0";
    },
    isCorrectValue(value) {
      if (["-3", "-2", "-1", "0", "1", "2", "3", ""].includes(value)) {
        return true;
      }
      return false;
    },
    submitForm() {
      if (this.isAllInputFilled()) {
        let growthForecast = {
          newANB: this.newANB,
          newMLNL: this.newMLNL,
          newN: this.newN,
          condyl: this.condyl,
          canalisMand: this.canalisMand,
          mandibula: this.mandibula,
        };
        this.$store.commit("SET_GROWTH_FORECAST", growthForecast);
        this.$store.commit("NEXT_COMPONENT");
      }
    },
  },
};
</script>

<style scoped>
.content-div {
  height: 100%;
  width: 40rem;
  margin: 1rem auto;
}

.form-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
}

#form-id {
  position: relative;
  height: 100%;
  width: 100%;
}

.inner-form-div {
  position: relative;
  height: 100%;
  width: 60%;
  margin: 3rem auto;
}

.form-header-div {
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.form-input-label {
  display: inline-block;
  width: 38%;
  text-align: cent;
}

.form-input {
  position: relative;
  width: 60%;
  margin: 0 auto;
  height: 1.5rem;
  margin-top: 2.5rem;
  padding-left: 3px;
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #dddddd;
}

.meta-elements-div {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.meta-elements-labels-div {
  float: left;
  margin: 5px auto auto 5px;
}

.reset-form-span {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 5px;
  cursor: pointer;
}

.generate-button-div {
  float: right;
  margin: 3px auto auto 5px;
}

.generate-button-unclickable,
.generate-button-clickable {
  font-size: 1.5em;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-family: inherit;
}

.generate-button-unclickable {
  pointer-events: none;
  color: #dddddd;
}

.generate-button-clickable {
  pointer-events: all;
  cursor: pointer;
  color: inherit;
}

.generate-button-clickable:hover {
  color: inherit;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}

.red {
  color: red;
}
</style>
