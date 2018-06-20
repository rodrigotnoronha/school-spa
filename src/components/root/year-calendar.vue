<script>
import jquery from 'jquery'
require('bootstrap-year-calendar')
require('@/plugins/bootstrap-year-calendar/js/languages/bootstrap-year-calendar.pt.js')

const optionsDefault = {
  startYear: 2018,
  minDate: new Date(2017, 12, 1),
  maxDate: new Date(2030, 1, 1)
}

const optionsForce = {
  language: 'pt'
}

export default {
  name: 'year-calendar',
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        customDayRenderer: function (element, date) {
        },
        clickDay: (cell, current) => {
          $(cell.element[0]).css('font-weight', 'bold')
          $(cell.element[0]).css('font-size', '15px')
          $(cell.element[0]).css('color', 'red')
        }
      })
    }
  },
  methods: {
    doLoad () {
      // jquery.fn.calendar.dates.pt['months'] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      const options = {
        ...optionsDefault,
        ...this.options,
        ...optionsForce
      }
      jquery('#' + this.id).calendar({
        ...options,
        renderEnd: function (element) {
          if (!options.yearChanged) {
            return
          }
          $('#' + this.id + ' > div.calendar-header').find('.year-title').each((index, item) => {
            const year = $(item).text()
            $(item).click(() => {
              options.yearChanged(element, year)
            })
          })
          $('#' + this.id + ' > div.calendar-header').find('th.next').each((index, item) => {
            $(item).click(() => {
              options.yearChanged(element, element.currentYear + 1)
            })
          })
          $('#' + this.id + ' > div.calendar-header').find('th.prev').each((index, item) => {
            $(item).click(() => {
              options.yearChanged(element, element.currentYear - 1)
            })
          })
        },
        dayContextMenu: function (options) {
          console.log('dayContextMenu')
          console.log(options)
        },
        selectRange: function (options) {
          console.log('selectRange')
          console.log(options)
        }
      })
    }
  },
  mounted () {
    this.doLoad()
  }
}
</script>

<template lang="pug">
  div(:id='id')
</template>
