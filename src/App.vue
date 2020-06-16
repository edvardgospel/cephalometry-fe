<template>
  <div id="app">
    <NavigationBar />
    <div class="cephalometry-div">
      <div class="inner-cephalometry-div">
        <CephalometryGenerator />
      </div>
    </div>
    <Footer :author="author" :email="email" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import CephalometryGenerator from "./components/CephalometryGenerator.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    CephalometryGenerator,
    Footer
  },
  data() {
    return {
      author: "Edvard Eros",
      email: "edvard.eros@yahoo.com"
    };
  }
};
</script>

<style>
html, body {
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
