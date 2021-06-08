<template>
<button class="btn btn-danger" :type="type">{{ label }} </button>
</template>

<script>
export default {
  props: ['type', 'label']
}
</script>

<style>

</style>
