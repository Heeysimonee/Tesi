<template>
  <section class="main">
    <div class="main__bg"></div>
    <div class="main__quote">
      <p>Esplora le città piú famose</p>
    </div>
  </section>
  <section class="filter">
    <h1>Destinazioni</h1>
    <p>Scegli la meta dei tuoi sogni</p>
    <div class="filter__container">
      <div :class="btn.style" @click="toggleButtonStyle($event, index)" v-for="(btn, index) in filter" :key="btn.value">
        {{btn.name}}
      </div>
    </div>
  </section>
  {{structures.length}}
  <section class="travel">
  <destination-card 
    v-for="card in structures" 
    :key="card.name"
    :title="card.name"
    :icon="card.icon" 
    :img="card.image"
    :duration="card.duration"
    :price="card.price"></destination-card>
  </section>
    
</template>

<script>
import DestinationCard from '@/components/UI/DestinationCard.vue'
import route from "@/api/index";

export default {
  components:{DestinationCard},
  name: 'HomeView',
    async beforeCreate(){

    const structures = await route.getStructureBasedOnVacation({"type": "city"});
    if(structures.status === 200){
      console.log(structures.data.data.result)
      this.structures = structures.data.data.result;
    }
  
  },
  data(){
    return{
      structures: {}, 
      buttonClasses: 'filter__container__btn',
      filter:[
        {name: 'Tutti', value:'all', style:'filter__container__btn-active'},
        {name: 'Soggiorno', value: 'rest', style:'filter__container__btn'},
        {name: 'Prezzo', value:'price',style:'filter__container__btn'},
        {name: 'Consigliati', value:'preferred', style:'filter__container__btn'}
      ],
      // travelCard:[
      //   {title: 'Milano 1', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 2', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 3', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 4', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 5', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 6', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 7', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 8', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      //   {title: 'Milano 9', icon: 'calendar_month', img: 'https://images.pexels.com/photos/243077/pexels-photo-243077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', duration: '10 Giorni', price: '1000,00€'},
      // ],
    }
  },
  methods:{
    toggleButtonStyle(e, index){
      this.filter.forEach(item =>{
        item.style = 'filter__container__btn'
      })
      if(this.filter[index].style === 'filter__container__btn'){
        this.filter[index].style = 'filter__container__btn-active';
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main{
  height: 100vh;
  &__bg{
    height: 80%;
    background-size: 100%;
    object-fit: cover;
    background-position: 20% 40%;
    background-image: url('../assets/city-wp.jpg');
  }
  &__quote{
    height: 20%;
    background: #CDCACA;
    display: flex;
    align-items: center;
    justify-content: center;
    > p{
      margin: 0;
      padding: 0;
      color: white;
      font-size: 4rem;
      font-weight:400;
    }
  }
}
.filter{
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  padding-top:5%;
  gap: 2%;
  >h1{
    font-size: 5rem;
  }
  > p{
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
  &__container{
    width: 50%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    &__btn{
      border-bottom:2px solid #bebebe;
      width: 15%;
      cursor: pointer;
      transition: all .5s ease-in-out;
    }
    &__btn-active{
      border-bottom:2px solid #2B2B2B;
      width: 15%;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }
  }
}
.travel{
  height: 100%;
  padding: 0 5% 5% 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: flex-start;
  justify-content: center;
}
</style>