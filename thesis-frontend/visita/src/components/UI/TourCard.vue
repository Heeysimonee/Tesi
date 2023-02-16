<template>
   <div class="card">
     <h1 class="card__title">{{title}}</h1>
          
    <div class="card__img">
        <img class="img" :src="img" :alt="title">
    </div>
    <div  class="card__darker"></div> 
    <div class="card__info">
        <p class="card__info__price">{{price}}</p>
        <span class="material-symbols-outlined service__card__icon">{{icon}}</span>
    </div>
   </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String
        },
        icon:{
            type: String
        },
        img:{
            type: String
        },
        price:{
            type: String
        }
    },
    data(){
        return{

        }
    },
}
</script>

<style lang="scss" scoped>
.card{
    font-family: var(--font-main);
    display: flex;
    height: 50%;
    width: 25%;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover .card__title{
        color: transparent;
    }
    &:hover .card__darker{
        opacity: 0;
    }
    &:hover .card__info__price{
        font-weight:500 ;
        color: #efefef;
        
    }
    &__title{
        width: 95%;
        text-align: center;
        left: 0;
        position: absolute;
        color: white;
        font-weight: 200;
        font-size: 3.5rem;
        z-index: 999;
        transition: all 1s ease-in-out;
        letter-spacing: 1px;
        
      }
    &__darker{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2b2b2b;
        opacity: 0.6;
        border-radius: 15px;
        transition: all .5s ease-in-out;
      }
    &__img{
      position: relative;
      height: 100%;
      width: 100%;
      pointer-events: none;
      
    }
    &__info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 5%;
        width: 100%;
        height: 20%;
        padding-right:5%;
         > span {
            color: white;
            rotate: 90deg;
            border: 1px solid white;
            border-radius:50%;
            padding: 2%;
            font-size: 1.8rem;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover{
              scale: 1.2;
              transform-origin: center;
                font-size: 2rem;
                background: rgba($color: #ffffff, $alpha: 0.3);
                color: var(--color-light-blue);
                &.material-symbols-outlined {
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 300,
                    'GRAD' 0,
                    'opsz' 48
                }
            }
        }
        &__price{
            padding: 0;
            margin: 0;
            color: white;
            font-size: 1.8rem;
            font-weight: 300;
            letter-spacing: 2px;
            padding-left: 5%;
            transition: all .5s ease-in-out;
        }
    }
  }
 /*img tag*/
 .img{
 width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 
 }

    </style>