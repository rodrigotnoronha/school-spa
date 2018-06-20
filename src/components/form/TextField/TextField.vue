<script>
  // base field component
  import Field from '../Field/Field'
  // default props
  import propsList from '../props'
  // default methods
  import DefaultMethods from '../methods'

  export default {
    name: 'text_field',
    components: { Field },
    data () {
      return {
        focused: false
      }
    },
    props: Object.assign({}, propsList, {
      type: {
        type: String,
        default: 'text'
      }
    }),
    methods: Object.assign(DefaultMethods, {
      focusOn () {
        this.focused = true
      },
      focusOff () {
        this.focused = false
      }
    })
  }
</script>

<template lang="pug">
  field(:value="value", :errors="errorMessage", :focused="focused")
    label.control-label(slot="label") {{ label }}
    template(scope="options")
      input.form-control(:type="type",
      :name="name",
      :id="name",
      :value="value",
      @input="updateValue($event.target.value)", @focus="options.focused=true", @blur="options.focused=false")
</template>
