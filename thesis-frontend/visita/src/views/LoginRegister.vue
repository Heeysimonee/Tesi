<template>
  <section class="wrapper">
    <div class="wrapper__img"></div>
    <div class="wrapper__form">
      <div class="wrapper__form__menu">
        <div class="wrapper__form__menu__logo">
          <h1>Visita</h1>
        </div>
        <span @click="changeRoute" class="material-symbols-outlined">arrow_back_ios_new</span>
      </div>
        <component @changeTag="changeTag" :is="tag"></component>
    </div>
  </section>
</template>

<script>
import TheLogin from '@/components/layout/TheLogin.vue'
import TheRegistration from '@/components/layout/TheRegistration.vue'
export default {
components:{TheLogin, TheRegistration},
name: 'LoginRegister',
data(){
  return{
    tag: 'the-login',
  }
},
methods:{
  changeTag(newtag){
    this.tag = newtag;
    console.log(newtag)
  },
  changeRoute(){
    this.$router.push({name: 'home',  params: {}})
  }
}
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  width: 100%;
  display: flex;
  &__img{
    height: 100%;
    width: 50%;
    background-image: url('../assets/it-login.jpg');
    object-fit: cover;
    background-size:cover ;
  }
  &__form{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    &__menu{
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0  10%;
      position: relative;
      &__logo{
        >h1{
          color: var(--color-light-blue);
          font-family: var(--font-logo);
        }
      }
      > span{
        font-size: 4rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover{
          color: var(--color-light-blue);
          filter: drop-shadow(-10px 0 0 var(--color-light-blue));
        }
      }
      .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 100,
        'GRAD' 0,
        'opsz' 48
      }
     
    }
  }
}
</style>