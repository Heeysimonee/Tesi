<template>
  <section class="travel">
    <div class="travel__firstRow">
      <div class="travel__firstRow__upcoming">
        <div class="travel__firstRow__upcoming__title">
          <h1>Prossimi Viaggi</h1>
        </div>
        <div class="travel__firstRow__upcoming__card">
          <div class="travel__firstRow__upcoming__card__img">
            <img src="https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain">
          </div>
          <div class="travel__firstRow__upcoming__card__content">
            <div class="travel__firstRow__upcoming__card__content__title">
              <h1>Viaggio da qualche parte</h1>
            </div>
            <div class="travel__firstRow__upcoming__card__content__info">
              <div class="travel__firstRow__upcoming__card__content__info__card"><span class="material-symbols-outlined service__card__icon">calendar_month</span> 10 Luglio - 12 Luglio</div>
              <div class="travel__firstRow__upcoming__card__content__info__card"><span class="material-symbols-outlined service__card__icon">hotel</span> Rifugio Forger</div>
            </div>
            <div class="travel__firstRow__upcoming__card__content__text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe officiis, molestiae dolorem ad laborum vitae voluptates. Nulla similique repellat eos atque quo, soluta tempora accusamus ipsum, hic aut ut voluptas?</p>
            </div>
            <div class="travel__firstRow__upcoming__card__content__button">
              <button>INFORMAZIONI</button>
            </div>
          </div>
        </div>
      </div>
      <!-- -->
      <div class="travel__firstRow__recommended">
        <div class="travel__firstRow__recommended__title">
        <h1>Ti consigliamo</h1>
      </div>
      <div class="travel__firstRow__recommended__card">
        <div class="travel__firstRow__recommended__card__img">
            <img src="https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="venice">
        </div>
        <div class="travel__firstRow__recommended__card__show">
          <h1>Venezia</h1>
          <button>DETTAGLI</button>
        </div>
      </div>
      </div>
      <!-- -->
      <div class="travel__firstRow__region">
        <div class="travel__firstRow__region__title">
          <h1>Le regioni più visitate</h1>
        </div>
        <div class="travel__firstRow__region__card-container">
          <div v-for="reg in topRegions" :key="reg.region" class="travel__firstRow__region__card">
            <div>
              <h2>{{reg.value}} °</h2>
              <h1>{{reg.region}}</h1>
            </div>
            <div>{{reg.travel}} Viaggi</div>
          </div>
        </div>
      </div>

    </div>
    <div class="travel__secondRow">
      <div class="travel__secondRow__basedOn">
        <div class="travel__secondRow__basedOn__title">
          <h1>Viaggi simili all'ultimo</h1>
        </div>
         <div class="travel__secondRow__basedOn__card-cnt">
           <div v-for="destination in basedOnLastTravel" :key="destination.name" class="travel__secondRow__basedOn__card-cnt__card">
            <div class="travel__secondRow__basedOn__card-cnt__card__img">
              <img :src="destination.img" :alt="destination.name">
            </div>
             <div class="travel__secondRow__basedOn__card-cnt__card__details">
              <h1>{{destination.name}}</h1> <p>{{destination.price}}</p>
            </div>
            <div class="travel__secondRow__basedOn__card-cnt__card__description">
            <p>{{destination.description}}</p>
            </div>
            <div class="travel__secondRow__basedOn__card-cnt__card__review">
              <p><span class="material-symbols-outlined service__card__icon">star</span>{{destination.rating}}/5</p> <p>{{destination.review}} recensioni</p>
            </div>
            <div class="travel__secondRow__basedOn__card-cnt__card__button">
              <button>DETTAGLI</button>
            </div>
           </div>
        </div>
      </div>
      <!-- -->
       <div class="travel__secondRow__latest">
        <div class="travel__secondRow__latest__title">
          <h1>Gli ultimi viaggi</h1>
        </div>
        <div class="travel__secondRow__latest__card-container">
          <div v-for="travel in latestTravel" :key="travel.region" class="travel__secondRow__latest__card">
            <div>
              <h1>{{travel.region}}</h1>
            </div>
            <div>{{travel.date}} Viaggi</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import TourCard from '../UI/TourCard.vue'
export default {
  // components: { TourCard },
  data(){
    return{
      topRegions: [
        {region: 'Toscana', travel: '5',value: '1'},
        {region: 'Sardegna', travel: '3',value: '2'},
        {region: 'Piemonte', travel: '3',value: '3'},
        {region: 'Lazio', travel: '2',value: '4'},
        {region: 'Calabria', travel: '1',value: '5'},
      ],
      basedOnLastTravel: [
        {img: 'https://images.pexels.com/photos/3754810/pexels-photo-3754810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name:'Sicilia', price: '1300,00 €', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', rating: '3', review: '10'},
        {img: 'https://images.pexels.com/photos/8913999/pexels-photo-8913999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name:'Puglia', price: '1300,00 €', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', rating: '4', review: '12'},
        {img: 'https://images.pexels.com/photos/3220731/pexels-photo-3220731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name:'Trentino', price: '1300,00 €', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', rating: '5', review: '19'},
      ],
      latestTravel: [
        {region: 'Toscana', date: '02 Luglio - 18 Luglio'},
        {region: 'Sardegna', date: '02 Luglio - 18 Luglio'},
        {region: 'Piemonte', date: '02 Luglio - 18 Luglio'},
        {region: 'Lazio', date: '02 Luglio - 18 Luglio'},
        {region: 'Calabria', date: '02 Luglio - 18 Luglio'},
      ],
    }
  },
  beforeCreate(){
    const user = this.$cookies.get('user');
    console.log('aaaaaaaaaaaaaaaaaaaaaaa', user)
  }
  

}
</script>

<style lang="scss" scoped>
.travel{
  padding: 0 5%;
  height: 100%;
  width: 100%;
  gap: 1%;
  display: flex;
  flex-direction: column;
  &__firstRow{
    display: flex;
    gap: 5%;
    height: 50%;
    &__upcoming{
      width: 50%;
      height: 100%;
      &__title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 15%;
        >h1{
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }
    
      &__card{
        display: flex;
          padding: 2%;
          background: white;
          height: 85%;
          width: 100%;
          border-radius: 15px;
          &__img{
            height: 100%;
            width: 40%;
            >img{
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 15px;
            }
          }
          &__content{
            height: 100%;
            width: 60%;
            padding:  0 2%;
            display: flex;
            flex-direction: column;
            &__title{
              display: flex;
              align-items: center;
              height: 20%;
              width: 100%;
              >h1{
                font-size: 2rem;
                font-weight: 500;
                word-spacing: 2px;
              }
            }
            &__info{
              gap: 2%;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 30%;
              &__card{
                gap: 5%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                background: #efefef;
                border-radius: 8px;
                height: 80%;
                font-size: 1.3rem;
                letter-spacing: 1px;
                >span{
                  padding-left: 5%;
                  font-size: 2rem;
                }
                &:nth-child(1){
                  width: 55%;
                }
                &:nth-child(2){
                  width: 45%;
                }
              }
            }
            &__text{
              height: 50%;
              padding: 2%;
              display: flex;
              align-items: center;
              font-size: 1.3rem;
              >p{
                padding: 0;
                margin: 0;
              }
            }
            &__button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;
            width: 100%;
              >button{
                border: 1px solid var(--color-light-blue);
                background: none;
                height: 80%;
                width: 70%;
                border-radius: 10px;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover{
                  background: var(--color-light-blue);
                  border: none;
                  color: white;
                }
              }
            }
          }
        }

    }
    &__recommended{
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      &__title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 15%;
        >h1{
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }
      &__card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
          background: white;
          height: 85%;
          width: 100%;
          border-radius: 15px;
          position: relative;
          &__img{
            height: 90%;
            width: 92%;
            >img{
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 15px;
            }
           
          }
          &__show{
            opacity: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5%;
            position: absolute;
            width: 92%;
            height: 90%;
            top: 50%;
            transform: translateY(-50%);
            transition: all .3s ease-in-out;
            >h1{
              color: white;
              font-weight: 200;
            }
            >button{
              height: 15%;
              width: 50%;
              border: 1px solid white;
              background: none;
              transition: all .5s ease-in-out;
              color: white;
              cursor: pointer;
              &:hover{
                border: none;
                background: white;
                color: #2b2b2b;
              }
            }
            &:hover{
              opacity: 1;
              background: rgba($color: #2b2b2b, $alpha: 0.4);
              border-radius: 15px;
            }
          }
      }
    }
    &__region{
      display: flex;
      flex-direction: column;
      width:30%;
      height: 100%;
      &__title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 15%;
        >h1{
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }
      &__card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 85%;
        width: 100%;
        background: white;
        border-radius:15px;
      }
      &__card{
        width: 90%;
        height: 17%;
        border-bottom: 1px solid #efefef;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 5%;
        >div{
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap:5%;
          > h2 {
          color: var(--color-light-blue);
          font-weight: 500;
          font-size: 2rem;
          
        }
        > h1{
          font-weight: 500;
          font-size: 2rem;
        }
        > p{
          padding: 0;
          margin: 0;
        }
        }
        &:nth-child(5){
          border: none;
        }
      }
    }
  }
  &__secondRow{
    height: 50%;
    display: flex;
    gap: 5%;
    &__basedOn{
      padding: 0 0 2% 0;
      width: 60%;
      height: 100%;
      &__title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 15%;
        >h1{
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }
      &__card-cnt{
        width: 100%;
        height: 85%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5%;
        &__card{
          background: white;
          height: 100%;
          width: 30%;
          border-radius: 15px;
          padding: 1%;
          &__img{
            height: 50%;
            width: 100%;
            >img{
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 15px;
            }
          }
          &__details{
            height: 10%;
            display: flex;
            widows: 100%;
            justify-content: space-between;
            align-items: center;
            >h1{
              font-size: 2rem;
              font-weight: 500;
            }
            > p{
              margin: 0;
              padding: 0;
              font-size: 1.6rem;
              font-weight: 500;
            }
          }
          &__description{
            display: flex;
            align-items: center;
            height: 15%;
            width: 100%;
            >p {
              margin: 0;
              padding: 0;
              font-size: 1.2rem;
            }
          }
          &__review{
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >p {
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              >span{
                height: 100%;
                color: var(--color-light-blue);
                font-size: 2rem;
              }
              .material-symbols-outlined {
          font-variation-settings:
          'FILL' 1,
          'wght' 200,
          'GRAD' 0,
          'opsz' 48
        }
            }
          }
          &__button{
            display: flex;
            width: 100%;
            height: 15%;
            justify-content: center;
            align-items: center;
            
            >button{
             border: 1px solid var(--color-light-blue);
                background: none;
                height: 70%;
                width: 80%;
                border-radius: 10px;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover{
                  background: var(--color-light-blue);
                  border: none;
                  color: white;
                }
            }
          }
        }
      }
    }
    &__latest{
      display: flex;
      flex-direction: column;
      width:40%;
      height: 100%;
      &__title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 15%;
        >h1{
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }
      &__card-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 80%;
        width: 100%;
      }
      &__card{
        width: 100%;
        height: 17%;
         background: white;
        border-radius:15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        >div{
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap:5%;
          > h2 {
          color: var(--color-light-blue);
          font-weight: 500;
          font-size: 2rem;
        }
        
        > h1{
          font-weight: 500;
          font-size: 2rem;
        }
        > p{
          padding: 0;
          margin: 0;
        }
        }
        >div:nth-child(1){
          padding-left: 5%;
        }
       
      }
    }
  }
}
</style>