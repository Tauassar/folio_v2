<template>
  <div class="main-page">
    <FirstScreen />
    <MainpageNavbar />
  </div>
</template>

<script>
import FirstScreen from './FirstScreen'
import MainpageNavbar from './Navbar'

export default {
  name: "MainPage",
  components: {
    FirstScreen,
    MainpageNavbar
  }
}
</script>

<style scoped>

</style>