import moment from 'moment'

export default () => ({
  loading: false,
  birthday: 'today',
  year: parseInt(moment().format('YYYY')),
  two_month: null,
  dashboard: {
    students: null,
    teachers: null,
    available_vacancies: null,
    vehicles: null,
    best_averages: [],
    worst_averages: [],
    top_absences: [],
    birthdays: [],
    years: [
      {
        id: parseInt(moment().format('YYYY')),
        label: moment().format('YYYY')
      }
    ]
  }
})
