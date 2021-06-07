<template>
  <header>
    <img alt="Ecommerce logo" src="../assets/logo.png" height="50">
    <p>My E-commerce</p>
    <nav>
      <ul>
        <li><router-link to="/">Lista de Produtos</router-link></li>
        <li><router-link to="/cadastro">Cadastro</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>
