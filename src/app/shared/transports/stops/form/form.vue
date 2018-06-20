<script>
import FormAdd from './form-add'
import resources from './resources'

export default {
  name: 'stops-form',
  components: {
    FormAdd
  },
  mixins: [resources]
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    section.content
      form-add(:with-save="withSave", :label-save="labelSave", :btn-save-class="btnSaveClass")
</template>
