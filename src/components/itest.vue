<template>
  <div id="test" :class="color">
    v-model

    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">user</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input" v-model="userName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">password</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input" v-model="userPass"
      />
    </div>
    <div>
      shown :  <br>
      user :  {{userName}} <br>
      password : {{userPass}}
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Color</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input" v-model="bgColor"
      />
    </div>
    <div v-bind:style="{'background-color': bgColor}">
      Color : {{bgColor}}
    </div>

    <div class="card">
      <div vlass="class-header prinary ">
        ชื่อ : {{ myInfo.myName }}
        <button type="button" class="btn btn-secondary" @click="myShownInfo">
          {{ labelBotton }}
        </button>
      </div>
      <div class="class-body" :hidden="hideShown">
        Nickname : {{ myInfo.myNickname }} StudentID : {{ myInfo.myStudentID }}
      </div>
    </div> 

    v-on v-bind

    <button type="button" class="btn btn-primary" v-on:click="alertMsg('D','F',$event)">
      Click
    </button>
    <button type="button" class="btn btn-secondary" @click="alertMsg">
      Click1
    </button>
    <button type="button" class="btn btn-secondary" @dblclick="alertMsg">
      Click2
    </button>

    <p>Nanami</p>
    <p>{{ shown }}</p>
    <img v-bind:src="url" width="50%" heigth="50%" />

    <span />celsius : {{ celsius }} <span />fahrenheit : {{ fahrenheit }} -->
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      fName: "Nanami",
      imgName: "19Days",
      url: "https://pbs.twimg.com/media/EiSVY5vUYAEPOKC?format=jpg&name=900x900",
      color: "si",
      celsius: 30,
      dataPumu: ["หัว", "ก้อย"],
      text: "click",

      myInfo: {
        myName: "Nami ",
        myNickname: "MB",
        myStudentID: "6130203659",
      },
      hideShown: true,

      userName : null,
      userPass : null,
      bgColor : null

    };
  },
  computed: {
    fahrenheit() {
      let result = this.celsius * 1.8 + 32;
      return result;
    },
    random() {
      return Math.random() > 0.5 ? 1 : 0;
    },
    shown() {
      return this.dataPumu[this.random];
    },
    labelBotton() {
      return this.hideShown ? "Hide" : "Shown";
    },
  },
  methods: {
    alertMsg(p1, p2, e) {
      alert(`You ${e.type} the butter at ${e.clientX},${e.clientY}`);
      alert(`parameter ${p1},${p2}`);
    },
    alertMsgDB() {
      console.log("Hello,Suchanat Laphon");
    },
    myShownInfo() {
      this.hideShown = !this.hideShown;
    },
  },
};
</script>

<style>
#test {
  background-color: rgb(214, 113, 113);
  color: rgb(189, 84, 84);
}
.si {
  background-color: cornflowerblue;
}
</style>

