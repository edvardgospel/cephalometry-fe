<template>
  <div class="personal-data-content-div-2">
    <ul>
      <li>
        <b>Name:</b>
        {{personalData.name}}
      </li>
      <li>
        <b>Address:</b>
        {{personalData.address}}
      </li>
      <li>
        <b>Gender:</b>
        {{personalData.gender}}
      </li>
      <li>
        <b>Phone:</b>
        {{personalData.phone}}
      </li>
      <li>
        <b>Doctor:</b>
        {{personalData.doctor}}
      </li>
      <li>
        <b>Birthdate:</b>
        {{personalData.birthDate}}
      </li>
      <li>
        <b>X-ray date:</b>
        {{personalData.xRayDate}}
      </li>
      <li>
        <b>Remarks:</b>
        {{personalData.remarks}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalData",
  computed: {
    personalData() {
      return this.$store.getters.PERSONAL_DATA;
    },
  },
};
</script>

<style scoped>
.personal-data-content-div-2 {
  height: 100%;
  width: 100%;
  margin: 2rem auto;
}

ul {
  list-style-type: none;
}
</style>