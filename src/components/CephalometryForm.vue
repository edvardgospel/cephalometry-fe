<template>
  <div class="content-div">
    <div class="form-div">
      <form id="form-id" @submit.prevent="submitForm">
        <div class="inner-form-div">
          <div class="inner-input-div">
            <input
              type="text"
              class="form-input-half-width"
              v-model="name"
              placeholder="Name"
              maxlength="50"
            />
          </div>
          <div class="radio-input-div">
            <input type="radio" id="male" v-model="gender" value="male" />
            <label for="male">Male&nbsp;</label>
            <input type="radio" id="female" v-model="gender" value="female" />
            <label for="female">Female</label>
          </div>
          <input
            type="text"
            class="form-input"
            v-model="address"
            placeholder="Address"
            maxlength="50"
          />
          <input type="text" class="form-input" v-model="phone" placeholder="Phone" maxlength="15" />
          <input
            type="text"
            class="form-input"
            v-model="doctor"
            placeholder="Doctor"
            maxlength="50"
          />
          <input
            type="text"
            class="form-input"
            :class="{red: (birthDate.length===10 && !isDateMatchesRegex(birthDate)) || (isAllInputFilled && !isDateMatchesRegex(birthDate))}"
            v-model="birthDate"
            placeholder="Birthdate                                                  (yyyy.mm.dd)"
            maxlength="10"
          />
          <input
            type="text"
            class="form-input"
            :class="{red: (xRayDate.length===10 && !isDateMatchesRegex(xRayDate)) || (isAllInputFilled && !isDateMatchesRegex(xRayDate))}"
            v-model="xRayDate"
            placeholder="X-Ray date                                               (yyyy.mm.dd)"
            maxlength="10"
          />
          <textarea
            class="form-textarea"
            v-model="remarks"
            placeholder="Remarks                                                        (optional)"
            rows="3"
            maxlength="1500"
          />
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
          :class="{'generate-button-clickable': isAllInputFilled && doesDatesMatchesRegex}"
        >Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CephalometryForm",
  data() {
    return {
      name: "Edvard Eros", //""
      address: "Satu Mare", //""
      phone: "30 162 1442", //...
      gender: "male",
      doctor: "Dr. Csibi",
      birthDate: "1995.02.12",
      xRayDate: "2020.07.28",
      remarks: "", //TODO!!
      dateRegex: "([12]\\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\\d|3[01]))",
    };
  },
  computed: {
    isAllInputFilled() {
      return (
        this.name !== "" &&
        this.address !== "" &&
        this.phone !== "" &&
        this.gender !== "" &&
        this.doctor !== "" &&
        this.birthDate !== "" &&
        this.xRayDate !== ""
      );
    },
    doesDatesMatchesRegex() {
      return (
        this.isDateMatchesRegex(this.birthDate) &&
        this.isDateMatchesRegex(this.xRayDate)
      );
    },
  },
  methods: {
    resetForm() {
      this.name = "";
      this.address = "";
      this.phone = "";
      this.gender = "";
      this.doctor = "";
      this.birthDate = "";
      this.xRayDate = "";
      this.remarks = "";
    },
    isDateMatchesRegex(date) {
      return date.match(this.dateRegex);
    },
    submitForm() {
      if (this.isAllInputFilled && this.doesDatesMatchesRegex) {
        let personalData = {
          name: this.name,
          address: this.address,
          phone: this.phone,
          gender: this.gender,
          doctor: this.doctor,
          birthDate: this.birthDate,
          xRayDate: this.xRayDate,
          remarks: this.remarks,
        };
        this.$store.commit("SET_PERSONAL_DATA", personalData);
        this.$store.commit("NEXT_COMPONENT");
      }
    },
  },
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
.form-input-half-width,
.form-textarea {
  position: relative;
  margin: 0 auto;
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

.form-input,
.form-input-half-width {
  height: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
}

.form-input-half-width {
  width: 50%;
}

.form-textarea {
  resize: none;
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

input[type="date"]::before {
  content: attr(data-placeholder);
  width: 100%;
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  display: none;
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

.red {
  color: red;
}
</style>
