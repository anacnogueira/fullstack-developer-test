<template>
  <div class="register">
    <h1>Cadastro de produto</h1>
    <form @submit.prevent="save()">
      <div class="form-group">
        <label for="sku">SKU</label>
        <input class="form-control" id="sku" placeholder="Insira SKU" autocomplete="off" v-model="product.sku">
      </div>

      <div class="form-group">
        <label for="name">Nome</label>
        <input class="form-control" id="name" placeholder="Insira nome do produtos" autocomplete="off" v-model="product.name">
      </div>

      <div class="form-group">
        <label for="price">Preço</label>
        <input class="form-control" id="price" placeholder="Insira preço do produto" autocomplete="off" v-model="product.price">
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
      </div>

      <div class="wrap-buttons">
        <my-button label="GRAVAR" type="submit" stylized="success" />
        <router-link to="/"><my-button label="VOLTAR" type="button" stylized="default"/></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Product from '../domain/product/Product.js'
import ProductService from '../domain/product/ProductService.js'

export default {
  components: {
    'my-button': Button
  },
  data () {
    return {
      product: new Product()
    }
  },
  methods: {
    save () {
      this.service
        .store(this.product)
        .then(response => {
          this.product = new Product()
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.service = new ProductService(this.axios, 'products')
  }
}
</script>

<style scoped lang="scss">
  .register {
    width: 80%;
    margin: 0 auto;
  }

  h1 { text-align:center; }

  .wrap-buttons {
    text-align: center;
    button {
      margin-right: 20px;
    }
  }
</style>
