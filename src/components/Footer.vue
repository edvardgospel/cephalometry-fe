<template>
  <footer>
    <div class="footer-div">
      <div class="inner-footer-div">
        <span>Author: {{author}}</span>
        <br />
        <span>Email: {{email}}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    author: String,
    email: String,
  },
};
</script>

<style scoped>
footer {
  position: relative;
  border-top: 1px solid #ddd;
  height: 5rem;
  bottom: 0;
  width: 100%;
}

.footer-div {
  height: 100%;
  width: 85rem;
  margin: 0 auto;
  position: relative;
}

.inner-footer-div {
  float: left;
  margin: 1rem auto auto 1rem;
}
</style>