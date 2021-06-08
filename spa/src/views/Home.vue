<template>
  <div class="home">
    <input type="search" class="filter" placeholder="Filtre pelo nome" v-on:input="filter = $event.target.value">
    <list-product :title="title" :products="products"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListProduct from '@/components/ListProduct.vue'

export default defineComponent({
  data () {
    return {
      title: 'Lista de Produtos',
      products: [] as any,
      filter: ''
    }
  },
  created () {
    this.axios.get('http://guide-121-api.test/api/products')
      .then(res => {
        this.products = res.data.products
      })
  },
  name: 'Home',
  components: {
    'list-product': ListProduct
  }
})
</script>

<style scoped type="scss">
  .filter {
    display:block;
    width: 100%;
  }
</style>
