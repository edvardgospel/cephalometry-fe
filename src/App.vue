<template>
  <div id="app">
    <NavigationBar />
    <div class="cephalometry-div">
      <div class="inner-cephalometry-div">
        <CephalometryForm
          v-if="currentComponent === 'form'"
          @personal-data-submitted="addPersonalData"
        />
        <CephalometryGenerator
          v-else-if="currentComponent === 'generator'"
          @cephalometric-coordinates-submitted="addCephalometricCoordinates"
        />
        <CephalometryMenu v-else-if="currentComponent === 'menu'" />
      </div>
    </div>
    <Footer author="Edvard Eros" email="edvard.eros@yahoo.com" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import CephalometryForm from "./components/CephalometryForm.vue";
import CephalometryGenerator from "./components/CephalometryGenerator.vue";
import CephalometryMenu from "./components/CephalometryMenu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    CephalometryForm,
    CephalometryGenerator,
    CephalometryMenu,
    Footer
  },
  data() {
    return {
      currentComponent: "form",
      personalData: null,
      cephalometricCoordinates: null
    };
  },
  methods: {
    addPersonalData(personalData) {
      this.currentComponent = "generator";
      this.personalData = personalData;
    },
    addCephalometricCoordinates(cephalometricCoordinates) {
      this.currentComponent = "menu";
      this.cephalometricCoordinates = cephalometricCoordinates;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}

#app {
  position: relative;
  height: 45rem;
  width: 100%;
}

.cephalometry-div {
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;
}

.inner-cephalometry-div {
  position: relative;
  height: 100%;
  max-width: 85rem;
  margin: 0 auto;
  overflow: hidden;
}
</style>
