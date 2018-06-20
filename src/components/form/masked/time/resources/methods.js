import { format } from '../../../MaskTextField/format'

import { isEmpty, get } from 'lodash'

const getValue = (value, position) => {
  return get(value, position, '')
}

const getMask = (value, mask) => {
  if (value.length > 2) {
    return mask
  }

  return '##'
}

const keyValids = [
  'Control',
  'Enter',
  'Tab',
  'Delete',
  'Backspace',
  'Home',
  'End',
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight'
]

const copyCutOrPast = (event) => {
  return (['KeyC', 'KeyX', 'KeyV'].includes(event.code) && event.ctrlKey)
}

export default {
  change (event) {
    this.$emit('input', this.valueInput)
    this.$emit('change', this.valueInput)
  },
  keydown (event) {
    const isNumber = new RegExp(/[0-9]/g)
    if (!(keyValids.includes(event.key)) && (!isNumber.exec(event.key)) && (event.key !== ':')) {
      if (!copyCutOrPast(event)) {
        event.preventDefault()
      }
    }
  },
  // Formats when keyup
  keyup (event) {
    event.preventDefault()
    let value = ''
    if (isEmpty(this.valueInput)) {
      return
    }
    value = this.valueInput.replace(/[^0-9]+/g, '')
    value = format(value, getMask(this.valueInput, this.mask))
    if (value.length === 0) {
      this.valueInput = ''
      return
    }
    let first = getValue(value, 0)
    let second = getValue(value, 1)
    let third = getValue(value, 2)
    let fourth = getValue(value, 3)
    let fifth = getValue(value, 4)
    if (parseInt(first) > 2) {
      first = ''
    }
    if (parseInt(first) === 2 && parseInt(second) > 4) {
      second = ''
    }
    if (isEmpty(second) || isEmpty(fourth)) {
      // third = ''
      fourth = ''
      fifth = ''
    }
    if (fourth > 5) {
      fourth = ''
    }
    if (isEmpty(fourth)) {
      fifth = ''
    }
    this.valueInput = first + second + third + fourth + fifth
  }
}
