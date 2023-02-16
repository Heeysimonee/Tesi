<template>
  <div class="card">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    // background: red;
}
header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
    height: 20%;
    width: 100%;
    // background: red;
}
main{
    display: flex;
    // background: blue;
}
</style>