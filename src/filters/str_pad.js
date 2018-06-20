export default (value, digits, pad) => {
  var total = digits || 2
  var str = value || ''
  var strPad = pad || '0'

  while ((str.toString().length < total)) {
    str = strPad + str.toString()
  }

  return str.toString()
}
