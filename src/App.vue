<template>
  <div>
    <router-link to="/home">HomePage</router-link>
    <router-link to="/about">AboutPage</router-link>
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
