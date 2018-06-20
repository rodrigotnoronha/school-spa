import { isEmpty } from 'lodash'

export default {
  getTitleForm () {
    const entity = this[this.entity]

    return isEmpty(entity.id) ? this.titleFormCreate : this.titleFormEdit
  },
  getRouterIndex () {
    return this.prefixRouter + 'index'
  },
  getRouterCreate () {
    return this.prefixRouter + 'create'
  },
  getRouterEdit () {
    return this.prefixRouter + 'edit'
  },
  getMessageConfirmation () {
    return {
      cancel: 'Cancelar',
      label: 'Remover',
      title: 'Confirmar Remoção',
      message: 'Tem certeza que deseja remover esse registro?'
    }
  }
}
