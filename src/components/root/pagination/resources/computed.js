export default {
  visibled () {
    if (this.pagination.total_pages > 1) {
      return true
    }

    return !this.hideWhenTheTotalIsOne
  }
}
