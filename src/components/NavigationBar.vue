<template>
  <div class="nav-bar">
    <div class="inner-nav-bar">
      <div class="logo-div">
        <span>Cephalometry</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>

<style scoped>
.nav-bar {
  border-bottom: 1px solid #dddddd;
  height: 4rem;
}

.inner-nav-bar {
  height: 100%;
  width: 85rem;
  margin: 0 auto;
  position: relative;
}

.logo-div {
  padding-left: 1rem;
  top: 25%;
  font-size: 1.5rem;
  position: absolute;
}
</style>