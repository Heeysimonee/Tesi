<template>
   <div class="card" @mouseenter="playVideo($event)" @mouseleave="stopVideo($event)">
     <h1 class="card__title">{{title}}</h1>
          
    <div class="card__video">
        <video muted ref="videoElement" class="video"  :src="video" ></video>
    </div>
    <div  class="card__darker"></div> 
    <div class="card__info">
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
        video:{
            type: String
        }
    },
    data(){
        return{

        }
    },
   methods: {
    playVideo() {
      this.videoElement.play();
      console.log(this.video)
    },
    stopVideo() {
      setTimeout(()=>{
        this.videoElement.pause();
      this.videoElement.currentTime = 0;
      
      }, 500)
      
    }
  },
  computed: {
    videoElement: {
      get() {
        return this.$refs.videoElement;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
    font-family: var(--font-main);
    display: flex;
    height: 80%;
    width: 18%;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover .card__title{
        color: transparent;
    }
    &:hover .card__darker{
        opacity: 0;
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
        opacity: 0.4;
        border-radius: 15px;
        transition: all .5s ease-in-out;
      }
   
    &__video{
      position: relative;
      height: 100%;
      pointer-events: none;
      
    }
    &__info{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        bottom: 5%;
        width: 100%;
        height: 10%;
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
    }
  }
 /*video tag*/
 .video{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 
 }

    </style>