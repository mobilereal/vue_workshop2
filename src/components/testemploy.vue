<template>
  <div>
    <p>ประวัติการทำงาน</p>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm"
        >Employee ID</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.employeeID"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">First Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.firstName"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.lastName"
      />
    </div>

    <div class="form-check mb-3">
      <input
        type="radio"
        class="btn-check"
        name="options"
        id="option1"
        autocomplete="off"
        v-model="info.gender"
        value="Male"
      />
      <label class="btn btn-outline-primary" for="option1">Male</label>

      <input
        type="radio"
        class="btn-check"
        name="options"
        id="option2"
        autocomplete="off"
        v-model="info.gender"
        value="Female"
      />
      <label class="btn btn-outline-primary" for="option2">Female</label>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Time In</span>
      <b-form-timepicker v-model="info.TimeIn" locale="en"></b-form-timepicker>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Time Out</span>
      <b-form-timepicker v-model="info.TimeOut" locale="en"></b-form-timepicker>
    </div>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-success" v-on:click="save">
        save
      </button>
    </div>
    <div :hidden="!show">
      <h3>Employee ID : {{ info.employeeID }}</h3>
      <h3>First Name : {{ info.firstName }}</h3>
      <h3>Last Name : {{ info.lastName }}</h3>
      <h3>Gender : {{ info.gender }}</h3>
      <h3>Time : {{ info.TimeIn }} -{{ info.TimeOut }}</h3>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "employee",
  data() {
    return {
      info: {
        employeeID: null,
        firstName: null,
        lastName: null,
        gender: null,
        TimeIn: null,
        TimeOut: null,
        active: false,
      },
      show: false,
    };
  },
  methods: {
    save() {
      this.checkActiveTime();
      this.show = true;
    },
    checkActiveTime() {
      const today = new Date();
      const time = moment(today, "HH:mm");
      if (
        moment(this.info.timeIn, "HH:mm").isBefore(time) &&
        moment(time).isBefore(moment(this.info.timeOut, "HH:mm"))
      ) {
        this.info.active = true;
      } else {
        this.info.active = false;
      }
    },
  },
};
</script>

<style>
</style>