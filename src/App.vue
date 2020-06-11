<template>
  <div id="app">
    <NavigationBar />
    <CephalometryGenerator />
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
body {
  height: 100%;
  width: 100%;
  margin: 0rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
