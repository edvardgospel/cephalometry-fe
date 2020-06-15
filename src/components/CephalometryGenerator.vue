<template>
  <div class="cephalometry-div">
    <div class="inner-cephalometry-div">
      <div class="content-div">
        <div class="photo-div" :class="{'photo-div-active': cephalometricImage.length > 0}">
          <div class="image-div" id="image-div-id" v-show="cephalometricImage.length > 0">
            <img
              class="image-img"
              :src="cephalometricImage"
              :class="{'image-img-unclickable': cephalometricPoints.length === index}"
              @click="clickImage"
            />
          </div>
          <div class="file-div">
            <input
              class="file-upload-input"
              type="file"
              id="file"
              @change="previewImage"
              accept="image/*"
            />
            <div class="label-div">
              <label for="file">Choose a file</label>
            </div>
          </div>
        </div>
        <div class="elements-div">
          <div class="labels-div">
            <span
              class="cephalometric-point-span"
            >{{cephalometricPoints[index] ? cephalometricPoints[index] : "&#10003;"}}</span>
            <span class="reset-points-span" @click="removeDots">Reset points</span>
            <span class="reset-image-span" @click="removeImage">Reset image</span>
          </div>
          <div class="button-div">
            <button v-show="cephalometricPoints.length === index" class="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryGenerator",
  data() {
    return {
      cephalometricImage: "", // we will store base64 format of image in this string
      cephalometricPoints: [
        "N",
        "S",
        "Ba",
        "Sp",
        "A",
        "Pm",
        "is",
        "isa",
        "B",
        "Pg",
        "Gn",
        "ii",
        "iia",
        "Ar",
        "Sp'",
        "tgo",
        "PG",
        "N'",
        "UL"
      ],
      index: 0
    };
  },
  methods: {
    previewImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.cephalometricImage = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    removeImage() {
      this.removeDots();
      this.cephalometricImage = "";
    },
    clickImage(event) {
      this.incerementIndex();
      this.addDot(event);
      this.saveCoordinates(event);
    },
    incerementIndex() {
      this.index += 1;
    },
    addDot(event) {
      var div = document.createElement("div");
      div.className = "image-dot-div";
      div.style.position = "absolute";
      div.style.top = event.offsetY + "px";
      div.style.left = event.offsetX + "px";
      div.style.width = "2px";
      div.style.height = "2px";
      div.style.backgroundColor = "yellow";
      document.getElementById("image-div-id").appendChild(div);
    },
    saveCoordinates(event) {
      let mouseX = event.offsetX;
      let mouseY = event.offsetY;
      console.log(mouseX + " " + mouseY);
    },
    removeDots() {
      this.index = 0;
      var paras = document.getElementsByClassName("image-dot-div");
      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }
    }
  }
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

.photo-div-active {
  border: none;
}

.image-div {
  position: relative;
  height: 100%;
  width: 100%;
}

.image-img {
  position: relative;
  width: 100%;
}

.image-img-unclickable {
  pointer-events: none;
}

.image-img:hover {
  cursor: crosshair; /* "hand" cursor */
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
  display: inline-block;
  text-align: center;
  width: 20px;
}

.reset-points-span {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer; /* "hand" cursor */
}

.reset-image-span {
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
