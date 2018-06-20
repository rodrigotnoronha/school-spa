<script>
import { get } from 'lodash'

import file from './file'

/**
 * File Field Component.
 */
export default {
  /**
   * Component name.
   */
  name: 'f-file-document',

  /**
   * Default field mixin.
   */
  mixins: [file],

  /**
   * API Resource path.
   */
  resourcePath: '/settings/users/',

  props: {
    kind: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      default: 'me'
    }
  },

  /**
   * Component methods.
   */
  methods: {
    /**
     * Do the upload file action.
     *
     * @param file
     */
    uploadFile (file) {
      // create a new FormData instance.
      const formData = new window.FormData()

      // append the file into the FormData.
      formData.append('document', file, file.label)

      // enable the uploading status.
      this.uploading = true

      // append the file kind (:name prop)
      formData.append('kind', this.kind)

      // axios config with a upload progress tracking.
      const config = { onUploadProgress: this.onUploadProgress }

      // finally use axios to post the file.
      return this.$resource.post(this.userId + '/documents', formData, config)
        .then(({ data }) => {
          // set the uploaded file into component data
          this.file = data
          // disable uploading status
          this.uploading = false

          this.$emit('uploaded', true, data)

          // complete the promise by return something.
          return data
        })
        .catch((error) => {
          this.$emit('uploaded', false, error)
          // disable the uploading status.
          this.uploading = false
          // set the errors array, if any...
          this.uploadErrors = get(error.response.data, 'data.errors.file', {})
          // reject so the outer promise may catch it.
          return Promise.reject(error)
        })
    }
  }
}
</script>
