<script>
import { filter, isEmpty, map } from 'lodash'
import Error from '../Helpers/Error.vue'

const getMime = type => {
  const mime = type.split('/')

  return mime[1]
}

export default {
  name: 'file_text',
  computed: {
    /**
     * Define the form group classes.
     *
     * @returns {Object}
     */
    groupClasses () {
      return {
        // there are errorsOpenFiles?
        'has-error': !isEmpty(this.errorsOpenFiles) || !isEmpty(this.errors)
      }
    }
  },
  components: {
    Error
  },
  data () {
    return {
      files: [],
      total: 0,
      errorsOpenFiles: []
    }
  },
  methods: {
    openFiles (event) {
      this.errorsOpenFiles = []
      const files = filter(event.target.files, file => {
        if (this.size < 0) {
          return file
        }

        return file.size <= this.size
      })
      if (files.length < event.target.files.length) {
        this.errorsOpenFiles = ['Existem arquivos não permitidos por tamanho ou formato']
      }
      if (files.length === 0) {
        this.$emit('input', (this.multiple) ? [] : {})
      }
      if (this.multiple) {
        this.total = files.length
        this.files = []
      }
      map(files, currentFile => {
        const reader = new FileReader()

        reader.onload = (loadEvent) => {
          const file = {
            lastModified: currentFile.lastModified,
            lastModifiedDate: currentFile.lastModifiedDate,
            name: currentFile.name,
            size: currentFile.size,
            mime: getMime(currentFile.type),
            mime_type: currentFile.type,
            content: loadEvent.target.result.replace('data:' + currentFile.type + ';base64,', '')
          }
          if (this.multiple) {
            this.files.push(file)
          } else {
            this.$emit('input', file)
          }
        }
        reader.readAsDataURL(currentFile)
      })
    }
  },
  props: {
    errors: null,
    size: {
      type: Number,
      default: -1
    },
    label: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    files (value) {
      if (this.files.length === this.total) {
        this.$emit('input', this.files)
      }
    }
  }
}
</script>

<template lang="pug">
  div.form-group.label-static(:class="groupClasses")
    div
      label.control-label(v-if="label") {{ label }}
      input.form-control(type='file', accept='text/plain', @change='openFiles', :multiple="multiple")
      error(:message="errorsOpenFiles")
      error(:message="errors")
</template>
