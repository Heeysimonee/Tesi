<template>
  <div class="footer__wrap">
    <div class="footer__wrap__logo">
      <h1>Visita</h1>
    </div>
    <div class="footer__wrap__copyright">@2022</div>
    <div class="footer__wrap__social">
      <div
        class="footer__wrap__social__item"
        v-for="s in socials"
        :key="s.link"
      >
        <img :src="s.icon" alt="">
      </div>
    </div>
    <div class="footer__wrap__menu">
      <div v-for="m in menu" :key="m.name" class="footer__wrap__menu__items">
        {{m.name}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      socials: [
        {name: 'Facebook',
          icon: '../../assets/fb.svg',
        },
        {name: 'Instagram',
          icon: '../../assets/ig.svg',
        },
        {name: 'YouTube',
          icon: '../../assets/yt.svg',
        },
        {name: 'Twitter',
          icon: '../../assets/tw.svg',
        },
      ],
      menu: [
        {
          name: 'CHI SIAMO',
        },
         {
          name: 'CONTATTI',
        },
         {
          name: 'TERMINI DI SERVIZIO',
        },
         {
          name: 'PRIVACY',
        },
        
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.footer__wrap {
  height: 10vh;
  width: 100%;
  background: var(--color-light-blue);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  padding: 0 5%;
  gap: 5%;
  &__logo {
    display: flex;
    align-items: center;
    padding: 0 2%;
    height: 100%;
    > h1{
      font-family: var(--font-logo);
      letter-spacing: 5px;
    }
  }
  &__copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;
  }
  &__social{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 30%;
    &__item{
      width: 35%;
      height: 35%;
      >  img{
      background: var(--color-light-blue);
      height: 100%;
      width: 100%;
      border-radius:50% ;
    }
    }
  }
  &__menu{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
