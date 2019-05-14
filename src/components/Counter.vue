<template>
  <div class="Counter">
    <button v-on:click="btnClick">click to Count {{cValue}}</button>
    <br /><br />
    <button v-on:click="() => this.dVal++">click to Count {{dVal}}</button>
    
    
    <br/><br />
    <MessageArea v-bind:counterVal="cValue" v-on:emit-customtext="updateHeading" />
    <br/><br />
    <h1>{{txtHeading}}</h1>
  </div>
</template>

<script>

import MessageArea from './MessageArea.vue'
export default {
  name: "Counter",
  components: {
    MessageArea,
  },
  data() {
    return {
      cValue: 1,
      dVal: 0,
      txtHeading: 'empty'
    };
  },
  methods: {
    btnClick() {
      // console.log("click ME");
      this.cValue += 1
    },
    updateHeading(e) {
      this.txtHeading = e
    }
  }
};
</script>

<style>
</style>
