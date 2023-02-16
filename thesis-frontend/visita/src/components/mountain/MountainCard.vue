<template>
   <div class="card" @mouseover="seeShowMore" @mouseleave="hideShowMore">
    <div class="card__img">
        <h1 class="card__title">{{title}}</h1>
        <div class="more" v-if="showMore">
            <h1>{{title}}</h1>
            <p>DETTAGLI</p>
        </div>
        <img class="img" :src="img" :alt="title">
    
    <div  class="card__darker"></div> 
    <div class="card__info">
        <div class="card__info__duration">
            <span class="material-symbols-outlined service__card__icon">{{icon}}</span>
            <p>{{duration}}</p>
        </div>
        <p class="card__info__price">{{price}}</p>
        
    </div>
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
        duration:{
            type: String
        },
        price:{
            type: String
        }
    },
    data(){
        return{
            showMore: false,
        }
    },
   methods: {
    seeShowMore(){
            setTimeout(()=>{
                this.showMore = true
            }, 800)
    },
    hideShowMore(){
            setTimeout(()=>{
                this.showMore = false
            }, 200)
    },
  },
  computed: {
  }
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
    margin: 2% 0;
    cursor: pointer;
    
    &:hover .card__title{
        color: transparent;
    }
    &:hover .card__darker{
        opacity: 0;
    }
    &:hover .card__info__duration{
        margin-left: 5%;
        
        >span {
            margin-left: 30%;
            
        }
    }
    &:hover .card__info__price{
        display: none;        
    }
    &__title{
        width: 100%;
        text-align: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
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
        height: 98%;
        background-color: #2b2b2b;
        opacity: 0.6;
        border-radius: 15px;
        transition: all .5s ease-in-out;
      }
    &__img{
      position: relative;
      pointer-events: none;
      .more{
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-in-out;
        >h1{
            color: white;
            font-size: 5rem;
            font-weight: 200;
        }
        >p {
            color: white;
            margin: 0;
            padding: 3% 0 0 0;
            font-size: 2.2rem;
            letter-spacing: 2px;
            font-weight: 300;
        }
      }
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
        &__duration{
            width: 100%;
            display: flex;
            align-items: center;
            transition: all .5s ease-in-out;
            > span {
            color: white;
            padding: 2%;
            font-size: 3rem;
            cursor: pointer;
            transition: all .5s ease-in-out .2s;
            }
            >p {
                color: white;
                margin: 0;
                padding: 0;
                font-size: 1.8rem;
                font-weight: 300;
                letter-spacing: 2px;
            }

            .material-symbols-outlined {
                font-variation-settings:
                'FILL' 0,
                'wght' 200,
                'GRAD' 0,
                'opsz' 48
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