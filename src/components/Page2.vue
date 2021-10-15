<template>
  <div>
    <h1>search page</h1>
    <div>
      <b-table :items="studentAllInfo"></b-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Page2",
  data() {
    return {
      studentAllInfo: [],
    };
  },
  mounted() {
    axios
      .get("https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8")
      .then((res) => {
        const info = res.data;
        this.studentAllInfo = info;
      });
  },
};
</script>
<style>
</style>