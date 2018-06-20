export default {
  data () {
    return {
      prefixRouter: 'school.users.'
    }
  },
  props: {
    noDelete: {
      type: Boolean,
      default: true
    }
  },
  resourcePath: '/school/users/users'
}
