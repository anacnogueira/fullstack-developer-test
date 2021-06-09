<template>
  <div class="list-products">
    <input type="search" class="filter" placeholder="Filtre pelo nome" @input="filter = $event.target.value">
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
        <tr v-for="product of filteredProducts" v-bind:key="product.id">
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

<script>
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import ProductService from '../domain/product/ProductService.js'

export default defineComponent({
  name: 'ListProduct',
  data () {
    return {
      message: '',
      products: [],
      filter: ''
    }
  },
  props: {
    title: String
  },
  created () {
    this.service = new ProductService(this.axios, 'products')
    this.service
      .list()
      .then(products => {
        this.products = products
      })
  },
  computed: {
    filteredProducts () {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i')
        return this.products.filter(({ name }) => exp.test(name))
      } else {
        return this.products
      }
    }
  },
  components: {
    'my-button': Button
  },
  methods: {
    remove (product) {
      this.service
        .delete(product.id)
        .then(response => {
          this.message = response.data.message
          const index = this.products.indexOf(product)
          this.products.splice(index, 1)
        })
        .catch(error => {
          this.message = 'Não foi posssível excluir o produto'
          console.log(error)
        })
    }
  }
})
</script>

<style scoped lang="scss">
  h1 { text-align:center; }

  .list-products {
    margin-top: 15px;
  }

  .filter {
    margin-top: 20px;
    display:block;
    width: 100%;
  }
</style>
