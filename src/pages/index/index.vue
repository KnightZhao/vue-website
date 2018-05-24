<template>
  <div id="app">
    <!-- <img src="../../assets/logo.png">
    <router-view/> -->
    <HomeSwiper></HomeSwiper>
    <HomeSecond></HomeSecond>
    <div v-lazy-container="{ selector: 'jpg,png' }">
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
      <HomeImages></HomeImages>
    </div>
  </div>
</template>

<script>
import HomeSwiper from 'components/HomeSwiper.vue'
import HomeSecond from 'components/HomeSecond.vue'
import HomeImages from 'components/HomeImages.vue'
export default {
  name: 'App',
  components: { HomeSwiper, HomeSecond, HomeImages }
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
