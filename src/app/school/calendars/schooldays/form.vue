<script>
import fullCalendar from 'vue-fullcalendar'
import moment from 'moment'
import { find } from 'lodash'

const hasHoliday = (items, date) => find(items, {date: date})

const setHoliday = (element) => {
  element.css({
    'font-weight': 'bold',
    'font-size': '15px',
    'color': 'red'
  })
}

const removeHoliday = (element) => {
  element.removeAttr('style')
  element.children().removeAttr('style')
}

export default {
  name: 'crud-form',

  components: {
    fullCalendar
  },

  computed: {
    options () {
      const year = moment(this.schoolDays[0].date).format('YYYY')

      return {
        startYear: year,
        yearChanged: this.yearChanged,
        clickDay: this.clickDay,
        customDayRenderer: this.customDayRenderer
      }
    }
  },
  data () {
    return {
      loading: true,
      schoolDays: []
    }
  },

  methods: {
    doLoad () {
      this.loading = true
      this.$resource.get('holidays_in_current_year')
        .then(({data}) => {
          this.schoolDays = data
          this.loading = false
        })
        .catch(er => {
          this.loading = false
        })
    },
    yearChanged (element, year) {
      if (year < 2018 || year > 2030) {
        return
      }
      this.loading = true
      this.$resource.get('holidays_from_year/' + year)
        .then(({data}) => {
          this.schoolDays = data
          this.loading = false
        })
        .catch(er => {
          this.loading = false
        })
    },
    clickDay ({element, date}) {
      const currentDate = moment(date).format('YYYY-MM-DD')
      element.children().each((index, current) => {
        this.doToggle(element, currentDate)
      })
    },
    customDayRenderer: function (element, date) {
      const current = moment(date).format('YYYY-MM-DD')
      const schoolDay = hasHoliday(this.schoolDays, current)
      if (schoolDay) {
        setHoliday(element)
      }
    },
    doToggle (element, date) {
      this.$resource.update('toggle', {
        date
      })
      .then(({data}) => {
        if (data.school_day) {
          return removeHoliday(element)
        }

        return setHoliday(element, data.id)
      })
    }
  },

  mounted () {
    this.doLoad()
  },

  resourcePath: '/school/calendars/school_days'
}
</script>

<template lang="pug">
  page(title="Calendário escolar", subTitle="Selecione os dias que não terá aula (para todas as escolas)")
    section.content
      .row
        .col-md-12
          .box.box-success(style='padding-bottom: 20px;')
            .box-body
              year-calendar(v-if="!loading", id="calendar", :options="options")
              .form-group.col-mod-12
                label.text-danger *Dias em vermelho são dias não letivos
</template>
