<template>
  <div id="app">
    <h3>Vuex Cart Demo</h3>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import product from "./components/product";
import cart from "./components/cart";
import info from "./components/info";

export default {
  name: "App",
  components: {
    product,
    cart,
    info
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
