<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__inner__select-city">
        <!-- Region Selection-->
        <div class="q-pa-lg">
          <q-select 
           filled
          :options="regions" 
          option-label="region" 
          option-value="value" 
          v-model="model" 
          label="Regione"
          />
        </div>
      </div>
      <!-- Date Selection-->
      <div class="card__inner__select-date">
          <!-- <div class="q-py-md" style="max-width: 300px;"> -->
            <q-input class="select-date" filled label="YYYY/MM/DD" v-model="date" mask="date" :rules="['date']" item-aligned>
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" color="cyan-7" today-btn>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Chiudi" color="cyan" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  <!-- </div> -->
      </div>
      <div class="card__inner__select-adult">
        <!-- Adult Selection-->
        <div class="q-pa-lg">
          <q-select 
           filled
          :options="adults" 
          option-label="option" 
          option-value="value" 
          v-model="major" 
          label="Persone"
          />
        </div>
      </div>
      <div class="card__inner__select-children">
        <!-- Activity Selection-->
        <div class="q-pa-lg">
          <q-select 
           filled
          :options="activity" 
          option-label="option" 
          option-value="value" 
          v-model="activityType" 
          label="Attività"
          />
        </div>
      </div>
      <div class="card__inner__search"><span class="material-symbols-outlined service__card__icon">search</span></div>
    </div>
  </div>
</template>

<script>

// import { ref } from 'vue'
export default {
  data(){
    return{
      model: null,
      date: null,
      major: null,
      activityType: null,
      regions: [
        {"region":"Abruzzo","value":"abruzzo"},
        {"region":"Basilicata","value":"basilicata"},
        {"region":"Calabria","value":"calabria"},
        {"region":"Campania","value":"campania"},
        {"region":"Emilia-Romagna","value":"bologna"},
        {"region":"Friuli-Venezia Giulia","value":"friuli-venezia-giulia"},
        {"region":"Lazio","value":"lazio"},
        {"region":"Liguria","value":"liguria"},
        {"region":"Lombardia","value":"lombardia"},
        {"region":"Marche","value":"marche"},
        {"region":"Molise","value":"molise"},
        {"region":"Piemonte","value":"piemonte"},
        {"region":"Puglia","value":"puglia"},
        {"region":"Sardegna","value":"sardegna"},
        {"region":"Sicilia","value":"sicilia"},
        {"region":"Toscana","value":"toscana"},
        {"region":"Trentino-Alto Adige","value":"trentino-alto-adige"},
        {"region":"Umbria","value":"umbrua"},
        {"region":"Valle d'Aosta","value":"valle-d-aosta"},
        {"region":"Veneto","value":"veneto"}
      ],
      currentDate: new Date(),
      formattedDate:"",
      adults: [
        {"option":"1","value":"1"},
        {"option":"2","value":"2"},
        {"option":"3","value":"3"},
        {"option":"4","value":"4"},
        {"option":"5","value":"5"},
        {"option":"6","value":"6"},
        {"option":"7","value":"7"},
        {"option":"8","value":"8"},
        {"option":"9","value":"9"},
        {"option":"10","value":"10"},
      ],
      activity: [
        {"option":"Cultura","value":"cultural"},
        {"option":"Avventura","value":"adventure"},
        {"option":"Lusso","value":"Luxory"},       
        {"option":"Natura","value":"nature"},
        {"option":"Spiagge","value":"beach"},
        {"option":"Degustazione","value":"tasting"},
        {"option":"Benessere","value":"welness"},
        {"option":"Educazione","value":"education"},
        {"option":"Religioso","value":"religious"},

        
      ]
    }
  },
  mounted(){
  this.formattedDate = this.formatDate(this.currentDate);
},
  methods:{
  formatDate(date) {
      var year = date.getFullYear();
      var month = ("0" + (date.getMonth() + 1)).slice(-2);
      var day = ("0" + date.getDate()).slice(-2);
      return year + "-" + month + "-" + day;
    }
},
watch:{
  date(nw){
    console.log(nw)
  },
  model(nw){
    console.log(nw)
  }
}

}
</script>

<style lang="scss" scoped> 
.select-date{
  padding: 7% 0;
  width: 80%;
  margin: 0 auto;
}
.card{
  width: 70%;
  height: 50%;
  background: white;
  outline: 12px solid var(--color-light-blue);
  border-radius: 20px;
  &__inner{
    height: 100%;
    width: 100%;
    padding: 5% 2%;
    display: flex;
    align-items: center;
    &__select-city{
      flex: 1;
      border-right: 1px solid var(--color-light-blue);
      
    }
    &__select-date{
      flex: 1.5;
      border-right: 1px solid var(--color-light-blue);
      display: flex;
      justify-content: center;
      align-self: center;
    }
    &__select-adult{
      flex: 1;
      border-right: 1px solid var(--color-light-blue);
    }
    &__select-children{
      flex: 1;
    }
    &__search{
      flex: 0.5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right:2% ;
      & span {
        width: 80%;
        padding:5% 0;
        border-radius:10px ;
        color: #2b2b2b;
        font-size:3.5rem ;
        border: 2px solid var(--color-light-blue);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover{
          border: none;
          background: var(--color-light-blue);
          color: white;
        }
      }
}
  }
}

</style>