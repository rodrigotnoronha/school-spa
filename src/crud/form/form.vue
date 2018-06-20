<script>
import resources from '../resources'
import { get } from 'lodash'

export default {
  name: 'crud-form',

  mounted () {
    const id = get(this.$route.params, 'id', null)
    if (id) {
      this.getItem(id)
    }
  },

  mixins: [resources]
}
</script>

<template lang="pug">
  page(:title="title", :sub-title="subTitle")
    slot
</template>
