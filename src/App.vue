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
          @cephalometry-coordinates-submitted="addCephalometryCoordinates"
        />
        <CephalometryMenu
          v-else-if="currentComponent === 'menu'"
          :cephalometryResponse="cephalometryResponse"
        />
        <LoadingScreen v-else-if="currentComponent === 'loading'" />
        <ErrorScreen v-else-if="currentComponent === 'error'" :error="error" />
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
import LoadingScreen from "./components/LoadingScreen.vue";
import ErrorScreen from "./components/ErrorScreen.vue";
import Footer from "./components/Footer.vue";
import api from "./Api.js";

export default {
  name: "App",
  components: {
    NavigationBar,
    CephalometryForm,
    CephalometryGenerator,
    CephalometryMenu,
    LoadingScreen,
    ErrorScreen,
    Footer
  },
  data() {
    return {
      currentComponent: "form", //[form, generator, menu, loading, error]
      personalData: null,
      cephalometryCoordinates: [],
      cephalometryRequest: {},
      cephalometryResponse: {},
      error: {}
    };
  },
  methods: {
    addPersonalData(personalData) {
      this.personalData = personalData;
      this.currentComponent = "generator";
    },
    addCephalometryCoordinates(cephalometryCoordinates) {
      this.cephalometryCoordinates = cephalometryCoordinates;
      this.createRequest();
      this.currentComponent = "loading";
      api
        .createNew(this.cephalometryRequest)
        .then(response => {
          this.cephalometryResponse = response.data;
          this.currentComponent = "menu";
        })
        .catch(error => {
          this.error = error;
          this.currentComponent = "error";
        });
    },
    createRequest() {
      this.cephalometryRequest.personalData = this.personalData;
      this.cephalometryRequest.cephalometryCoordinates = this.cephalometryCoordinates;
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
