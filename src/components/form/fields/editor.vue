<script>
// import field resources mixin.
import resources from '../resources'
import { quillEditor } from 'vue-quill-editor'
import Quill from 'quill'
import { ImageImport } from '@/modules/vue-quill-editor/ImageImport'
import { ImageResize } from '@/modules/vue-quill-editor/ImageResize'
Quill.register('modules/imageImport', ImageImport)
Quill.register('modules/imageResize', ImageResize)

/**
 * Text Field Component.
 */
export default {
  // component name.
  name: 'f-editor',
  components: {quillEditor},

  data () {
    return {
      editorOption: {
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      }
    }
  },

  // default text field mixin.
  mixins: [resources],

  // custom component props
  props: {
    /**
     * Text-Link input types can use the same component.
     * i.e email, password, etc.
     */
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.$emit('input', html)
      this.$emit('change', html)
    },
    onEditorBlur (editor) {
    },
    onEditorFocus (editor) {
    },
    onEditorReady (editor) {
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    }
  },
  mounted () {
    setTimeout(() => {
      this.internalValue = this.value
    }, 1000)
  }
}
</script>

<template lang="pug">
  div.form-group(:class="groupClasses")
    label {{ label || placeholder }}
      quill-editor(ref="myTextEditor",
        v-model="internalValue",
        :options="editorOption",
        @blur="onEditorBlur($event)",
        @focus="onEditorFocus($event)",
        @ready="onEditorReady($event)",
        @change="onEditorChange($event)"
        )
    error(:message="errors")
</template>

<style lang="scss">
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
  .html {
    height: 9em;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
  }
</style>
