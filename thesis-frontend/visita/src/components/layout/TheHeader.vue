<template>
  <div class="header__wrap">
    <div class="header__wrap__logo" :style="{color: isTravelView}"><h1>Visita</h1></div>
    <nav class="header__wrap__menu">
      <p :style="{color: isTravelViewP}"
        v-for="opt in options"
        @click="changeRoute(opt.value)"
        :key="opt.value"
      >
        {{ opt.text }}
      </p>
      <div class="header__wrap__menu menu__access">
        <button @click="goToLogin"  class="menu__access__loginBtn"><span :style="{ color: iconColor }" class="material-symbols-outlined service__card__icon">person</span></button>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  //   name: 'TheHeader',
  data() {
    return {
      options: [
        {
          text: 'HOME',
          value: 'home',
        },
        {
          text: 'MARE',
          value: 'sea',
        },
        {
          text: 'MONTAGNA',
          value: 'mountain',
        },
        {
          text: 'CITTÁ',
          value: 'city',
        },
      ],
    };
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name, params: {} });
    },
    goToLogin(){
      this.$router.push({name: 'loginRegister',  params: {}})
    }
  },
  computed:{
    iconColor() {
      // if (this.$route.name === 'home') {
      //   return 'white'
      // }
      if (this.$route.name === 'sea' || this.$route.name === 'travel') {
        return '#50b7c5'
      }
      if (this.$route.name === 'city') {
        return '#2B2B2B'
      }
      else{
        return '#ff843d'
      }
    },
    isTravelView(){
      if(this.$route.name === 'travel'|| this.$route.name === 'profile'){
        return '#50b7c5'
      }
      else {
        return 'white'
      }
    },
    isTravelViewP(){
      if(this.$route.name === 'travel'|| this.$route.name === 'profile'){
        return '#2B2B2B'
      }
      else {
        return 'white'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header__wrap {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  &__logo {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 4.5rem;
    color: white;
    cursor: pointer;
    >h1{
      font-family: var(--font-logo);
      letter-spacing: 5px;
    }
  }
  &__menu {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;  
    letter-spacing: 2px;
    & p {
      font-size: 1.8rem;
      margin: 0;
      cursor: pointer;
      color: white;
      font-weight: 300;
       
    }
  }
}
.menu__access {
  display: flex;
  align-items: center;
  gap: 0;
  & button {
    font-size: 1.4rem;
    cursor: pointer;
  }
  &__loginBtn {
    border: none;
    outline: none;
    background: none;
    color: var(--color-orange);
    font-weight: 400;
    transition: all 0.5s ease;
    > span {
      font-size:3.5rem;
      transition: all .2s ease-in-out;
    }
     .material-symbols-outlined {
          font-variation-settings:
          'FILL' 0,
          'wght' 200,
          'GRAD' 0,
          'opsz' 48
        }
    &:hover{
      .material-symbols-outlined {
          font-variation-settings:
          'FILL' 1,
          'wght' 200,
          'GRAD' 0,
          'opsz' 48
        }
    }
  }
}
</style>
