import optionsProps from './optionsProps'

export default function () {
  const options = optionsProps()
  this.option = {...options, ...this.options}

  // this.style = {...this.style, 'z-index': 999999}

  this.library.week = this.option.week
  this.library.month = this.option.month
  this.internalValue = this.value
}
