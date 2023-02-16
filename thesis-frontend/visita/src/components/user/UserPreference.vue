<template>
  <section class="preference">
    <div class="preference__intro">
        <h1>Conosciamoci Meglio</h1>
        <p>Questa sezione ci aiuterà a proporti mete personalizzate</p>
    </div>
    <div class="preference__info">
        <div class="preference__info__personal">
            <form>
                <div class="preference__info__personal__formSection">
                    <label for="name">Nome</label>
                    <input name="name" type="text" placeholder="Nome">
                </div>
                <div class="preference__info__personal__formSection">
                    <label for="surname">Cognome</label>
                    <input name="surname" type="text" placeholder="Nome">
                </div>
                <div class="preference__info__personal__formSection">
                    <label for="surname">Vorresti portare in vacanza anche i tuoi figli?</label>
                    <input name="surname" type="checkbox" >
                </div>
                <div class="preference__info__personal__formSection">
                    <label for="surname">Vorresti portare in vacanza anche il tuo animale domestico?</label>
                    <input name="surname" type="checkbox" >
                </div>
                <div class="preference__info__personal__formSection">
                    <button>CONFERMA</button>
                </div>
                
            </form>
        </div>
        <div class="preference__info__travel">
            <div class="preference__info__travel__title">
                <h1>Seleziona i tuoi interessi</h1>
            </div>
            <div class="preference__info__travel__content">
                <div class="preference__info__travel__content__interest">
                    <button 
                    v-for="(act, index) in activity" 
                    :key="act.value"
                    @click="changeClass(index)"
                    :class="{ 'active': act.isActive }"
                    >{{act.option}}</button>
                </div>
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            activity: [
        {option:"Cultura",value:"cultural", isActive: false},
        {option:"Avventura",value:"adventure", isActive: false},
        {option:"Lusso",value:"Luxory", isActive: false},       
        {option:"Natura",value:"nature", isActive: false},
        {option:"Spiagge",value:"beach", isActive: false},
        {option:"Degustazione",value:"tasting", isActive: false},
        {option:"Benessere",value:"welness", isActive: false},
        {option:"Educazione",value:"education", isActive: false},
        {option:"Religioso",value:"religious", isActive: false},
      ],
        }
    },
    methods:{
        changeClass(index){
            this.activity[index].isActive = !this.activity[index].isActive;
        }
    }

}
</script>

<style lang="scss" scoped>
.preference{
    height: 100%;
    width: 100%;
    padding: 5%;
    &__intro{
        padding-left: 5%;
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: column;
        gap: 5%;
        >h1{
            font-size: 5rem;
        }
        >p{
            font-size: 2rem;
            font-weight: 200;
        }
    }
    &__info{
        width: 100%;
        height: 85%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &__personal{
            width: 30%;
            height: 90%;
            background: white;
            border-radius: 15px;
            >form{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 5%;
            }
            &__formSection{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                padding: 0 5%;
                > label{
                    padding-bottom: 2%;
                }
                > input[type="text"]{
                    width: 100%;
                    height: 4rem;
                    background: #efefef;
                    border: none;
                    border-radius: 10px;
                    outline: none;
                    padding-left: 2%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    &:hover, :focus{
                        border: 1px solid var(--color-light-blue);
                        background: none;
                    }
                   
                }
                 >button{
                    margin-top: 5%;
                        width: 100%;
                        height: 5rem;
                        border: 1px solid var(--color-light-blue);
                        border-radius:15px ;
                        background: none;
                        transition: all .3s ease-in-out;
                        cursor: pointer;
                        letter-spacing: 2px;
                        &:hover{
                            background: var(--color-light-blue);
                            border: none;
                            color: white;
                        }
                    }

            }
        }
        &__travel{
            background: white;
            width: 50%;
            height: 90%;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            &__title{
                display: flex;
                align-items: center;
                width: 100%;
                height: 20%;
                padding-left: 5%;
                >h1{
                    font-size: 3rem;
                }
            }
            &__content{
                display: flex;
                padding: 5%;
                height: 80%;
                width: 100%;
                
                &__interest{
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    gap: 5%;
                    height: 100%;
                    >button{
                        height: 5rem;
                        padding: 0 5%;
                        background: none;
                        cursor: pointer;
                        border: 1px solid var(--color-light-blue);
                        border-radius: 10px;
                    }

                }
            }
        }
    }
}
.active {
border:none !important;
background: var(--color-light-blue) !important;
color: white;

}
</style>