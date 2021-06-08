<template>
  <div class="list-products">
    <h1>{{ title }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">SKU</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
          <th scope="row">{{ product.id }}</th>
          <th>{{ product.sku }}</th>
          <th>{{ product.name }}</th>
          <th>{{ product.price }}</th>
          <th><my-button type="button" label="Excluir" @click="remove(product)" /></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'ListProduct',
  props: {
    title: String,
    products: Object
  },
  components: {
    'my-button': Button
  },
  methods: {
    remove (product) {
      if (confirm('Confirma a exclusão do produto ' + product.name + '?')) {
        alert('Remover produto ' + product.id)
      }
    }
  }
})
</script>

<style scoped lang="scss">
  h1 { text-align:center; }

  .list-products {
    margin-top: 15px;
  }
</style>
