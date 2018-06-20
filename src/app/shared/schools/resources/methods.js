export default {
  afterLoadItem (data) {
    const { name } = data
    this.name = name

    return data
  }
}
