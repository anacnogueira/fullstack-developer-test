<template>
  <div class="home">
    <ListProduct :title="title" :products="products"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListProduct from '@/components/ListProduct.vue'

export default defineComponent({
  data () {
    return {
      title: 'Lista de Produtos',
      products: [] as any
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
    ListProduct
  }
})
</script>
