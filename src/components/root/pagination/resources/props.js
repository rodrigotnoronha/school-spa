export default {
  pagination: {
    type: Object,
    default: () => ({})
  },
  chunk: {
    type: Number,
    default: 10
  },
  hideWhenTheTotalIsOne: {
    type: Boolean,
    default: true
  }
}
