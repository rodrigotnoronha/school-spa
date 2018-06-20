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
  name: 'f-file',

  /**
   * Default field mixin.
   */
  mixins: [resources],

  /**
   * API Resource path.
   */
  resourcePath: '/files',

  /**
   * Component local data.
   */
  data () {
    return {
      // Are the user trying to replace the file?
      replace: false,

      // Is there a upload in progress?
      uploading: false,

      // If there is a upload in progress, this field will track it's progress.
      progress: null,

      // Special errors attribute that will hold local upload errors.
      // Main entity errors will be passed on the prop 'errors'.
      uploadErrors: null,

      // File being uploaded meta data.
      meta: {
        name: null, // selected file name.
        type: null  // selected file mime type.
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
    value: 'loadFile'
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
     * Load the file from the API.
     */
    loadFile () {
      if (isEmpty(this.value)) {
        this.file = {
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
        }
        return
      }

      // locate the file on the API.
      this.$http.get('/files/' + this.value).then(({data}) => {
        // then set it on the local component scope.
        this.file = data
      })
    },

    /**
     * Empties the file instance.
     */
    emptyFile () {
      this.file = mapValues(this.file, (v, k) => null)
    },

    /**
     * Method that will be used by axios to track upload progress.
     */
    onUploadProgress (progressEvent) {
      // update the progress, always as an integer value.
      this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    },

    /**
     * Do the upload file action.
     *
     * @param file
     */
    uploadFile (file) {
      // create a new FormData instance.
      const formData = new window.FormData()

      // append the file into the FormData.
      formData.append('file', file, file.label)

      // append the file kind (:name prop)
      formData.append('kind', this.name)

      // enable the uploading status.
      this.uploading = true

      // axios config with a upload progress tracking.
      const config = { onUploadProgress: this.onUploadProgress }

      // finally use axios to post the file.
      return this.$resource.post('/temporary', formData, config)
        .then(({ data }) => {
          // set the uploaded file into component data
          this.file = data
          // disable uploading status
          this.uploading = false
          // complete the promise by return something.
          return data
        })
        .catch((error) => {
          // disable the uploading status.
          this.uploading = false
          // set the errors array, if any...
          this.uploadErrors = get(error.response.data, 'data.errors.file', null)
          // reject so the outer promise may catch it.
          return Promise.reject(error)
        })
    },

    /**
     * Before uploading actions.
     */
    beforeUpload () {
      // emit a uploading event with value true so the parent
      // component can track it's status.
      this.$emit('uploading', true)
    },

    /**
     * Actions after successfully file upload.
     */
    afterUpload () {
      // get the current file UUID.
      const uuid = get(this.file, 'uuid')

      // if the UUID was not found (should never happen since only success will change this)
      if (!uuid) {
        return
      }

      // emit a input event so the parent component knows the file UUID has changed.
      this.$emit('input', uuid)

      // emit a uploading event with value false so the parent component can
      // detect that there no upload in progress.
      this.$emit('uploading', false)
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

      // setup some of it's data for immediate feedback
      this.file.label = selectedFile.name
      this.file.mime = selectedFile.type

      // trigger the before upload actions.
      this.beforeUpload()

      // trigger the file upload method.
      this.uploadFile(selectedFile).then(() => {
        // trigger the method that will do some post processing.
        this.afterUpload()
      })
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
    div.file-select-icon(v-if="!file.uuid", :class="{active: uploading}")

    // when file is present, file download button.
    a.download.form-control(v-if="file.uuid", target="_blank", :href="file.url")
      icon(lib="sl", name="cloud-download")
      | {{ (file.short_label || file.label) || Download }}

    // when file is present, file download button.
    a.remove(v-if="file.uuid", @click="emptyFile")
      icon(name="times")
      | Remover

    // upload progress bar.
    div.progress(v-if="uploading")
      div.progress-bar(:style="'width: '+progress+'%'", role="progressbar")

    // parent component error messages.
    error(:message="errors")

    // local upload error messages
    error(:message="uploadErrors")
</template>
