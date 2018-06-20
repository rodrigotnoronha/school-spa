<script>
// dependencies.
import { isEmpty, get, mapValues } from 'lodash'
import resources from '../resources'

/**
 * File Field Component.
 */
export default {

  /**
   * Component name.
   */
  name: 'f-content',

  /**
   * Default field mixin.
   */
  mixins: [resources],

  /**
   * API Resource path.
   */
  // resourcePath: '/files',

  /**
   * Component local data.
   */
  data () {
    return {
      // File being uploaded meta data.
      meta: {
        name: null, // selected file name.
        type: null, // selected file mime type.
        contents: null
      },

      // API File Object: After uploading, this should reflect the file instance.
      file: {
        uuid: null,           // file UUID.
        id: null,             // file public ID.
        kind: null,           // file kind (entity alias)
        label: null,          // file label.
        short_label: null,    // short file label.
        mime: null,           // mime type.
        size: null,           // file size.
        extension: null,      // file extension (not validated).
        fileable_id: null,    // fileable id (parent entity id).
        fileable_type: null   // fileable type (parent entity type).
      },

      // MIME type class aliases for UI
      mimeTypes: {
        // pdf.
        'application/pdf': 'file-pdf',
        // excel.
        'application/vnd.ms-excel': 'file-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'file-excel',
        // word.
        'application/msword': 'file-word',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'file-word',
        // images.
        'image/jpeg': 'file-image',
        'image/png': 'file-image',
        // xml (allowed because of legal invoices).
        'application/xml': 'file-xml',
        'text/xml': 'file-xml'
      }
    }
  },

  watch: {
    'meta.contents': 'afterDecode'
  },

  /**
   * Computed properties.
   */
  computed: {
    /**
     * Determine the CSS class that will be used to display icons.
     *
     * @returns {String}
     */
    fileClass () {
      // return the matching class, if not found, a default one, considering there is a value.
      return this.file.mime ? get(this.mimeTypes, this.file.mime, 'file-generic') : null
    },

    /**
     * Define the form group classes.
     *
     * @returns {Object}
     */
    groupClasses () {
      return {
        // there are errors?
        'has-error': !isEmpty(this.errors) || !isEmpty(this.uploadErrors),
        // is the value empty?
        'is-empty': this.isEmpty,
        // is this input focused?
        'is-focused': this.focused,
        // is the input disabled?
        'disabled': this.disabled
      }
    }
  },

  /**
   * Component methods.
   */
  methods: {
    /**
     * Empties the file instance.
     */
    emptyFile () {
      this.file = mapValues(this.file, (v, k) => null)
    },

    /**
     * Actions after successfully file upload.
     */
    afterDecode () {
      // send the file contents to the parent component.
      this.$emit('input', this.meta)
    },

    /**
     * Event that will accept a browser selected file
     * and trigger it's upload.
     *
     * @param event
     */
    fileSelected (event) {
      // if there is no file actually selected...
      if (event.target.files[0] === undefined || !event.target.files[0]) {
        return
      }

      // copy it over to a local variable
      const selectedFile = event.target.files[0]

      this.file.label = selectedFile.name
      this.file.mime = selectedFile.type

      let reader = new FileReader()
      reader.readAsBinaryString(selectedFile)
      reader.onload = (e) => {
        this.meta.contents = e.target.result
      }
    }
  }
}
</script>

<template lang="pug">
  // main file form group.
  div.form-group.label-static(:class="[ groupClasses, fileClass ]")
    label.control-label(v-if="label") {{ label }}

    // (hidden) file input that will actually hold the file.
    input(v-if="!file.uuid", type="file", :name="name", :id="name", :placeholder="placeholder",
    @change="fileSelected", @focus="focus", @blur="blur")

    // dumb text input that will serve as front for the file upload.
    input.form-control.file-select(v-if="!file.uuid", type="text", :readonly="true", class="form-control",
    :value="file.short_label || file.label", :placeholder="'Selecione...'")

    // file-select icon
    div.file-select-icon(:class="{ active: !!meta.label }")

    // when file is present, file download button.
    //a.download.form-control(v-if="file.uuid", target="_blank", :href="file.url")
      icon(lib="sl", name="cloud-download")
      | {{ (file.short_label || file.label) || Download }}

    // when file is present, file download button.
    //a.remove(v-if="file.uuid", @click="emptyFile")
      icon(name="times")
      | Remover

    // upload progress bar.
    //div.progress(v-if="uploading")
      div.progress-bar(:style="'width: '+progress+'%'", role="progressbar")

    // parent component error messages.
    error(:message="errors")

    // local upload error messages
    //error(:message="uploadErrors")

</template>
