<template>
  <div class="main-page">
    <FirstScreen />
    <MainpageNavbar />
    <UniveroScreen />
  </div>
</template>

<script>
import FirstScreen from './FirstScreen'
import UniveroScreen from './SecondScreen'
import MainpageNavbar from './Navbar'

export default {
  name: "MainPage",
  components: {
    FirstScreen,
    MainpageNavbar,
    UniveroScreen
  }
}
</script>

<style scoped>

</style>