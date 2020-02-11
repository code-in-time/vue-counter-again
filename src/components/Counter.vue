<template>
  <div class="Counter">
    <button v-on:click="btnClick">click to Count {{cValue}}</button>
    <br /><br />
    <button v-on:click="() => this.dVal++">click to Count {{dVal}}</button>
    
    
    <br/><br />
    <MessageArea v-bind:counterVal="cValue" v-on:emit-customtext="updateHeading" />
    <br/><br />
    <h1>{{txtHeading}}</h1>
    <ul>
      <li v-for="p in products" v-bind:key="p.name">
        <span>{{p.name}}</span><span>{{p.price}}</span>
      </li>
    </ul>
    <hr />
    using state<br />
    {{message}}
    <br />
    <input v-model="message" />
    <hr />
    using vuex<br />
    {{address}}<br />
    <input v-model="address" />

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
      txtHeading: 'empty',
      message: 'test',
    };
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    address: {
      get () {
        return this.$store.state.address
      },
      set (value) {
        this.$store.commit('updateAddress', value)
      }
    }

  },

  methods: {
    btnClick() {
      // console.log("click ME");
      this.cValue += 1
    },
    updateHeading(e) {
      this.txtHeading = e
    },
    updateAddress (e) {
      this.$store.commit('updateAddress', e.taget.value)
      console.log('updateAddress', e.taget.value);
    }
  }
};
</script>

<style>
</style>
