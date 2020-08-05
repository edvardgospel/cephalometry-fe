<template>
  <div class="content-div">
    <div class="menu-div">
      <PersonalData :class=" {'dont-show': currentComponent  !== 'PersonalData'}" />
      <AngleTable :class=" {'dont-show': currentComponent  !== 'AngleTable'}" />
      <HarmonyTable :class=" {'dont-show': currentComponent  !== 'HarmonyTable'}" />
      <Xray :class=" {'dont-show': currentComponent  !== 'Xray'}" />
    </div>
    <div class="meta-elements-div">
      <div class="meta-elements-labels-div">
        <span
          class="meta-elements-span"
          :class="{'meta-elements-span-active': currentComponent  === 'PersonalData'}"
          @click="currentComponent = 'PersonalData';"
        >Personal</span>
        <span
          class="meta-elements-span"
          :class="{'meta-elements-span-active': currentComponent  === 'AngleTable'}"
          @click="currentComponent = 'AngleTable'"
        >Angles</span>
        <span
          class="meta-elements-span"
          :class="{'meta-elements-span-active': currentComponent  === 'HarmonyTable'}"
          @click="currentComponent = 'HarmonyTable'"
        >Harmony</span>
        <span
          class="meta-elements-span"
          :class="{'meta-elements-span-active': currentComponent  === 'Xray'}"
          @click="currentComponent = 'Xray'"
        >X-ray</span>
      </div>
      <div class="save-button-div">
        <button class="save-button" @click="saveToPdf">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalData from "./cephalometry/menu/PersonalData.vue";
import AngleTable from "./cephalometry/menu/AngleTable.vue";
import HarmonyTable from "./cephalometry/menu/HarmonyTable.vue";
import Xray from "./cephalometry/Xray.vue";
import PDFGenerator from "../resources/service/pdf-generator.js";

export default {
  name: "CephalometryMenu",
  components: {
    PersonalData,
    AngleTable,
    HarmonyTable,
    Xray,
  },
  data() {
    return {
      currentComponent: "PersonalData", //[PersonalData, AngleTable, HarmonyTable, Xray]
    };
  },
  methods: {
    saveToPdf() {
      PDFGenerator.savePDF();
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

.menu-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
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

.meta-elements-span {
  border: 1px solid #dddddd;
  margin-right: 5px;
  margin-left: 5px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.meta-elements-span-active {
  background-color: #dddddd;
}

.save-button-div {
  float: right;
  margin: 3px auto auto 5px;
}

.save-button {
  font-size: 1.5em;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-family: inherit;
  cursor: pointer;
  color: inherit;
}

.save-button:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.dont-show {
  position: absolute;
  left: -999em;
}
</style>