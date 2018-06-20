<script>
export default {
  name: 'document-list',

  data () {
    return {
      fileExists: false
    }
  },
  methods: {
    doToggleModal () {
      this.$emit('on-toggle', true, this.kind, this.label)
    },
    doDeleteDOcument () {
      this.$emit('on-delete', this.kind, this.label)
    },
    doDownloadDocument () {
      this.$emit('on-download', this.kind)
    }
  },
  mounted () {
    this.fileExists = this.exists
  },
  props: {
    exists: {
      type: Boolean,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  watch: {
    exists (value) {
      this.fileExists = value
    }
  }
}
</script>

<template lang="pug">
  li
    // todo text
    span.text
      a(v-if="fileExists", href="#", @click.prevent="doDownloadDocument()") {{ label }}
      a(v-if="!fileExists", href="#", @click.prevent="doToggleModal()") {{ label }}
    // Emphasis label
    small.label.label-danger(v-if="!fileExists")
      i.fa.fa-clock-o
      |  Pendente
    small.label.label-success(v-if="fileExists")
      i.fa.fa-clock-o
      |  OK
    .tools
      i.fa.fa-upload(v-if="!fileExists", @click.prevent="doToggleModal()")
      i.fa.fa-download(v-if="fileExists", @click.prevent="doDownloadDocument()")
      i.fa.fa-trash-o(v-if="fileExists", @click.prevent="doDeleteDOcument")
</template>
