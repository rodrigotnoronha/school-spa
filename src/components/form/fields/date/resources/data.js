import optionsProps from './optionsProps'

const hours = () => {
  const list = []
  let hour = 24
  while (hour > 0) {
    hour--
    list.push({
      checked: false,
      value: hour < 10 ? '0' + hour : hour
    })
  }

  return list
}

const mins = () => {
  const list = []
  let min = 60
  while (min > 0) {
    min--
    list.push({
      checked: false,
      value: min < 10 ? '0' + min : min
    })
  }

  return list
}

export default () => ({
  style: {},
  option: optionsProps(),
  internalValue: '',
  hours: hours(),
  mins: mins(),
  showInfo: {
    hour: false,
    day: false,
    month: false,
    year: false,
    check: false
  },
  displayInfo: {
    month: ''
  },
  library: {
    week: [],
    month: [],
    year: []
  },
  checked: {
    oldtime: '',
    currentMoment: null,
    year: '',
    month: '',
    day: '',
    hour: '00',
    min: '00'
  },
  dayList: [],
  selectedDays: []
})
