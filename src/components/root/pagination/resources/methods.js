import { range } from 'lodash'

const limit = (chunk) => {
  return Math.floor(chunk / 2)
}

const pageStart = (current, chunk, total) => {
  let page = current - limit(chunk)
  if (page < 1) {
    return 1
  }

  return page
}

const pageEnd = (current, chunk, total) => {
  let page = current + (chunk - 1)
  if (page > total) {
    return total
  }

  return page
}

const rangeStart = (start, end, chunk) => {
  const newStart = end - chunk + 1
  if (newStart < 1) {
    return 1
  }
  if (newStart < start) {
    return newStart
  }

  return start
}

export default {
  doStart (pagination) {
    if (pagination.total <= 1) {
      this.pages = [1]
      return
    }

    let start = pageStart(pagination.current_page, this.chunk, pagination.total_pages)
    let end = pageEnd(start, this.chunk, pagination.total_pages)
    start = rangeStart(start, end, this.chunk)

    this.pages = range(start, end + 1)
  },
  goPrevious () {
    if (this.pagination.current_page === 1) {
      return
    }

    return this.goPage(this.pagination.current_page - 1)
  },
  goNext () {
    if (this.pagination.total_pages === this.pagination.current_page) {
      return
    }

    return this.goPage(this.pagination.current_page + 1)
  },
  goPage (page) {
    this.$emit('pagination-changed-page', page)
  }
}
