<template>
  <div class="macbook-container">
    <img class="w-100" src="@/assets/pics/MacbookWidget/MacBook.png" alt="macbook">
    <img src="@/assets/pics/MacbookWidget/Logo.png" alt="logo" class="logo">
    <div class="scrollable-image">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "MacbookPagePreview",
  props:{
    img: String
  },
  // computed: {
  //   getImageSrc(){
  //     return require(this.img);
  //   }
  // }
}
</script>

<style scoped lang="scss">
  .macbook-container{
    position: relative;
    width: fit-content;
  }
  .logo{
    position: absolute;
    bottom: 7%;
    left: 46%;
  }
  .w-100{
    width: 100%;
  }
  .scrollable-image{
    position: absolute;
    top: 2%;
    border-radius: 5px;
    left: 44%;
    margin-left: -35%;
    width: 82%;
    height: 89%;
    overflow: auto;

    img{
      width: 100%;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: none;

    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(136, 136, 136, 0.46);
      border: 5px solid transparent;
    }
  }
</style>