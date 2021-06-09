<template>
  <div class="register">
    <h1>Cadastro de produto</h1>
    <h2 class="center"></h2>
    <form>
      <div class="form-group">
        <label for="sku">SKU</label>
        <input class="form-control" id="sku" aria-describedby="skuHelp" placeholder="Insira SKU" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="sku">SKU</label>
        <input class="form-control" id="sku" placeholder="Insira SKU do produto" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="name">Nome</label>
        <input class="form-control" id="name" placeholder="Insira nome do produtos" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="price">Preço</label>
        <input class="form-control" id="price" placeholder="Insira preço do produto" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
      </div>

      <div class="wrap-buttons">
        <my-button label="GRAVAR" type="submit" stylized="success"/>
        <router-link to="/"><my-button label="VOLTAR" type="button" stylized="default"/></router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Button from '../components/Button.vue'

export default {
  components: {
    'my-button': Button
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
