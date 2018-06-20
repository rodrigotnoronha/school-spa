import { mapActions } from 'vuex'
import { isEmpty, get } from 'lodash'
import { dateToShow, dateToIso } from '@/helpers/dates'
import dataUser from './dataUser'
import FileSaver from 'file-saver'
import base64ToBlob from '@/helpers/base64ToBlob'
import confirmation from '@/helpers/confirmation'

export default {
  ...mapActions(['updateAvatar']),
  prepareShow (data) {
    const user = {...dataUser(), ...data}
    user.birthdate = dateToShow(user.birthdate)

    return user
  },
  beforeSave (user) {
    if (isEmpty(user.password) && isEmpty(user.password_confirmation)) {
      return true
    }
    if (user.password !== user.password_confirmation) {
      this.$toast.warning('As senhas não confere')
      return false
    }

    return true
  },
  prepareSave (user) {
    user.id = get(this.$route.params, 'id', 'me')
    user.birthdate = dateToIso(user.birthdate)

    return user
  },
  afterLoadItem (data) {
    const { name } = data
    this.name = name

    return data
  },
  setAddress (address) {
    this.user.address = {
      ...this.user.address,
      ...address
    }
  },
  doToggleModal (value) {
    this.showModal = value
  },
  onUploadedAvatar (uploaded, data) {
    if (!uploaded) {
      return
    }
    this.showModal = false
    const avatar = data.avatar + '?' + new Date()
    if (this.user.id === 'me' || this.user.id === this.userId) {
      this.updateAvatar(avatar)
    }
    this.user.avatar = avatar
    this.$toast.success('Foto alterada!')
  },
  doDownloadDocument (kind) {
    this.$resource.get(this.user.id + `/documents/${kind}`)
      .then(({data}) => {
        /* the saveAs call downloads a file on the local machine */
        FileSaver.saveAs(new window.Blob([base64ToBlob(data.content)], {type: 'application/octet-stream'}), data.filename)
      })
  },
  doDeleteDocument (kind, label) {
    const message = {
      label: null,
      title: null,
      message: `Tem certeza que deseja remover a <b>${label}</b>`,
      cancel: null
    }

    confirmation(confirm => {
      if (!confirm) {
        return
      }

      this.doDeleteDocumentWihtouConfirm(kind)
    }, message.title, message.label, message.message, message.cancel)
  },
  doDeleteDocumentWihtouConfirm (kind) {
    this.$resource.delete(this.user.id + `/documents/${kind}`)
      .then(({data}) => {
        this.user.documents = data.documents
      })
  },
  doToggleDocument (value, kind, label) {
    this.kindDocument = kind
    this.labelDocument = label
    this.doToggleModalDocument(value)
  },
  doToggleModalDocument (value) {
    this.showModalDocument = value
  },
  onUploadedDocument (uploaded, data) {
    if (!uploaded) {
      return
    }

    this.user.documents = {...data.documents}
    this.$toast.success('Arquivo enviado com sucesso')

    this.showModalDocument = false
  }
}
