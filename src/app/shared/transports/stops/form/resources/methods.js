export default {
  afterLoadItem (data) {
    const { name } = data
    this.name = name

    return data
  },
  afterSave (itemSaved, item) {
    if (!this.emit) {
      return this.$router.push({ name: this.getRouterIndex })
    }
    this.stop = {
      id: null,
      label: null,
      address: {
        street: null,
        number: null,
        district: null,
        city: null,
        state: null,
        complement: null,
        zip: null
      }
    }

    return this.$emit('saved', itemSaved)
  },
  setAddress (address) {
    this.stop.address = {
      ...this.stop.address,
      ...address
    }
  }
}
