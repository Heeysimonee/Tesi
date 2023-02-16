<template>
<section class="travel">
  <div class="travel__info">
    <div class="travel__info__image">
      <img src="https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    </div>
    <div class="travel__info__text">
      <div class="travel__info__text__title-price">
        <h1>Baunei, {{title}}</h1>
        <p>1000,00$</p>
      </div>
      <div class="travel__info__text__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat tincidunt augue. Cras gravida magna nibh, id pulvinar mi suscipit vel. Duis ultrices ut lorem eu ornare. Aenean ut mi at arcu blandit convallis vel a lacus. Cras tincidunt id tellus ultrices egestas. Suspendisse facilisis tempor sagittis. Donec ornare sodales sapien.
        </p>
      </div>
      <div class="travel__info__text__rating">
        <span class="material-symbols-outlined service__card__icon">star</span>
        <span class="material-symbols-outlined service__card__icon">star</span>
        <span class="material-symbols-outlined service__card__icon">star</span>
        <span class="material-symbols-outlined service__card__icon">star</span>
        <span class="material-symbols-outlined service__card__icon">star</span>
      </div>
      <div class="travel__info__text__basic">
          <div class="travel__info__text__basic__wrap">
            <span class="material-symbols-outlined service__card__icon">hotel</span>
            <p class="bold">Hotel</p>
            <p>Lorem Ipsum</p>
          </div>
        <div class="travel__info__text__basic__wrap">
          <span class="material-symbols-outlined service__card__icon">calendar_month</span>
          <p class="bold">Partenza</p>
          <p>22/07/2022</p>
        </div>
        <div class="travel__info__text__basic__wrap">
          <span class="material-symbols-outlined service__card__icon">calendar_month</span>
          <p class="bold">Ritorno</p>
          <p>1/08/2022</p>
        </div>
    </div>
    <div class="travel__info__text__button">
          <button>PRENOTA</button>
        </div>
    </div>
  </div>
  <div class="travel__package">
    <div class="travel__package__info">
      <h1>Pacchetto</h1>
      <div><p>Lorem Ipsum</p></div>
      <div><p>Lorem ipsum dolor sit ametLorem Ipsum</p></div>
      <div><p>Lorem ipsum dolor</p></div>
      <div><p>Etiam placerat consequat ipsum</p></div>
      <div><p>Integer rhoncus, quam porttitor congue sollicitudin </p></div>
      <div><p>Suspendisse ultricies pharetra orci, ac imperdiet erat ultricies ut</p></div>
      <div><p>Lorem ipsum dolor sit ametLorem Ipsum</p></div>
    </div>
    <div class="travel__package__img">
      <img src="../assets/italy.svg" alt="">
    </div>
  </div>
  <div class="travel__map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12221.038012253191!2d9.678926677368166!3d40.02498524045349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12de458559b57ddb%3A0x4cd548e8334ff693!2sCalette%20Sa%20Trempa%20&#39;e%20Su%20Lettu!5e0!3m2!1sit!2sit!4v1672354408216!5m2!1sit!2sit" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
</template>

<script>
export default {

props:{
        title:{
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
}
</script>

<style lang="scss" scoped>
.travel{
  width: 100%;
  height: 100%;
  padding: 15vh 0 0 0;
  display: flex;
  flex-direction: column;
  &__info{
    padding-right: 5%;
    height: 50vh;
    display: flex;
    &__image{
      width: 50%;
      height: 100%;
      border-radius: 0 15px 15px 0;
      >img {
        width: 100%;
        height: 100%;
        background-size: 100%;
        object-fit: cover;
        border-radius: 0 15px 15px 0;
      }
    }
    &__text{
      width: 50%;
      padding-left:5% ;
      &__title-price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2%;
        >h1{
          color: var(--color-light-blue);
          font-weight: 600;
          letter-spacing: 2px;
        }
        >p{
          margin: 0;
          padding: 0;
          font-size: 3rem;
          font-weight: 300;
          letter-spacing: 2px;
        }
      }
      &__description{
        padding-right: 20%;
        >p{
          font-size: 1.8rem;
          font-weight: 200;
          text-align: justify;
        }
      }
      &__rating{
        display: flex;
        gap: 2%;
        padding: 0 0 2% 0;
        >span{
          font-size: 3.5rem;
          color: var(--color-light-blue);
        }
        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 1,
          'wght' 300,
          'GRAD' 0,
          'opsz' 48
        }
      }
      &__basic{
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 2%;
        &__wrap{
          display: flex;
          align-items: center;
          gap: 2px;
          >p{
          font-size: 2rem;
          padding: 0;
          margin: 0;
          font-weight: 200;
        }
        >span{
          color: var(--color-light-blue);
          font-size: 3rem;
        }
        }
      }
      &__button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        >button{
          border: 1px solid var(--color-light-blue);
          background: none;
          padding: 1%;
          width: 50%;
          border-radius:15px ;
          letter-spacing: 2px;
          transition: all .3s ease-in-out;
          cursor: pointer;
          &:hover{
            background: var(--color-light-blue);
            border: none;
            color: white;
          }
        }
        
      }
    }
    .bold{
      font-weight: 400;
      padding-right: 2%;
    }
  }
  &__package{

    padding: 0 5%;
    height: 50vh;
    display: flex;
    &__info{
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2%;
      
      >div {
        display: flex;
        position: relative;
        padding-left:3% ;
        >p{
          margin: 0;
          padding: 0;
          font-size: 1.8rem;
          font-weight: 200;

        }
        > p::before{
        margin-left: 2.5%;
        content:'';
        height: 8px;
        width: 8px;
        background: var(--color-light-blue);
        position: absolute;
        top: 50%;
        left:-10px;
        transform: translateY(-50%);
        border-radius: 50%;
      }
      }
    }
    &__img{
      flex: 1;
      padding: 5% 2%;
      display: flex;
      justify-content: flex-end;
      >img{
        width: 100%;
        height: 100%;
        }
    }
  }
  &__map{
    height: 50vh;
    width: 100%;
    >iframe{
      width: 100%;
      height: 100%;
    }
  }
}
</style>