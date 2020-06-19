<template>
  <div class="content-div">
    <div class="form-div">
      <form id="form-id" @submit.prevent="submitForm">
        <div class="inner-form-div">
          <div class="inner-input-div">
            <input type="text" class="form-input-half-width" v-model="name" placeholder="Name" />
          </div>
          <div class="radio-input-div">
            <input type="radio" id="male" v-model="gender" value="male" />
            <label for="male">Male&nbsp;</label>
            <input type="radio" id="female" v-model="gender" value="female" />
            <label for="female">Female</label>
          </div>
          <input type="text" class="form-input" v-model="address" placeholder="Address" />
          <input type="tel" class="form-input" v-model="phone" placeholder="Phone" />
          <input type="text" class="form-input" v-model="doctor" placeholder="Doctor" />
          <input type="date" class="form-input" v-model="birthDate" placeholder="Birthdate" />
          <input type="date" class="form-input" v-model="xRayDate" placeholder="X-Ray date" />
          <input type="text" class="form-input" v-model="remarks" placeholder="Remarks" />
        </div>
      </form>
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
          :class="{'generate-button-clickable': isAllInputFilled()}"
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryForm",
  data() {
    return {
      name: null,
      address: null,
      phone: null,
      gender: null,
      doctor: null,
      birthDate: null,
      xRayDate: null,
      remarks: null
    };
  },
  methods: {
    resetForm() {
      this.name = null;
      this.address = null;
      this.phone = null;
      this.gender = null;
      this.doctor = null;
      this.birthDate = null;
      this.xRayDate = null;
      this.remarks = null;
    },
    isAllInputFilled() {
      return (
        this.name !== null &&
        this.name !== "" &&
        this.address !== null &&
        this.address !== "" &&
        this.phone !== null &&
        this.phone !== "" &&
        this.gender !== null &&
        this.gender !== "" &&
        this.doctor !== null &&
        this.doctor !== "" &&
        this.birthDate !== null &&
        this.birthDate !== "" &&
        this.xRayDate !== null &&
        this.xRayDate !== "" &&
        this.remarks !== null &&
        this.remarks !== ""
      );
    },
    submitForm() {
      let personalData = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        gender: this.gender,
        doctor: this.doctor,
        birthDate: this.birthDate,
        xRayDate: this.xRayDate,
        remarks: this.remarks
      };
      this.$emit("personal-data-submitted", personalData);
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
