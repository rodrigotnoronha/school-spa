export default {
  getMessageConfirmation () {
    return {
      message: 'Tem certeza que deseja remover a parada <b>' + this.currentEntity.label + '</b>?'
    }
  }
}
