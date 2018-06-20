import imoment from 'moment'
import { isEmpty, get } from 'lodash'

const days = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

const activeDay = (moment, only) => {
  if (isEmpty(only)) {
    return true
  }

  const onlyDay = get(days, only, false)

  return moment.weekday() === onlyDay
}

const interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const moment = interopRequireDefault(imoment)

export default {
  pad (n) {
    n = Math.floor(n)

    return n < 10 ? '0' + n : n
  },
  nextMonth (type) {
    let next = null
    type === 'next' ? next = (0, moment.default)(this.checked.currentMoment).add(1, 'M') : next = (0, moment.default)(this.checked.currentMoment).add(-1, 'M')
    this.showDay(next)
  },
  showDay (time) {
    if (time === undefined || !(0, moment.default)(time, this.option.format).isValid()) {
      this.checked.currentMoment = (0, moment.default)()
    } else {
      this.checked.currentMoment = (0, moment.default)(time, this.option.format)
    }
    this.showOne('day')
    this.checked.year = (0, moment.default)(this.checked.currentMoment).format('YYYY')
    this.checked.month = (0, moment.default)(this.checked.currentMoment).format('MM')
    this.checked.day = (0, moment.default)(this.checked.currentMoment).format('DD')
    this.displayInfo.month = this.library.month[(0, moment.default)(this.checked.currentMoment).month()]
    let days = []
    const currentMoment = this.checked.currentMoment
    let firstDay = (0, moment.default)(currentMoment).date(1).day()
    // gettting previous and next month
    // let currentMonth = moment(currentMoment)
    const previousMonth = (0, moment.default)(currentMoment)
    const nextMonth = (0, moment.default)(currentMoment)
    nextMonth.add(1, 'months')
    previousMonth.subtract(1, 'months')
    const monthDays = (0, moment.default)(currentMoment).daysInMonth()
    const oldtime = this.checked.oldtime
    for (let i = 1; i <= monthDays; ++i) {
      days.push({
        value: i,
        inMonth: true,
        unavailable: !activeDay((0, moment.default)(currentMoment).date(i), this.onlyDay),
        checked: false,
        moment: (0, moment.default)(currentMoment).date(i)
      })
      if (i === Math.ceil((0, moment.default)(currentMoment).format('D')) && (0, moment.default)(oldtime, this.option.format).year() === (0, moment.default)(currentMoment).year() && (0, moment.default)(oldtime, this.option.format).month() === (0, moment.default)(currentMoment).month()) {
        days[i - 1].checked = true
      }
      this.checkBySelectDays(i, days)
    }
    if (firstDay === 0) {
      firstDay = 7
    }
    for (let i = 0; i < firstDay - (this.option.SundayFirst ? 0 : 1); i++) {
      const passiveDay = {
        value: previousMonth.daysInMonth() - i,
        inMonth: false,
        action: 'previous',
        unavailable: false,
        checked: false,
        moment: (0, moment.default)(currentMoment).date(1).subtract(i + 1, 'days')
      }
      days.unshift(passiveDay)
    }
    if (this.limit.lengthMaskedDate > 0) {
      let _iteratorNormalCompletion = true
      let _didIteratorError = false

      try {
        for (var _iterator = this.limit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          let li = _step.value

          switch (li.type) {
            case 'fromto':
              days = this.limitFromTo(li, days)
              break
            case 'weekday':
              days = this.limitWeekDay(li, days)
              break
          }
        }
      } catch (err) {
        _didIteratorError = true
      //  _iteratorError = err
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return()
          }
        } finally {
          if (_didIteratorError) {
          //  throw _iteratorError
          }
        }
      }
    }
    let passiveDaysAtFinal = 42 - days.length
    for (let i = 1; i <= passiveDaysAtFinal; i++) {
      const passiveDay = {
        value: i,
        inMonth: false,
        action: 'next',
        unavailable: false,
        checked: false,
        moment: (0, moment.default)(currentMoment).add(1, 'months').date(i)
      }
      days.push(passiveDay)
    }
    this.dayList = days
  },
  checkBySelectDays (d, days) {
    this.selectedDays.forEach(day => {
      if (this.checked.year === (0, moment.default)(day).format('YYYY') && this.checked.month === (0, moment.default)(day).format('MM') && d === Math.ceil((0, moment.default)(day).format('D'))) {
        days[d - 1].checked = true
      }
    })
  },
  limitWeekDay (limit, days) {
    days.map(day => {
      if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
        day.unavailable = true
      }
    })

    return days
  },
  limitFromTo (limit, days) {
    if (limit.from || limit.to) {
      days.map(day => {
        if (this.getLimitCondition(limit, day)) {
          day.unavailable = true
        }
      })
    }

    return days
  },
  getLimitCondition (limit, day) {
    const tmpMoment = (0, moment.default)(this.checked.year + '-' + this.pad(this.checked.month) + '-' + this.pad(day.value))
    if (limit.from && !limit.to) {
      return !tmpMoment.isAfter(limit.from)
    }
    if (!limit.from && limit.to) {
      return !tmpMoment.isBefore(limit.to)
    }

    return !tmpMoment.isBetween(limit.from, limit.to)
  },
  checkDay (obj) {
    if (!activeDay(obj.moment, this.onlyDay)) {
      return
    }
    if (obj.unavailable || obj.value === '') {
      return false
    }
    if (!obj.inMonth) {
      this.nextMonth(obj.action)
    }
    if (this.option.type === 'day' || this.option.type === 'min') {
      this.dayList.forEach(function (x) {
        x.checked = false
      })
      this.checked.day = this.pad(obj.value)
      obj.checked = true
    } else {
      const day = this.pad(obj.value)
      const ctime = this.checked.year + '-' + this.checked.month + '-' + day
      if (obj.checked === true) {
        obj.checked = false
        const index = this.selectedDays.indexOf(ctime)
        this.selectedDays.splice(index, 1)
      } else {
        this.selectedDays.push(ctime)
        obj.checked = true
      }
    }
    switch (this.option.type) {
      case 'day':
        this.picked()
        break
      case 'min':
        this.showOne('hour')
        // shift activated time items to visible position.
        this.shiftActTime()
        break
    }
  },
  showYear () {
    let year = (0, moment.default)(this.checked.currentMoment).year()
    this.library.year = []
    let yearTmp = []
    for (let i = year - 100; i < year + 5; ++i) {
      yearTmp.push(i)
    }
    this.library.year = yearTmp
    this.showOne('year')
    // this.$nextTick(() => {
    //   const listDom = document.getElementById('yearList')
    //   listDom.scrollTop = listDom.scrollHeight - 100
    //   this.addYear()
    // })
  },
  showOne (type) {
    switch (type) {
      case 'year':
        this.showInfo.hour = false
        this.showInfo.day = false
        this.showInfo.year = true
        this.showInfo.month = false
        break
      case 'month':
        this.showInfo.hour = false
        this.showInfo.day = false
        this.showInfo.year = false
        this.showInfo.month = true
        break
      case 'day':
        this.showInfo.hour = false
        this.showInfo.day = true
        this.showInfo.year = false
        this.showInfo.month = false
        break
      case 'hour':
        this.showInfo.hour = true
        this.showInfo.day = false
        this.showInfo.year = false
        this.showInfo.month = false
        break
      default:
        this.showInfo.day = true
        this.showInfo.year = false
        this.showInfo.month = false
        this.showInfo.hour = false
    }
  },
  showMonth () {
    this.showOne('month')
  },
  addYear () {
    const listDom = document.getElementById('yearList')

    listDom.addEventListener('scroll', e => {
      if (listDom.scrollTop < listDom.scrollHeight - 100) {
        const len = this.library.year.length
        const lastYear = this.library.year[len - 1]
        this.library.year.push(lastYear + 1)
      }
    }, false)
  },
  setYear (year) {
    this.checked.currentMoment = (0, moment.default)(year + '-' + this.checked.month + '-' + this.checked.day)
    this.showDay(this.checked.currentMoment)
  },
  setMonth (month) {
    let mo = this.library.month.indexOf(month) + 1
    if (mo < 10) {
      mo = '0' + '' + mo
    }
    this.checked.currentMoment = (0, moment.default)(this.checked.year + '-' + mo + '-' + this.checked.day)
    this.showDay(this.checked.currentMoment)
  },
  showCheck () {
    if (isEmpty(this.internalValue)) {
      this.showDay()
      this.showInfo.check = true
      return
    }
    if (this.option.type === 'day' || this.option.type === 'min') {
      this.checked.oldtime = this.internalValue
      this.showDay(this.internalValue)
    } else {
      this.selectedDays = JSON.parse(this.internalValue)
      if (this.selectedDays.length) {
        this.checked.oldtime = this.selectedDays[0]
        this.showDay(this.selectedDays[0])
      } else {
        this.showDay()
      }
    }
    this.showInfo.check = true
  },
  setTime (type, obj, list) {
    let _iteratorNormalCompletion2 = true
    let _didIteratorError2 = false

    try {
      for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        let item = _step2.value

        item.checked = false
        if (item.value === obj.value) {
          item.checked = true
          this.checked[type] = item.value
        }
      }
    } catch (err) {
      _didIteratorError2 = true
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return()
        }
      } finally {
        if (_didIteratorError2) {
        }
      }
    }
  },
  picked () {
    if (this.option.type === 'day' || this.option.type === 'min') {
      const ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour + ':' + this.checked.min
      this.checked.currentMoment = (0, moment.default)(ctime, 'YYYY-MM-DD HH:mm')
      this.internalValue = (0, moment.default)(this.checked.currentMoment).format(this.option.format)
    } else {
      this.internalValue = JSON.stringify(this.selectedDays)
    }
    this.showInfo.check = false
    this.style = {...this.style, 'z-index': 1}
    this.$emit('input', this.internalValue)
    this.$emit('change', this.internalValue)
  },
  dismiss (evt) {
    if (evt.target.className !== 'datepicker-overlay') {
      return
    }
    this.style = {...this.style, 'z-index': 1}
    if (this.option.dismissible === undefined || this.option.dismissible) {
      this.showInfo.check = false
      this.$emit('cancel')
    }
  },
  shiftActTime () {
    // shift activated time items to visible position.
    // this.$nextTick(function () {
    //   if (!document.querySelector('.hour-item.active')) {
    //     return false
    //   }
    //   document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop || 0) - 250
    //   document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) - 250
    // })
  }
}
