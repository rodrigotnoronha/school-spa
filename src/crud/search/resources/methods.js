export default {
  doSearchByPage (page = 1) {
    this.search.page = page
    this.doLoadSearch(null, this.search)
  },
  beforeSearch (search) {
    return search
  },
  doLoadSearch (search = {}) {
    this.loading = true
    const newSearch = {...this.search, ...search}

    this.$resource.get('', newSearch)
      .then(({data, meta}) => {
        this.pagination = meta.pagination
        this[this.entities] = this.afterLoadItems(data, meta)
        this.loading = false
      })
      .catch(({data}) => {
        this.loading = false
      })
  },
  doSearch (search) {
    this.search = {
      ...this.search,
      ...this.beforeSearch(search),
      page: 1,
      includes: this.includes
    }

    this.doLoadSearch(this.search)
  },
  onSelected (item) {
    this.$emit('on-selected', item)
  }
}
