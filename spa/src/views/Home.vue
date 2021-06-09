<template>
  <div class="home">
    <list-product :title="title" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListProduct from '@/components/ListProduct.vue'

export default defineComponent({
  data () {
    return {
      title: 'Lista de Produtos'
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
</style>
