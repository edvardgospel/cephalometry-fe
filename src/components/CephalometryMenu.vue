<template>
  <div class="content-div">
    <div class="menu-div">
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
    <div class="meta-elements-div">
      <div class="meta-elements-labels-div">
        <span class="meta-elements-span" @click="currentComponent = 'PersonalData'">Personal data</span>
        <span class="meta-elements-span" @click="currentComponent = 'AngleTable'">Angles</span>
        <span class="meta-elements-span" @click="currentComponent = 'HarmonyTable'">Harmony table</span>
        <span class="meta-elements-span" @click="currentComponent = 'Xray'">X-ray</span>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalData from "./cephalometry/menu/PersonalData.vue";
import AngleTable from "./cephalometry/menu/AngleTable.vue";
import HarmonyTable from "./cephalometry/menu/HarmonyTable.vue";
import Xray from "./cephalometry/Xray.vue";

export default {
  name: "CephalometryMenu",
  components: {
    PersonalData,
    AngleTable,
    HarmonyTable,
    Xray
  },
  data() {
    return {
      currentComponent: "PersonalData" //[PersonalData, AngleTable, HarmonyTable, Xray]
    };
  }
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
</style>