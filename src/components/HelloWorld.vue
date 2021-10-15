<template>
  <div id="hello" >
    <h1>Name : {{ myName + 23 }}</h1>
    <h2>Tel : {{ Tel }}</h2>
    <h3>Student ID : {{ studentID }}</h3>
    <button>Test</button>
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
    <i class="fas fa-address-card"></i>
    <b-card-body>
      <b-card-title>hello</b-card-title>
      <b-card-text> Hi </b-card-text>
    </b-card-body>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      myName: "Suchanat Laphon",
      Tel: "0966766219",
      studentID: "6130203659",
    };
  },
};
</script>

<style>
.test {
  font-size: 15 em;
}
#hello {
  background-color: rgb(132, 0, 255);
  color: rgb(255, 238, 83);
}
</style>