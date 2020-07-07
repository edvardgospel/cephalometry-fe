<template>
  <div class="personal-data-content-div">
    <ul style="float:right; padding-right: 40px">
      <li>Name: {{personalData.name}}</li>
      <li>Address: {{personalData.address}}</li>
      <li>Gender: {{personalData.gender}}</li>
      <li>Phone: {{personalData.phone}}</li>
      <li>Doctor: {{personalData.doctor}}</li>
      <li>Birthdate: {{personalData.birthDate}}</li>
      <li>X-ray date: {{personalData.xRayDate}}</li>
      <li>Remarks: {{personalData.remarks}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalData",
  computed: {
    personalData() {
      return this.$store.getters.PERSONAL_DATA;
    }
  }
};
</script>

<style scoped>
.personal-data-content-div {
  height: 100%;
  width: 100%;
  margin: 0 auto;
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
</style>