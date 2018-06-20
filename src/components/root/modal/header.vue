<template lang="pug">
  div.modal-header
    slot
      button.close(
         type="button",
         data-dismiss="modal",
         aria-hidden="true"
        )
      | &times;
      h4.modal-title  {{ title }}
</template>

<script>
export default {
  name: 'modal-header',
  props: [
    'title'
  ]
}
</script>
