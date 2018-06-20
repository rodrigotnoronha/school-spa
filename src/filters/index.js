import strPad from './str_pad'
import getValue from './get_value'

export default (Vue) => {
  Vue.filter('strPad', strPad)

  Vue.filter('getValue', getValue)
}
