<script>
import floatLabel from 'vue-float-label/components/FloatLabel'

export default {
  extends: floatLabel,
  props: {
    recheck: true
  },
  methods: {
    check () {
      this.formEl = this.$el.querySelector('input, textarea, select')
      this.formEl.addEventListener('input', this.updateIsActive)
      this.formEl.addEventListener('input', this.updateIsFocused)
      this.formEl.addEventListener('blur', this.updateIsFocused)
      this.formEl.addEventListener('focus', this.updateIsFocused)
      this.dispatchInput()
      setTimeout(() => {
        this.formEl.addEventListener('input', this.updateIsActive)
        this.dispatchInput()
      }, 2000)
    }
  },
  mounted () {
    this.check()
  },
  watch: {
    recheck (val) {
      setTimeout(() => {
        this.formEl.addEventListener('input', this.updateIsActive)
        this.dispatchInput()
      }, 100)
      // this.check()
    }
  }
}
</script>
