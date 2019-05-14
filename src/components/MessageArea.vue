<template>
  <div>
    <div class="container">show this number {{this.counterVal}}</div>
    <button v-on:click="$emit('emit-customtext','myTextHeading')">update text</button>
  </div>
</template>

<script>
export default {
  name: 'MessageArea',
  props: {
    counterVal: Number
  }
}
</script>

<style scoped>
  .container {
    width: 200px;
    height: 100px;
    background: red;
  }
</style>
