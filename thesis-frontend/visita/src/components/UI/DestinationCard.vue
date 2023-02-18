<template>
   <div class="card">
    <div class="card__img">
        <h1 class="card__title">{{title}}</h1>
        <div class="more">
            <h1>{{title}}</h1>
            <div class="more__buy">
                <button @click="goToDetails(this.travel)" class="more__buy__btn"> <span class="material-symbols-outlined service__card__icon">shopping_bag</span>DETTAGLI</button>
            </div>
        </div>
        <img class="img" :src="img" :alt="title">
    
    <div  class="card__darker"></div> 
    <div class="card__info">
        <div class="card__info__duration">
            <span class="material-symbols-outlined service__card__icon">{{icon}}</span>
            <p>{{duration}}</p>
        </div>
        <p class="card__info__price">{{price.toFixed(2)}}€</p>
        
    </div>
    </div>
   </div>
</template>

<script>
export default {
    provide:['title'],
    props:{
        title:{
            type: String
        },
        description: {
            type: String
        },
        region: {
            type: String
        },
        stars:{
            type: Number
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
            type: Number
        },
        travel: {
            type: Object
        }
    },
    data(){
        return{
            showMore: false,
        }
    },
   methods: {

    goToDetails(travel){
        console.log(this.title)
        this.$store.state.travel = travel
        this.$router.push({name: 'travel',   props: true})    
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.card{
    font-family: var(--font-main);
    display: flex;
    height: 300px;
    width: 400px;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 2% 0;
    cursor: pointer;
    
    &:hover .card__title{
        display: none;
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
    &:hover .more{
        display: flex;
        opacity:1
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
        transition: all .2s ease-in-out;
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
      z-index: 800;
      object-fit: cover;
      height: 100%;
      width: 100%;
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
  .more{
    display: none;
    opacity: 0;
        z-index:998;
        width: 100%;
        height: 50%;
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
            font-size: 3rem;
            font-weight: 200;
        }
        .material-symbols-outlined {
                font-variation-settings:
                'FILL' 0,
                'wght' 200,
                'GRAD' 0,
                'opsz' 48
            }
            &__buy{
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
                >button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2%;
                    color: white;transition: .5s all ease-in-out;
                    margin: 0;
                    font-size: 1.8rem;
                    letter-spacing: 2px;
                    font-weight: 300;
                    border: 1px solid white;
                    background: none;
                    width: 40%;
                    height: 50%;
                    cursor: pointer;
                    transition: .3s all ease-in-out;
                    &:hover{
                        background: white;
                        color: #2b2b2b;
                    }
                    &:hover > span {
                        color: #2b2b2b;
                    }
                    > span {
                    color: white;
                    font-size: 2.2rem;
                    transition: .3s all ease-in-out;
                }
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