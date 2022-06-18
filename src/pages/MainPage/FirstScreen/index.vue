<template>
  <div class="first-screen">
    <div class="text-block">
      <p class="name">Ерсайын Кенесбеков</p>
      <h1 class="position">UX/UI дизайнер</h1>
      <p class="content">Помогаю стартапам, агенствам и фрилансерам. Основным инструментом явлляется Figma, но иногда заглядываю в Photoshop и Illustrator.
        Буду рад помочь вывести ваш проект на новый уровень!</p>
      <div class="hashtag">
        <ul class="hashtag-menu">
          <li class="hashtag-link hashtag">startup</li>
          <li class="hashtag-link hashtag">agency</li>
          <li class="hashtag-link hashtag">figma</li>
          <li class="hashtag-link hashtag">freelance</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstScreen"
}
</script>

<style scoped lang="scss">
  .first-screen{
    background: #0F2732;
    height: 100vh;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SourceSansPro-Regular,sans-serif;
  }
  .text-block {
    max-width: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
  .name, .content{
    font-weight: 400;
    line-height: 20px;
    margin: 0;
  }
  .position{
    font-family: SourceSansPro-Bold,sans-serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    margin: 6px;
  }
  .hashtag-menu{
    list-style-type: none;
    padding: 0;
    color: #3A8FF2;
    margin: 18px 0 18px 0;
    display: flex;
    justify-content: space-between;
    max-width: 370px;
    min-width: 300px;
    font-size: 18px;
    .hashtag::before{
      content: "#";
    }
  }
</style>