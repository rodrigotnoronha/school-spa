<script>
  import error from '../Helpers/Error'
  import fieldProps from '../props'

  export default {
    name: 'field',
    components: {
      error
    },
    props: fieldProps,
    computed: {
      // determine if a label show be shown
      showLabel: function () {
        if (this.forceLabel) {
          return true
        }

        return this.showTooltip && (this.value && this.value.length > 0)
      },
      // determine if an error should be shown
      hasError: function () {
        return this.errorMessage && this.errorMessage.length > 0
      }

    },
    methods: {
      updateValue: (value) => {
        // Emit the number value through the input event
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>
  .help-block {
    color: #B03640
  }

    .hide-label {
        visibility: hidden;
    }

    .show-label {
        visibility: visible;
    }
</style>

<template lang="pug">
  div.form-group(
    :class="{ 'has-error': hasError }",
    :title="label"
  )
    label(:for="fieldId",
      v-if="forceLabel"
    )
      | {{ label }}
    template(v-if="!forceLabel")
      label(:for="fieldId",
        v-if="!forceNoLabel",
        :class="{ 'hide-label': !showLabel}"
      )
        | {{ label }}
    slot
    error(
      v-if="hasError",
      :message="errorMessage"
    )
</template>
