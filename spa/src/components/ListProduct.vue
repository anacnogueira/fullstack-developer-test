<template>
  <div>
    <h1>{{ title }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">SKU</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
          <th scope="row">{{ product.id }}</th>
          <th>{{ product.sku }}</th>
          <th>{{ product.name }}</th>
          <th>{{ product.price }}</th>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListProduct',
  props: {
    title: String,
    products: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
