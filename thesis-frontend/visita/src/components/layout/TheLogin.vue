<template>
  <section class="login">
    <div class="login__sub">
        <h1>Benvenuto</h1>
        <p>Visita i migliori luoghi turistici d'Italia</p>
    </div>
    <div class="login__form">
        <form >
            <div class="login__form__input">
                <label for="Email">Email</label>
                <input type="email" name="email" placeholder="E-mail" v-model="email">
            </div>
            <div class="login__form__input">
                <label for="Password">Password</label>
                <input :type="inputType" name="password" placeholder="Password" v-model="pwd">
                <div class="login__form__input__pwd-icon">
                    <span @click="modifyPswVisibility" class="material-symbols-outlined">{{pswIcon}}</span>
                </div>
            </div>
            <div class="login__form__check">
                <input type="checkbox" v-model="checked"  @change="onChange"/> Acconsento ai termini e alle condizioni
            </div>
            <div class="login__form__social">
                <div class="login__form__social__title">
                    <div class="login__form__social__title__line"></div>
                    <div class="login__form__social__title__text">ACCEDI CON</div>
                    <div class="login__form__social__title__line"></div>
                </div>
                <div class="login__form__social__icon">
                    <img src="../../assets/google.svg" alt="google logo">
                    <img src="../../assets/facebook.svg" alt="facebook logo">
                    <img src="../../assets/twitter.svg" alt="twitter logo">
                </div>
            </div>
            <div class="login__form__btn">
                <div class="login__form__btn__login">
                    <button @click.prevent="login" type="submit">LOGIN</button >
                </div>
                <div class="login__form__btn__recovery">
                    <p>Password dimenticata?</p>
                </div>
            </div>
             <div class="login__form__change">
                    <p>Non hai un account? <span @click="changeComponent">Registrati</span></p>
            </div>
        </form>
    </div>
  </section>
</template>

<script>
import route from "@/api/index";


export default {
    data(){
        return{
            checked: false,
            inputType: 'password',
            pswIcon: 'visibility',
            email: null,
            pwd: null,

        }
    },
    methods: {
    onChange() {
      console.log('checkbox changed:', this.checked)
    },
    modifyPswVisibility(){
        if(this.inputType === 'password'){
            this.inputType = 'text'
            this.pswIcon = 'visibility_off'
        }
        else{
            this.inputType ='password'
            this.pswIcon ='visibility'
        }
        
    },
    changeComponent(){
        this.$emit('changeTag','the-registration')
    },
    async login(){
        console.log(this.pwd, this.email)
        const data = await route.userLogin({email: this.email, password: this.pwd})
        if(data.status === 200){
            this.$cookies.set('user', data.data.data.result)
        }
        
        
    }
  },

}
</script>

<style lang="scss" scoped>
.login{
    height: 100%;
    width: 100%;
    padding: 5% 10%;
    &__sub{
        display: flex;
        flex-direction: column;
        justify-content: center;
        // background: red;
        height: 15%;
        >h1{
            font-size: 4rem;
            font-weight: 400;
        }
        >p{
            padding-left: 5px;
        }
    }
    &__form{
        display: flex;
        flex-direction: column;
        height: 60%;
        width: 100%;
        // background: blue;
        &__input{
            position: relative;
            padding: 2% 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 2%;
            width: 80%;
            > label{
                padding: 0 0 2% 5px;
                font-weight: 400;
            }
            > input {
                width: 100%;
                padding:2%;
                background: #efefef;
                border-radius: 20px;
                border: none;
                outline: none;
                &:focus{
                    border: 2px solid var(--color-light-blue);
                    background: none;
                }
            }
           
            &__pwd-icon{
                position: absolute;
                right: 2%;
                top: 69%;
                transform: translateY(-69%);
                
                cursor: pointer;
                > span{
                    transition: all .6s ease-in-out;
                    font-size: 2rem;
                    &:hover{
                        color: var(--color-light-blue);
                    }
                }
            }
        }
        &__check{
            display: flex;
            align-items:center;
            gap: 2%;
            > input{
                cursor: pointer;
                &:checked{
                    background: var(--color-light-blue);
                }
            }
        }
        &__social{
            height: 40%;
            width: 80%;
            display: flex;
            flex-direction:column;
            &__title{
                flex: 2;
                display: flex;
                align-items: center;
                &__line{
                    height: 1px;
                    background: var(--color-light-blue);
                    flex: 2
                }
                &__text{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                }
            }
            &__icon{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 5%;
                >img{
                    cursor: pointer;
                }
            }
        }
        &__btn{
            margin-top: 2%;
            height: 40%;
            display: flex;
            align-items: center;
            &__login{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex: 1;
                > button{
                    border: none;
                    outline: none;
                    background: var(--color-light-blue);
                    height: 40%;
                    width: 80%;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                }
            }
            &__recovery{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex: 1;
                > p{
                    margin: 0;
                    padding: 0;
                    font-weight: 500;
                    letter-spacing: 1px;
                    transition: all .5s ease-in-out;
                    cursor: pointer;
                    &:hover{
                        color: var(--color-light-blue);
                    }
                }
            }
        }
        &__change{
            display: flex;
            align-items: center;
            justify-content: center;
            > p{
                cursor: pointer;
                margin: 0;
                padding: 0;
                > span{
                    font-weight: 600;
                    transition: all .3s ease-in-out;
                    &:hover{
                        color: var(--color-light-blue);
                    }
                }
            }
        }
    }
}

</style>