<script>
// for Vue 2.0
import Error from '../Helpers/Error.vue'
import DatePicker from 'vue-datepicker'
import { isEmpty, assign } from 'lodash'
import fLabel from './label'

const options = {
  type: 'min',
  week: ['Se', 'Ma', 'Mi', 'Qu', 'Se', 'Sa', 'Do'],
  month: ['Janeiro', 'Febrero', 'Mar', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  format: 'DD/MM/YYYY HH:mm',
  placeholder: 'Fecha',
  inputStyle: {
    'display': 'inline-block',
    'padding': '6px',
    'line-height': '22px',
    'font-size': '16px',
    'border': '2px solid #fff',
    'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    'border-radius': '2px',
    'color': '#5F5F5F'
  },
  color: {
    header: '#ccc',
    headerText: '#f00'
  },
  buttons: {
    ok: 'Ok',
    cancel: 'Cancelar'
  },
  overlayOpacity: 0.5, // 0.5 as default
  dismissible: true // as true as default
}

export default {
  name: 'my-datepicker',
  components: {
    DatePicker,
    Error,
    fLabel
  },
  computed: {
    options () {
      return assign({}, options, this.option)
    },
    hasDate () {
      return !isEmpty(this.startTime.time)
    },

    /**
     * Define the form group classes.
     * @returns {Object}
     */
    groupClasses () {
      return {
        'label-floating': !(isEmpty(this.label)),  // there is a label present?
        'has-error': !isEmpty(this.errors),        // there are errors?
        'is-empty': this.isEmpty,                  // is the value empty?
        'is-focused': this.focused,                // is this input focused?
        'disabled': this.disabled                  // is the input disabled?
      }
    }
  },
  data () {
    return {
      // for Vue 2.0
      startTime: {
        time: null
      }
    }
  },
  methods: {
    change (value) {
      this.startTime.time = value
      this.$emit('input', value)
    },
    clean () {
      this.startTime.time = null
      this.$emit('input', null)
    }
  },
  mounted () {
    this.startTime.time = this.value
  },
  watch: {
    'value' (val) {
      this.startTime.time = val
    }
  },
  props: {

    /**
     * Error list or string for field errors.
     */
    errors: {
      default: null
    },
    value: null,
    option: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template lang="pug">
  div.form-group(:class="groupClasses")
    f-label(:recheck="hasDate")
      div.row
        div.col-sm-10
          date-picker(:date="startTime", :option="options", @change="change", :placeholder="options.placeholder", :class="groupClasses")
        div.col-sm-1
          button.btn.btn-danger(@click="clean()") &times;
    error(:message="errors")
</template>
