<template>
  <nav>
    <div class="work-period">
      <p class="white-color">{{working_period}}</p>
    </div>
    <ul class="nav-links-list">
      <li
          class="nav-link"
          v-for="(project, index) in projects"
          :class="{ 'white-color':project.active, 'active':project.active }"
          :key="index">
        {{ project.name }}
      </li>
    </ul>
    <div class="social-networks">
      <div class="social-networks-icons">
        <a
            v-for="(network, index) in social_networks"
            target="_blank"
            :key="index"
            class = "social-network-icon"
            :href="network.link">
          <img :src="network.path" :alt="network.alternative" :title="network.alternative">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainpageNavbar",
  data() {
    return{
      working_period: 'Апрель 2021 - Сейчас',
      projects: [
        {
          name: 'Univero',
          link: '#univero',
          active: true
        },
        {
          name: 'UniUp',
          link: '#uniup',
          active: false
        },
        {
          name: 'TypiPay',
          link: '#typipay',
          active: false
        },
        {
          name: 'AnimaKuro',
          link: '#animakuro',
          active: false
        },
      ],
      social_networks: [
        {
          link: 'https://wa.me/77006507050?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B5%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.',
          path: require('@/assets/icons/WhatsApp.svg'),
          alternative: 'Whatsapp'
        },
        {
          link: 'https://t.me/Dawakin',
          path: require('@/assets/icons/Telegram.svg'),
          alternative: 'Telegram'
        },
        {
          link: 'https://www.linkedin.com/in/yersayin-kenesbekov-30046a210/',
          path: require('@/assets/icons/LinkedIn.svg'),
          alternative: 'LinkedIn'
        },
      ]
  }
  }
}
</script>

<style scoped lang="scss">
  nav{
    font-family: SourceSansPro-Regular, sans-serif;
    background: #051D27;
    height: 74px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    opacity: 0.99;
  }
  .work-period, .social-networks{
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-network-icon {
    padding: 8px;
  }
  .nav-links-list, .work-period, .social-networks{
    width: 33%;
    height: 100%;
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  .nav-link{
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.005em;
    text-align: center;
    padding: 0 23px 0 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .white-color{
    color: #FFFFFF;
  }
  .active{
    border-bottom: 2px solid #E12D33;
  }
</style>