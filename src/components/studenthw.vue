<template>
    <div>
        <form @submit="checkForm">

            <p v-if="conditions.length">
            <b>Please Input your Information</b>
            <ul>
                <li v-for="error in conditions" :key="error" style="color: red"> {{ error }}</li>
            </ul>
            </p>
            

            <input type="text" v-model="id" placeholder="Student ID" style="margin-right:10px">
            <input type="checkbox" v-model="gender" value="Male">Male
            <input type="checkbox" v-model="gender" value="Female">Female
            <br>
            <input type="text" v-model="Fname" placeholder="FirstName" style="margin-right:10px" required>
            <input type="text" v-model="Lname" placeholder="LastNametName" style="margin-right:10px" required>
            <br>
            <textarea v-model="introduce" placeholder="Introduce yourselfe"></textarea>
            <br>
            <input type="radio" id="one" value="one" v-model="picked"/>จบแล้ว
            <input type="radio" id="two" value="two" v-model="picked"/>ยังไม่จบ

            <select v-model="selected">
                <option value="">Selected</option>
                <option 
                v-for="option in lv" 
                :key="option" 
                v-bind:value="option.value">
                {{option.text}}
                </option>
            </select>
            <br>

            <input type="submit" value="Submit">
            <br>
            <br>
            <div>
            <button type="button" class="btn btn-secondary" v-on:click="page2">Page 2</button>
            </div>

        </form>
    </div>
</template>

<script>
import Router from "vue-router";

const router = new Router({
  mode: "history",
});

export default {
  name: "Studenthw",
  data() {
    return {
      id: null,
      gender: [],
      Fname: null,
      Lname: null,
      introduce: null,
      picked: null,
      selected: "",
      lv: [
        { text: "ชั้นปีที่ 1", value: "1" },
        { text: "ชั้นปีที่ 2", value: "2" },
        { text: "ชั้นปีที่ 3", value: "3" },
        { text: "ชั้นปีที่ 4", value: "4" },
      ],
      conditions: [],
    };
  },
  methods: {
    checkForm(e) {
      if (!this.id) {
        this.conditions.push("Plaease input your Student Id");
      } else {
        router.push(
          `/page1/${this.id}/${this.Fname}/${this.Lname}/${this.gender}/${this.lv.values}`
        );
        router.go();
      }
      e.preventDefault();
    },
    page2() {
      router.push(`/page2/`);
      router.go();
    },
  },
};
</script>

<style>
</style>