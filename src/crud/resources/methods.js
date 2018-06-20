import { map } from 'lodash'
import confirmation from '@/helpers/confirmation'

export default {
  getItem (id) {
    if (!this.beforeGetItem(id)) {
      return
    }
    this.loading = true

    this.$resource.get(id, {includes: this.includes})
      .then(({data, meta}) => {
        this[this.entity] = this.prepareShow(this.afterLoadItem(data, meta))
        this.loading = false
      })
      .catch(({data}) => {
        this.loading = false
      })
  },
  doSave () {
    const entity = this.prepareSave({...this[this.entity]})

    if (!this.beforeSave(entity)) {
      return
    }

    this.$resource.save(entity)
      .then(({data}) => {
        return this.afterSave(data, entity)
      })
      .catch(({data}) => {
        this.errors = data
      })
  },
  doDelete (item) {
    this.currentEntity = item

    const message = {
      label: null,
      title: null,
      message: null,
      cancel: null,
      ...this.getMessageConfirmation
    }

    confirmation(confirm => {
      if (!confirm) {
        return
      }

      this.doDeleteWithoutConfirmation(item)
    }, message.title, message.label, message.message, message.cancel)
  },
  doDeleteWithoutConfirmation (item) {
    this.currentEntity = item

    const entity = {...item}

    if (!this.beforeDelete(entity)) {
      return
    }

    this.$resource.delete(entity.id)
      .then(({data}) => {
        this.afterDelete(item, data)
      })
  },
  afterSave (itemSaved, item) {
    if (this.emit) {
      return this.$emit('saved', itemSaved)
    }

    return this.$router.push({ name: this.getRouterIndex })
  },
  afterDelete (item, itemDeleted) {
    const entities = this.data
    const index = entities.indexOf(item)

    entities.splice(index, 1)
    this[this.entities] = [...entities]
  },
  afterLoadItem (data, meta) {
    return data
  },
  afterLoadItems (data, meta) {
    return map(this.afterLoadItem(data, meta), this.prepareShow)
  },
  beforeGetItem (id) {
    return true
  },
  beforeDelete (item) {
    return true
  },
  beforeSave (item) {
    return true
  },
  prepareSave (item) {
    return item
  },
  prepareShow (item) {
    return item
  }
}
