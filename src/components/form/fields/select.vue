<script>
  // import field resources mixin.
  import resources from '../resources'
  import props from './select/props'
  import { find } from 'lodash'

  /**
   * Select Field Component.
   */
  export default {
    // component name.
    name: 'f-select',

    data () {
      return {
        /**
         * Loading state.
         */
        loading: false
      }
    },

    // default form field resources.
    mixins: [resources],

    // custom select props
    props,

    // custom select methods.
    methods: {
      doSearch (query) {
        this.$emit('search-change', query)
      },

      /**
       * Method to be fired when the component value changed (propagation).
       */
      onChange () {
        if (this.multiple) { // if multiple values are allowed.
          this.$emit('input', this.internalValue)
        } else { // if a single value is allowed / expected.
          this.$emit('input', this.internalValue ? this.internalValue.id : null)
        }
        this.$emit('selected', this.internalValue)
      },

      /**
       * Setup internal value from prop or other event.
       *
       */
      setInternalValue () {
        if (this.multiple) { // if multiple values are allowed, just set them.
          this.internalValue = this.value
        } else { // if a single value is allowed, find the option that matches passed id.
          this.internalValue = find(this.options, {id: this.value}) || null
        }
      }
    },

    /**
     * Boot the component.
     */
    mounted () {
      // bootstrap the internal value on component boot.
      this.setInternalValue(this.value)
    },

    // watch
    watch: {
      // when the prop value changes, update the internal value.
      value: 'setInternalValue',
      // when options do change.
      options: { handler: 'setInternalValue', deep: true }
    }

  }
</script>

<template lang="pug">
  div.form-group(:class="groupClasses")
    label.control-label(v-if="label") {{ label }}
    emtudo-select(
      :loading="loading"
      :block-keys="['Tab']",
      :hide-tags="multiple",
      :close-on-select="!multiple",
      :clear-on-select="!multiple",
      v-model="internalValue",
      :track-by="trackBy",
      :name="name",
      :placeholder="placeholder || 'Selecione'",
      :id="name",
      :allow-empty="!required",
      :show-labels="showLabels",
      :multiple="multiple",
      :searchable="searchable",
      :hide-selected="hideSelected",
      @open="focus",
      @close="blur",
      :options="options ? options : []",
      :label="labelBy",
      @search-change="doSearch",
      @input="onChange")
      div(slot="noResult") Nenhum resultado encontrado
    error(:message="errors")
</template>
