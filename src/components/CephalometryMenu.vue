<template>
  <div class="content-div">
    <div class="menu-div">
      <ul style="float:right; padding-right: 40px">
        <li>Name: {{cephalometryResponse.personalData.name}}</li>
        <li>Address: {{cephalometryResponse.personalData.address}}</li>
        <li>Gender: {{cephalometryResponse.personalData.gender}}</li>
        <li>Phone: {{cephalometryResponse.personalData.phone}}</li>
        <li>Doctor: {{cephalometryResponse.personalData.doctor}}</li>
        <li>Birthdate: {{cephalometryResponse.personalData.birthDate}}</li>
        <li>X-ray date: {{cephalometryResponse.personalData.xRayDate}}</li>
        <li>Remarks: {{cephalometryResponse.personalData.remarks}}</li>
      </ul>
      <ul>
        <li
          v-for="cephalometricAngle in cephalometryResponse.cephalometricAngles"
          :key="cephalometricAngle.name"
        >{{ cephalometricAngle.name }}: {{cephalometricAngle.angle}}°</li>
      </ul>
    </div>
    <div class="meta-elements-div">
      <div class="generate-button-div">
        <!--<button type="submit" form="form-id" class="generate-button-clickable">Submit</button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryMenu",
  props: {
    cephalometryResponse: Object
  }
};
</script>

<style scoped>
.content-div {
  height: 100%;
  width: 40rem;
  margin: 1rem auto;
}

.menu-div {
  position: relative;
  height: 90%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dddddd;
}

ul {
  list-style-type: none;
}

.meta-elements-div {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.generate-button-div {
  float: right;
  margin: 3px auto auto 5px;
}

.generate-button-clickable {
  font-size: 1.5em;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-family: inherit;
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