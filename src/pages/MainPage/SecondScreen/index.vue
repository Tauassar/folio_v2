<template>
  <div class="univero-screen">
    <div class="main-description">
      <div class="content-container">
        <div class="left-part">
          <h1 class="title">
            Univero.cc
          </h1>
          <p class="left-part-content content">
            Univero это уникальная платформа для подачи в зарубежные университеты,
            которая не имеет аналогов в Центральной Азии.
            Помимо самого сайта <u>Univero.cc</u>, есть кроссплатформенное приложение.
          </p>
        </div>
        <div class="right-part">
          <p class="right-part-role content">
            Роль
          </p>
          <p class="right-part-position content">
            <strong>UI/UX designer</strong>
          </p>
          <p class="right-part-content content">
            Был единственным дизайнером. Занимался исследованиями, концепцией, визуалом и тестами.
          </p>
        </div>
      </div>
    </div>
    <div class="part-2">
      <div class="flex-container">
        <div class="left-side">
          <img class="part-2-left-side-image" src="@/assets/pics/MainPage/2.png" alt="univero_page">
        </div>
        <div class="right-side part-2__right-side_styling">
          <div class="right-side__upper-part">
            <h1 class="part-2__title">
              Создать booking для абитуриентов
            </h1>
            <p class="part-2__content">
              Целью платформы является автоматизация процесса поступления в любой университет.
              Для этого мы с аналитиком провели исследования,
              которое послужило отправной точкой для дизайна и всей дальнейшей разработки.
            </p>
            <a href="" class="part-2__about-project">
              <span>Подробнее о проекте</span>
              <img class="arrow-right" src="@/assets/icons/Arrow_right.svg" />
            </a>
          </div>
          <div class="right-side__lower-part">
            <img class="part-2-right-side-image" src="@/assets/pics/MainPage/3.png" alt="">
          </div>
        </div>
      </div>
      <div class="flex-container right-choice">
        <div class="left-side centered-flex">
          <div class="part-2__lower-content-container">
            <h1 class="part-2__title">
              Правильный выбор
            </h1>
            <p class="part-2__content">
              Любая подача начинается с выбора ВУЗа.
              Для его облегчения мы с командой собрали ту информацию на которую обращают внимание абитуриенты
              при подаче и расположии на странице от более важной (приоритетной) к реже просматриваемой для того,
              чтобы абитуриент мог быстрее сделать выбор.
            </p>
          </div>
        </div>
        <div class="right-side" />
      </div>
      <div class="centered-flex">
        <MacbookPagePreview :img="require('@/assets/pics/MainPage/4.png')"/>
      </div>
      <div class="flex-container guide-on-universities">
        <div class="left-side centered-flex left-side__guide-on-universities">
          <div class="container-530 flex-end text-left">
            <h1 class="part-2__title">
              Карманный гид по университетам
            </h1>
            <p class="part-2__content">
              Для удобного отслеживания подачи было разработано приложение,
              которое скоро появится в App Store и Play Market.
            </p>
            <a href="" class="part-2__about-project">
              <span>Подробнее о проекте</span>
              <img class="arrow-right" src="@/assets/icons/Arrow_right.svg" />
            </a>
            <div class="univero-mobile-interfaces">
              <img src="@/assets/pics/MainPage/6.png" alt="Mobile-interface-1">
              <img src="@/assets/pics/MainPage/7.png" alt="Mobile-interface-2">
              <img src="@/assets/pics/MainPage/8.png" alt="Mobile-interface-3">
              <img src="@/assets/pics/MainPage/9.png" alt="Mobile-interface-4">
            </div>
          </div>
        </div>
        <div class="right-side">
          <img class="guide-on-universities__iphone" src="@/assets/pics/MainPage/5.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MacbookPagePreview from '@/components/MacbookPagePreview'
export default {
  name: "UniveroScreen",
  components: {
    MacbookPagePreview
  }
}
</script>

<style scoped lang="scss">
  .univero-screen{
    font-family: SourceSansPro-Regular;
  }
  .main-description{
    color: #FFFFFF;
    background-image: url("@/assets/pics/MainPage/1.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    height: 100vh;
  }
  .content-container{
    margin: 0 0 150px 0;
    display: flex;
    justify-content: space-around;
    text-align: left;
    width: 100%;
    .left-part{
      .title{
        font-family: Lora;
        font-weight: 700;
        font-size: 64px;
        line-height: 82px;
        margin: 0 0 8px 0;
      }
      .left-part-content{
        margin: 0;
      }
      max-width: 480px;
    }
    .right-part{
      max-width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .right-part-role{
        font-size: 16px;
      }
      .right-part-position{
        margin: 8px 0;
      }
    }
  }
  .content{
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.005em;
    margin: 0;
  }
  .flex-container {
    display: flex;
  }
  .left-side, .right-side{
    width: 50%;
  }

  .left-side{
    .part-2-left-side-image{
      margin-right: -100px;
      margin-top: -130px;
    }
  }

  .part-2__about-project{
    text-decoration: none;
    color: #0F2732;
    cursor: pointer;
  }

  .part-2__right-side_styling{
    padding: 130px 0 0 130px;
    position: relative;

    .right-side__upper-part{
      text-align: left;
      max-width: 475px;

    }

    .arrow-right{
      margin-left: 8px;
    }

    .part-2-right-side-image{
      position: absolute;
      bottom: 200px;
      left: -100px;
    }
  }

  .part-2__title{
    font-family: 'Lora';
    margin: 0 0 12px 0;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    color: #0F2732;
  }

  .part-2__content{
    margin: 0 0 20px 0;
    font-family: SourceSansPro-Regular, sans-serif;
    font-size: 16px;
    line-height: 21px;
    color: #0F2732;
    opacity: 0.6;
  }

  .right-choice{
    margin: 100px 0 40px 0;
  }

  .part-2__lower-content-container{
    flex-direction: column;
    max-width: 475px;
  }

  .centered-flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .guide-on-universities__iphone{
    width: 81%;
  }

  .container-530{
    max-width: 530px;
  }

  .guide-on-universities{
    margin-top: 123px;
  }

  .left-side__guide-on-universities{
    padding-bottom: 57px;
  }

  .flex-end{
    align-self: flex-end;
  }

  .text-left{
    text-align: left;
  }
  .univero-mobile-interfaces{
    margin-top: 40px;
  }
</style>