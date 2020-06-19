<template>
  <div class="content-div">
    <div class="form-div">
      
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
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryMenu",
  data() {
    return {
      asd: ""
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

.form-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
}

form {
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

.form-input,
.form-input-half-width {
  position: relative;
  display: block;
  margin: 0 auto;
  height: 1.5rem;
  float: left;
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

.form-input {
  width: 100%;
}

.form-input-half-width {
  width: 50%;
}

.radio-input-div {
  float: left;
  margin-top: 2.5rem;
  padding-left: 1rem;
}

input[type="radio"] {
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  margin-top: -1px;
  vertical-align: middle;
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
  cursor: not-allowed;
  color: lightgray;
}

.generate-button-unclickable:hover {
  color: #ffcccb;
  border-color: #ffcccb;
}

.generate-button-clickable {
  cursor: pointer;
  color: inherit;
}

.generate-button-clickable:hover {
  color: inherit;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
</style>