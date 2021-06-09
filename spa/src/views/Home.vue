<template>
  <div class="home">
    <input type="search" class="filter" placeholder="Filtre pelo nome" @input="filter = $event.target.value">
    <list-product :title="title" :products="filteredProducts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListProduct from '@/components/ListProduct.vue'

export default defineComponent({
  data () {
    return {
      title: 'Lista de Produtos',
      products: [],
      filter: ''
    }
  },
  created () {
    this.axios.get('http://guide-121-api.test/api/products')
      .then(res => {
        this.products = res.data.products
      })
  },
  computed: {
    filteredProducts (): string[] {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i')
        return this.products.filter(({ name }) => exp.test(name))
      } else {
        return this.products
      }
    }
  },
  name: 'Home',
  components: {
    'list-product': ListProduct
  }
})
</script>

<style scoped type="scss">
  .home {
    width: 80%;
    margin: 0 auto;
  }
  .filter {
    margin-top: 20px;
    display:block;
    width: 100%;
  }
</style>
