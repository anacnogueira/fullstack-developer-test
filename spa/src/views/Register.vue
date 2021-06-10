<template>
  <div class="register">
    <h1 v-if="product.id">Alteração de produto</h1>
    <h1 v-else>Cadastro de produto</h1>

    <Form @submit="save()">
      <div class="form-group">
        <label for="sku">SKU</label>
        <Field name="sku" :rules="validateSku" class="form-control" id="sku" placeholder="Insira SKU" autocomplete="off" v-model="product.sku" />
        <ErrorMessage name="sku" class="invalid"/>
      </div>

      <div class="form-group">
        <label for="name">Nome</label>
        <Field name="name" :rules="validateName" class="form-control" id="name" placeholder="Insira nome do produtos" autocomplete="off" v-model="product.name" />
        <ErrorMessage name="name" class="invalid"/>
      </div>

      <div class="form-group">
        <label for="price">Preço</label>
        <Field name="price" :rules="validatePrice" class="form-control" id="price" placeholder="Insira preço do produto" autocomplete="off" v-model="product.price" />
        <ErrorMessage name="price" class="invalid"/>
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
      </div>

      <div class="wrap-buttons">
        <my-button label="GRAVAR" type="submit" stylized="success" />
        <router-link :to="{ name: 'Home' }"><my-button label="VOLTAR" type="button" stylized="default"/></router-link>
      </div>
    </Form>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Product from '../domain/product/Product.js'
import ProductService from '../domain/product/ProductService.js'
import { Field, Form, ErrorMessage } from 'vee-validate'

export default {
  components: {
    'my-button': Button,
    Field,
    Form,
    ErrorMessage
  },
  data () {
    return {
      product: new Product(),
      id: this.$route.params.id
    }
  },
  methods: {
    validateSku (value) {
      if (!value) {
        return 'O campo é obrigatório'
      }
      return true
    },
    validateName (value) {
      if (!value) {
        return 'O campo é obrigatório'
      }
      return true
    },
    validatePrice (value) {
      if (!value) {
        return 'O campo é obrigatório'
      }

      if (isNaN(value)) {
        return 'O campo deve ser um valor numerico válido'
      }
      return true
    },
    save () {
      this.service
        .store(this.product)
        .then(response => {
          this.$router.push({ name: 'Home' })
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.service = new ProductService(this.axios, 'products')

    if (this.id) {
      this.service
        .show(this.id)
        .then(product => {
          this.product = product
        })
    }
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

  .invalid {
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>
