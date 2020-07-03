<template>
  <div class="content-div">
    <div class="menu-div">
      <PersonalData
        v-show="currentComponent === 'personal'"
        :personalData="cephalometryResponse.personalData"
      />
      <AngleTable
        v-show="currentComponent === 'angle'"
        :cephalometricAngles="cephalometryResponse.cephalometricAngles"
      />
      <HarmonyTable
        v-show="currentComponent === 'harmony'"
        :cephalometricAngles="cephalometryResponse.cephalometricAngles"
      />
    </div>
    <div class="meta-elements-div">
      <div class="meta-elements-labels-div">
        <span class="meta-elements-span" @click="currentComponent = 'personal'">Personal data</span>
        <span class="meta-elements-span" @click="currentComponent = 'angle'">Angles</span>
        <span class="meta-elements-span" @click="currentComponent = 'harmony'">Harmony table</span>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalData from "./cephalometry/menu/PersonalData.vue";
import AngleTable from "./cephalometry/menu/AngleTable.vue";
import HarmonyTable from "./cephalometry/menu/HarmonyTable.vue";

export default {
  name: "CephalometryMenu",
  components: {
    PersonalData,
    AngleTable,
    HarmonyTable
  },
  props: {
    cephalometryResponse: Object,
    cephalometricImage: String
  },
  data() {
    return {
      currentComponent: "personal" //[personal, angle, harmony]
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