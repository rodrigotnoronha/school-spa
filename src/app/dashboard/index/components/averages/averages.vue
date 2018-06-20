<script>
import Student from './student'

export default {
  name: 'dashborad-averages',

  components: {
    Student
  },
  data () {
    return {
      students: [],
      two_month: null,
      options: [
        {
          id: null,
          label: 'Todos'
        },
        {
          id: 1,
          label: '1° bimestre'
        },
        {
          id: 2,
          label: '2° bimestre'
        },
        {
          id: 3,
          label: '3° bimestre'
        },
        {
          id: 4,
          label: '4° bimestre'
        }
      ]
    }
  },
  methods: {
    change () {
      this.$emit('input', this.two_month)
    }
  },
  mounted () {
    this.two_month = this.value
  },
  props: {
    averages: {
      type: Array,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    routeStudentEdit: {
      type: String,
      required: true
    },
    value: null
  }
}
</script>
