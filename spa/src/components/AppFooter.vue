<template>
  <footer>
    <p>Copyright &copy; {{ year }}</p>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style scoped lang="scss">
  footer {
    margin-top: 15px;
    text-align:center;
  }
</style>
