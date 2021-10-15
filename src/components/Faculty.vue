<template>
  <div id = "sunji">
    <h1>{{ faculty }}</h1>
    <h2>{{ jer1 }}</h2>
    <h3>{{ jer2 }}</h3>
    <h4>{{ jer3 }}</h4>
    <h5>{{ jer4 }}</h5>
    <h6>{{ jer5 }}</h6>
    <h7> {{ jer6 }} </h7>
  </div>
</template>

<script>
export default {
  name: "sunji",
  data() {
    return {
      faculty: "Faculty of Science",
      jer1: "สาขาวิทยาการคอมพิวเตอร์",
      jer2: "สาขาเทคโนโลยีสารสนเทศ",
      jer3: "สาขาวิทยาศาสตร์สิ่งแวดล้อมและเทคโนโลยีสิ่งแวดล้อม",
      jer4: "สาขาเคมี",
      jer5: "สาขาฟิสิกส์",
      jer6: "สาขาคณิตศาสตร์ประยุกต์",
    };
  },
};
</script>

<style>
#sunji {
  background-color: rgb(238, 229, 97);
  color: rgb(19, 19, 18);
}
</style>