import { map } from 'lodash'

const parseYears = years => {
  return map(years, year => {
    return {
      id: year,
      label: year
    }
  })
}

const parseDashboard = dashboard => {
  dashboard.years = parseYears(dashboard.years)

  return dashboard
}

export default {
  get () {
    this.loading = true

    const query = {birthday: this.birthday, year: this.year, two_month: this.two_month}

    this.$resource.get('', query)
      .then(({data}) => {
        this.dashboard = parseDashboard(data)
        this.loading = false
      })
      .catch(({data}) => {
        this.loading = false
      })
  }
}
