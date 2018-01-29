<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <ul>
      <li>home</li>
      <li>pd</li>
      <li>service</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
