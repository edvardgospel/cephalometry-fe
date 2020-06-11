<template>
  <div class="cephalometry-div">
    <div class="inner-cephalometry-div">
      <div class="content-div">
        <div class="photo-div">
          <div class="file-div">
            <input type="file" id="file" class="file-upload-input" />
            <div class="label-div">
              <label for="file">Choose a file</label>
            </div>
          </div>
        </div>
        <div class="elements-div">
          <div class="labels-div">
            <span class="cephalometric-point-span">N</span>
            <span class="reset-span">Reset</span>
          </div>
          <div class="button-div">
            <button class="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryGenerator"
};
</script>

<style scoped>
.cephalometry-div {
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;
}

.inner-cephalometry-div {
  position: relative;
  height: 100%;
  width: 85rem;
  margin: 0 auto;
  overflow: hidden;
}

.content-div {
  height: 100%;
  width: 55%;
  margin: 1rem auto;
}

.photo-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
}

.file-div {
  position: relative;
  height: 7rem;
  width: 50%;
  margin: 37% auto;
  border: 1px dashed #dddddd;
  text-align: center;
}

.label-div {
  margin: 11% auto;
}

.file-upload-input {
  display: none;
}

label {
  font-size: 1.5em;
  cursor: pointer; /* "hand" cursor */
  border-radius: 5px;
}

label:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}

.elements-div {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.labels-div {
  float: left;
  margin: 5px auto auto 5px;
}

.cephalometric-point-span {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 5px;
  cursor: default;
}

.reset-span {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 5px;
  margin-left: 5px;
  cursor: pointer; /* "hand" cursor */
}

.button-div {
  float: right;
}

.generate-button {
  font-size: 1.5em;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  cursor: pointer; /* "hand" cursor */
  border-radius: 5px;
  font-family: inherit;
  color: inherit;
}

.generate-button:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
</style>
