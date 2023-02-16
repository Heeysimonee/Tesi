<template>
<section class="profile">
    <div class="profile__menu" @mouseover="expandMenu" @mouseleave="shrinkMenu">
        <div @click="goTo(i.name)" :style="{justifyContent: justify}" v-for="i in menu" :key="i.name" class="profile__menu__sp">
            <span class="material-symbols-outlined service__card__icon">{{i.icon}}</span>
            <transition name="fade">
                <h2 v-if="menuIsExpanded">{{i.name}}</h2>
            </transition>
            
        </div>
    </div>
    <div class="profile__content">
        <component :is="tag">

        </component>
    </div>
</section>
</template>

<script>
import UserPreference from '@/components/user/UserPreference.vue'
import UserTravel from '@/components/user/UserTravel.vue'
export default {
    components:{UserPreference, UserTravel},
    data(){
        return{
            menu: [{icon: 'home', name:'Home'},{icon: 'manage_accounts', name:'Preferenze'},{icon: 'backpack', name:'Viaggi'}],
            menuIsExpanded: false,
            tag: 'user-preference'
        }
    },
    methods:{
        expandMenu(){
            this.menuIsExpanded = true;
        },
        shrinkMenu(){
            this.menuIsExpanded = false;
        },
        goTo(name){
            if(name === 'Home'){
                this.$router.push({name:'home'})
            }
            if(name === 'Preferenze'){
                this.tag = 'user-preference'
            }
            if(name === 'Viaggi'){
                this.tag = 'user-travel'
            }
        }
    },
    computed:{
        justify(){
            if(this.menuIsExpanded === true){
                return 'flex-start'
            } 
            else{
                return 'center'
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.profile{
    height: 100vh;
    width: 100%;
    display: flex;
    &__menu{
        width: 5%;
        height: 100%;
        transition: all .6s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10%;       
        &:hover{
            width: 10%;
            padding-left: 2%;
        }
        &:hover + .profile__content{
            width: 90%;
        }
        &__sp{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2%;
            width: 100%;
            cursor: pointer;
            >span{
            color: var(--color-light-blue);
            font-size: 3rem;
            cursor: pointer;
            transition: all .3s ease-in-out;
             &.material-symbols-outlined {
                    font-variation-settings:
                    'FILL' 0,
                    'wght' 300,
                    'GRAD' 0,
                    'opsz' 48
                }
            }
            &:hover{
                 > .material-symbols-outlined {
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 100,
                    'GRAD' 0,
                    'opsz' 48
                }
            }
            >h2{
                margin: 0;
                padding: 0;
                font-size: 1.8rem;
            }
        }
        
    }
    &__content{
        padding-top: 10vh;
        width: 95%;
        background: #efefef;
        transition: all .5s ease-in-out;
        height: 100%;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to {
    transition: all .5s;
    opacity: 0;
  }

</style>