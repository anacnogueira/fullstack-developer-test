<template>
<button @click="triggerAction()" class="btn" :class="defaultStyle" :type="type">{{ label }} </button>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    confirmation: Boolean,
    stylized: String
  },
  methods: {
    triggerAction () {
      if (this.confirmation) {
        if (confirm('Confirma Operação?')) {
          this.$emit('activedButton')
        }
        return
      }

      this.$emit('activedButton')
    }
  },
  computed: {
    defaultStyle () {
      switch (this.stylized) {
        case 'danger':
          return 'btn-danger'
        default:
          return 'btn-primary'
      }
    }
  }
}
</script>

<style>

</style>
