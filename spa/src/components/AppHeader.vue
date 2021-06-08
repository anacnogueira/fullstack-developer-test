<template>
  <header>
    <img alt="Ecommerce logo" src="../assets/logo.png" height="50">
    <p>My E-commerce</p>
    <nav>
      <ul>
        <li v-for="route in routes" v-bind:key="route.name">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { routes } from '../router'

export default {
  data () {
    return {
      routes
    }
  }
}
</script>

<style scoped lang="scss">
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
