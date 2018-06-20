<script>
  export default {
    name: 'error',
    computed: {
      isSeveral () {
        return Array.isArray(this.message)
      }
    },
    props: {
      message: null
    }
  }
</script>

<template lang="pug">
  p.help-block(v-if="message")
    strong(v-if="!isSeveral") {{ message }}
    strong(v-if="isSeveral") {{ message[0] }}
</template>
