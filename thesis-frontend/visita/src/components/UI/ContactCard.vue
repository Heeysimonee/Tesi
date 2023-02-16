<template>
<div class="card">
    <div class="card__header">
        <h1>Rimani in contatto</h1>
    </div>
    <div class="card__main">
        <div class="card__main__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat lacinia porttitor. </p>
        </div>
        <div class="card__main__input">
            <div class="card__main__input__wrapper">
                <input type="email" name="email" placeholder="E-mail">
                <span class="material-symbols-outlined service__card__icon">navigation</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
    height: 70%;
    width: 80%;
    background: rgba($color: #2b2b2b, $alpha: 0.65);
    border-radius: 20px;
    &__header{
        display: flex;
        height: 30%;
        display: flex;
        align-items: flex-end;
        padding-left: 5%;
        > h1{
            color: white;
        font-weight: 500;
        }
    }
    &__main{
        height: 70%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 5%;
        &__text{
            display: flex;
            align-items: center;
            height: 100%;
            width: 30%;
            >p{
                color: white;
                font-size: 2rem;
                width: 90%;
            }
        }
        &__input{
            width: 70%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &__wrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: white;
                width: 60%;
                height: 30%;
                padding: 0 2%;
                border-radius: 20px;
                > input{
                    width: 100%;
                    outline: none;
                    border:none;
                    font-size: 1.6rem;
                }
                > span{
                font-size: 3rem;
                color: var(--color-light-blue);
                rotate: 90deg;
                }
                .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 300,
  'GRAD' 0,
  'opsz' 48
}
            }
        }
    }
}
</style>