<template>
  <div class="card">
    <div class="card__menu">
      <div class="card__menu__title" v-for="t in cardMenu" :key="t.value">
        {{ t.value }}
      </div>
    </div>
    <div class="card__input">
      <input
        type="text"
        name="search"
        v-model="searchInput"
        placeholder="Dove vuoi andare?"
      />
      <button type="submit" @click.prevent="showInput">
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardMenu: {
      type: Object,
    },
  },
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    showInput() {
      console.log(this.searchInput);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  height: 15vh;
  width: 75%;
  background-color: var(--color-orange);
  border-radius: 25px;
  &__menu {
    width: 100%;
    height: 40%;
    padding: 0 3%;
    display: flex;
    align-items: center;
    gap: 2%;
    &__title {
      color: white;
      font-size: 1.5rem;
    }
  }
  &__input {
    width: 94%;
    height: 30%;
    display: flex;
    align-items: center;
    padding: 0 3%;
    background: white;
    border-radius: 15px;
    margin: 0 auto;

    & > input[type='text'] {
      border: none;
      outline: none;
      height: 60%;
      width: 100%;
      font-size: 1.6rem;
      color: #2b2b2b;
    }
    & > button {
      border: none;
      outline: none;
      background: none;
      color: var(--color-orange);
      cursor: pointer;
      font-size: 1.8rem;
    }
  }
}
</style>
