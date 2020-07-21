<template>
  <div class="content-div">
    <div class="form-div">
      <form id="form-id" @submit.prevent="submitForm">
        <div class="inner-form-div">
          <div class="form-header-div">
            <span>Growth forecast</span>
          </div>
          <label class="form-input-label" for="newAnb">New ANB:</label>
          <input type="text" class="form-input" id="newAnb" v-model="newANB" />
          <label class="form-input-label" for="newMlNl">New ML-NL:</label>
          <input type="text" class="form-input" id="newMlNl" v-model="newMLNL" />
          <label class="form-input-label" for="newN">New N:</label>
          <input type="text" class="form-input" id="newN" v-model="newN" />
          <label class="form-input-label" for="condyl">Condyl:</label>
          <input type="text" class="form-input" id="condyl" v-model="condyl" />
          <label class="form-input-label" for="canalisMand">Canalis mand.:</label>
          <input type="text" class="form-input" id="canalisMand" v-model="canalisMand" />
          <label class="form-input-label" for="mandibula">Mandibula:</label>
          <input type="text" class="form-input" id="mandibula" v-model="mandibula" />
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
          :class="{'generate-button-clickable': isAllInputFilled()}"
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
      condyl: null,
      canalisMand: null,
      mandibula: null
    };
  },
  computed: {
    newANB() {
      return AngleCalcualator.getANB(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(2);
    },
    newMLNL() {
      return AngleCalcualator.getMLNL(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(2);
    },
    newN() {
      return AngleCalcualator.getN(
        this.$store.getters.CEPHALOMETRY_COORDINATES
      ).toFixed(2);
    }
  },
  methods: {
    resetForm() {
      this.newANB = null;
      this.newMLNL = null;
      this.newN = null;
      this.condyl = null;
      this.canalisMand = null;
      this.mandibula = null;
    },
    isAllInputFilled() {
      return (
        this.newANB !== null &&
        this.newANB !== "" &&
        this.newMLNL !== null &&
        this.newMLNL !== "" &&
        this.newN !== null &&
        this.newN !== "" &&
        this.condyl !== null &&
        this.condyl !== "" &&
        this.canalisMand !== null &&
        this.canalisMand !== "" &&
        this.mandibula !== null &&
        this.mandibula !== ""
      );
    },
    submitForm() {
      if (this.isAllInputFilled()) {
        let growthForecast = {
          newANB: this.newANB,
          newMLNL: this.newMLNL,
          newN: this.newN,
          condyl: this.condyl,
          canalisMand: this.canalisMand,
          mandibula: this.mandibula
        };
        this.$store.commit("SET_GROWTH_FORECAST", growthForecast);
        this.$store.commit("NEXT_COMPONENT");
      }
    }
  }
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
  width: 28%;
  text-align: cent;
}

.form-input {
  position: relative;
  width: 70%;
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
</style>
