<template lang="pug">
  form.vue-dropzone.dropzone(:action="url", :id="id")
</template>

<script>
import locales from 'plugins/locales'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: '//'
    },
    clickable: {
      type: Boolean,
      default: true
    },
    acceptedFileTypes: {
      type: String
    },
    thumbnailHeight: {
      type: Number,
      default: 100
    },
    thumbnailWidth: {
      type: Number,
      default: 100
    },
    showRemoveLink: {
      type: Boolean,
      default: true
    },
    maxFileSizeInMB: {
      type: Number,
      default: 2
    },
    maxNumberOfFiles: {
      type: Number,
      default: 1
    },
    autoProcessQueue: {
      type: Boolean,
      default: false
    },
    useFontAwesome: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Object
    },
    language: {
      type: Object,
      default: () => {
        return locales().dropzone
      }
    },
    dropzoneOptions: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'base64' // base64, file
    }
  },
  methods: {
    setOption: function (option, value) {
      this.dropzone.options[option] = value
    },
    removeAllFiles: function () {
      this.dropzone.removeAllFiles(true)
    },
    processQueue: function () {
      this.dropzone.processQueue()
    },
    removeFile: function (file) {
      this.dropzone.removeFile(file)
    },
    emitFile: function (event, file) {
      if (this.type !== 'base64') {
        this.$emit(event, file)

        return file
      }

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const data = {
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          file: file.name,
          size: file.size,
          type: file.type,
          data: reader.result.replace('data:' + file.type + ';base64,', '')
        }
        this.$emit(event, data)
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
    }
  },
  computed: {
    cloudIcon: function () {
      if (this.useFontAwesome) {
        return '<i class="fa fa-cloud-upload"></i>'
      } else {
        return '<i class="material-icons">cloud_upload</i>'
      }
    },
    doneIcon: function () {
      if (this.useFontAwesome) {
        return '<i class="fa fa-check"></i>'
      } else {
        return ' <i class="material-icons">done</i>'
      }
    },
    errorIcon: function () {
      if (this.useFontAwesome) {
        return '<i class="fa fa-close"></i>'
      } else {
        return ' <i class="material-icons">error</i>'
      }
    }
  },
  mounted () {
    if (this.$isServer) {
      return
    }
    var Dropzone = require('dropzone')
    Dropzone.autoDiscover = false

    $('#add').on('click', function (e) {
      e.preventDefault()
      Dropzone.processQueue()
    })

    const element = document.getElementById(this.id)

    const custom = {
      clickable: this.clickable,
      thumbnailWidth: this.thumbnailWidth,
      thumbnailHeight: this.thumbnailHeight,
      maxFiles: this.maxNumberOfFiles,
      maxFilesize: this.maxFileSizeInMB,
      addRemoveLinks: this.showRemoveLink,
      acceptedFiles: this.acceptedFileTypes,
      autoProcessQueue: this.autoProcessQueue,
      headers: this.headers,
      previewTemplate: '<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px"><img data-dz-thumbnail /></div>  <div class="dz-details">    <div class="dz-size"><span data-dz-size></span></div>    <div class="dz-filename"><span data-dz-name></span></div>  </div>  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark">' + this.doneIcon + ' </div>  <div class="dz-error-mark">' + this.errorIcon + '</div></div>',
      dictDefaultMessage: this.cloudIcon + this.language.dictDefaultMessage,
      dictCancelUpload: this.language.dictCancelUpload,
      dictCancelUploadConfirmation: this.language.dictCancelUploadConfirmation,
      dictFallbackMessage: this.language.dictFallbackMessage,
      dictFallbackText: this.language.dictFallbackText,
      dictFileTooBig: this.language.dictFileTooBig,
      dictInvalidFileType: this.language.dictInvalidFileType,
      dictMaxFilesExceeded: this.language.dictMaxFilesExceeded,
      dictRemoveFile: this.language.dictRemoveFile,
      dictRemoveFileConfirmation: this.language.dictRemoveFileConfirmation,
      dictResponseError: this.language.dictResponseError
    }

    this.dropzone = new Dropzone(element, Object.assign({}, custom, this.dropzoneOptions))

    // Handle the dropzone events
    this.dropzone.on('thumbnail', (file) => {
      this.emitFile('vdropzone-thumbnail', file)
    })
    this.dropzone.on('addedfile', (file) => {
      this.emitFile('vdropzone-file-added', file)
    })
    this.dropzone.on('removedfile', (file) => {
      this.emitFile('vdropzone-removed-file', file)
    })
    this.dropzone.on('success', (file, response) => {
      this.emitFile('vdropzone-success', file, response)
    })
    this.dropzone.on('successmultiple', (file, response) => {
      this.emitFile('vdropzone-success-multiple', file, response)
    })
    this.dropzone.on('error', (file, error, xhr) => {
      this.$toast.warning('Ocorreu um erro ao adicionar o arquivo: ' + file.name + ', verifique o tamanho do arquivo')
      this.dropzone.removeFile(file)
      this.emitFile('vdropzone-error', file, error, xhr)
    })
    this.dropzone.on('sending', (file, xhr, formData) => {
      this.emitFile('vdropzone-sending', file, xhr, formData)
    })
    this.dropzone.on('sendingmultiple', (file, xhr, formData) => {
      this.emitFile('vdropzone-sending-multiple', file, xhr, formData)
    })
    this.dropzone.on('queuecomplete', (file, xhr, formData) => {
      this.emitFile('vdropzone-queue-complete', file, xhr, formData)
    })
    this.dropzone.on('maxfilesexceeded', (file) => {
      if (this.maxNumberOfFiles === 1) {
        this.dropzone.removeAllFiles()
        this.dropzone.addFile(file)
      } else {
        this.$toast.warning('Arquivo acima da quantidade máxima:' + file.name)
        this.dropzone.removeFile(file)
      }
    })
  },
  beforeDestroy () {
    this.dropzone.destroy()
  }
}
</script>

<style lang="less">
  @import url('../../../../node_modules/dropzone/dist/dropzone.css');
  .vue-dropzone{
    border: 2px solid #E5E5E5;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    &:hover {
      background-color: #F6F6F6;
    }
    i {
      color: #CCC;
    }
    .dz-preview {
      .dz-image {
        border-radius: 0px;
        &:hover {
          img {
            transform: none;
            -webkit-filter: none;
          }
        }
      }
      .dz-details {
        bottom: 0px;
        top: 0px;
        color: white;
        background-color: rgba(33, 150, 243, 0.8);
        transition: opacity .2s linear;
        text-align: left;
        .dz-filename span, .dz-size span {
          background-color: transparent;
        }
        .dz-filename:not(:hover) span {
          border: none;
        }
        .dz-filename:hover span {
          background-color: transparent;
          border: none;
        }
      }
      .dz-progress .dz-upload {
        background: #cccccc;
      }
      .dz-remove {
        position: absolute;
        z-index: 30;
        color: white;
        margin-left: 15px;
        padding: 10px;
        top: inherit;
        bottom: 15px;
        border: 2px white solid;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 1.1px;
        opacity: 0;
      }
      &:hover {
        .dz-remove {
          opacity: 1;
        }
      }
      .dz-success-mark, .dz-error-mark {
        margin-left: auto!important;
        margin-top: auto!important;
        width: 100%!important;
        top: 35%!important;
        left: 0;
        i {
          color: white!important;
          font-size: 5rem!important;
        }
      }
    }
  }
</style>
