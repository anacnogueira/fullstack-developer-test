<template>
  <div class="list-products">
    <h1>{{ title }}</h1>
    <p class="text-center" v-show="message">{{ message }}</p>
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
          <th><my-button
            type="button"
            label="Excluir"
            @activedButton="remove(product)"
            :confirmation="true"
            stylized="danger"/></th>
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
  data () {
    return {
      message: ''
    }
  },
  props: {
    title: String,
    products: Object
  },
  components: {
    'my-button': Button
  },
  methods: {
    remove (product) {
      this.axios
        .delete(`http://guide-121-api.test/api/products${product.id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
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
