<template>
  <div class="content-div">
    <div class="image-div" :class="{'image-div-remove-border': cephalometricImage.length > 0}">
      <div class="inner-image-div" id="inner-image-div-id" v-show="cephalometricImage.length > 0">
        <img
          class="image-img"
          :class="{'image-img-unclickable': cephalometricPoints.length === index}"
          :src="cephalometricImage"
          @click="clickImage"
        />
      </div>
      <div class="file-upload-div">
        <input
          class="file-upload-input"
          id="file-upload-input-id"
          type="file"
          accept="image/*"
          @change="uploadImage"
        />
        <div class="file-upload-label-div">
          <label class="file-upload-label" for="file-upload-input-id">Choose a file</label>
        </div>
      </div>
    </div>
    <div class="meta-elements-div">
      <div class="meta-elements-labels-div">
        <span
          class="actual-cephalometric-point-span"
        >{{cephalometricPoints[index] ? cephalometricPoints[index] : "&#10003;"}}</span>
        <span class="reset-points-span" @click="removeDot">Reset point</span>
        <span class="reset-image-span" @click="removeImage">Reset image</span>
      </div>
      <div class="generate-button-div">
        <button
          class="generate-button-unclickable"
          :class="{'generate-button-clickable': cephalometricPoints.length === index}"
          @click="submitCephalometricCoordiantes"
        >Next</button>
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
        "ANS",
        "PNS",
        "UI",
        "UIA",
        "LI",
        "LIA",
        "A",
        "B",
        "Pg",
        "Gn",
        "tgo",
        "Ar",
        "Pg soft",
        "UL",
        "Tang",
        "N soft"
      ],
      cephalometryCoordinates: [],
      index: 0
    };
  },
  methods: {
    uploadImage(event) {
      var input = event.target; // Reference to the DOM input element
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.cephalometricImage = e.target.result; // Callback, when FileReader finishes its job
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    removeImage() {
      this.removeDots();
      this.index = 0;
      this.cephalometricImage = "";
      this.cephalometryCoordinates = [];
    },
    clickImage(event) {
      this.saveCoordinates(event);
      this.addDot(event);
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
      div.style.cursor = "crosshair";
      document.getElementById("inner-image-div-id").appendChild(div);
    },
    saveCoordinates(event) {
      let cephalometricCoordinate = {
        name: this.cephalometricPoints[this.index],
        x: event.offsetX,
        y: event.offsetY
      };
      this.cephalometryCoordinates.push(cephalometricCoordinate);
    },
    removeDot() {
      if (this.index > 0) {
        this.index -= 1;
        this.cephalometryCoordinates.pop();
        var select = document.getElementById("inner-image-div-id");
        select.removeChild(select.lastChild);
      }
    },
    removeDots() {
      this.index = 0;
      this.cephalometryCoordinates = [];
      var paras = document.getElementsByClassName("image-dot-div");
      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }
    },
    submitCephalometricCoordiantes() {
      this.$store.commit("SET_CEPHALOMETRIC_IMAGE", this.cephalometricImage);
      this.$store.commit(
        "SET_CEPHALOMETRY_COORDINATES",
        this.cephalometryCoordinates
      );
      this.$store.commit("NEXT_COMPONENT");
    }
  }
};
</script>

<style scoped>
.content-div {
  height: 100%;
  width: 40rem;
  margin: 1rem auto;
}

.image-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
}

.image-div-remove-border {
  border: none;
}

.inner-image-div {
  position: relative;
  height: 100%;
  width: 100%;
}

.image-img {
  position: relative;
  width: 100%;
  cursor: crosshair;
}

.image-img-unclickable {
  pointer-events: none;
}

.file-upload-div {
  position: relative;
  height: 7rem;
  width: 50%;
  margin: 30% auto;
  border: 1px dashed #dddddd;
  text-align: center;
}

.file-upload-label-div {
  margin: 11% auto;
}

.file-upload-input {
  display: none;
}

.file-upload-label {
  font-size: 1.4em;
  cursor: pointer;
  border-radius: 5px;
}

.file-upload-label:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
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

.actual-cephalometric-point-span,
.reset-points-span,
.reset-image-span {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.actual-cephalometric-point-span,
.reset-points-span {
  margin-right: 5px;
}

.reset-points-span,
.reset-image-span {
  margin-left: 5px;
  cursor: pointer;
}

.actual-cephalometric-point-span {
  cursor: default;
  display: inline-block;
  text-align: center;
  width: 50px;
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
  pointer-events: none;
  color: #dddddd;
}

.generate-button-clickable {
  pointer-events: all;
  cursor: pointer;
  color: inherit;
}

.generate-button-clickable:hover {
  color: inherit;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
</style>
