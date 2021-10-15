<template>
  <div>
    <p>หญิงเองก็ลำบากกว่า</p>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Student ID</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.studentID"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Nick Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.nickName"
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

    <div class="form-check mb-3" v-for="(data, index) in gender" :key="index">
      <input
        type="radio"
        class="btn-check"
        name="options"
        :id="index"
        autocomplete="off"
        v-model="info.gender"
        :value="data.value"
      />
      <label class="btn btn-primary" :for="index">{{ data.label }}</label>
    </div>

    <div>
      <button type="button" class="btn btn-primary" v-on:click="save">
        save
      </button>
    </div>

    <div>
      <b-table hover :items="studentInfo"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "employee",
  data() {
    return {
      info: {
        studentID: null,
        nickName: null,
        firstName: null,
        lastName: null,
        gender: null,
      },
      show: false,
      gender: [
        {
          label: "Male",
          value: "M",
        },
        {
          label: "Female",
          value: "F",
        },
      ],
      studentInfo: [],
    };
  },
  methods: {
    save() {
      this.studentInfo.push(this.info);
      this.show = true;
      this.info = {
        studentID: null,
        nickName: null,
        firstName: null,
        lastName: null,
        gender: null,
      };
    },
  },
};
</script>

<style>
</style>
