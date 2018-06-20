export { default as store } from './store'

export default (Vue) => {
  Vue.component('page', require('@/layout/page/page'))

  Vue.component('emtudo-select', require('./root/select/select'))
  Vue.component('confirm', require('./root/confirm'))
  Vue.component('year-calendar', require('./root/year-calendar'))
  Vue.component('modal', require('./root/modal/modal'))

  // form components
  // text checkbox
  Vue.component('f-checkbox', require('./form/fields/checkbox'))
  // text input
  Vue.component('f-text', require('./form/fields/text'))
  // email input
  Vue.component('f-email', require('./form/fields/email'))
  // text input
  Vue.component('f-password', require('./form/fields/password'))
  // select input
  Vue.component('f-select', require('./form/fields/select'))
  // select month
  Vue.component('f-select-month-disabled-january', require('./form/fields/select-month-disabled-january'))
  // select teacher
  Vue.component('f-select-teacher', require('./form/fields/select-teacher'))
  // select skill
  Vue.component('f-select-skill', require('./form/fields/select-skill'))
  // select student
  Vue.component('f-select-student', require('./form/fields/select-student'))
  // select responsible
  Vue.component('f-select-responsible', require('./form/fields/select-responsible'))
  // select manager
  Vue.component('f-select-manager', require('./form/fields/select-manager'))
  // select user
  Vue.component('f-select-user', require('./form/fields/select-user'))
  // select quiz
  Vue.component('f-select-quiz', require('./form/fields/select-quiz'))
  // select teacher-course
  Vue.component('f-select-teacher-course', require('./form/fields/select-teacher-course'))
  // select course
  Vue.component('f-select-course', require('./form/fields/select-course'))
  // select student-group
  Vue.component('f-select-student-group', require('./form/fields/select-student-group'))
  // select teacher-group
  Vue.component('f-select-teacher-group', require('./form/fields/select-teacher-group'))
  // select group
  Vue.component('f-select-group', require('./form/fields/select-group'))
  // select subject
  Vue.component('f-select-subject', require('./form/fields/select-subject'))
  // select active
  Vue.component('f-select-ative', require('./form/fields/select-active'))
  // select yes or no and both
  Vue.component('f-select-yes-no-both', require('./form/fields/select-yes-no-both'))
  // select yes or no
  Vue.component('f-select-yes-no', require('./form/fields/select-yes-no'))
  // select active or disabled
  Vue.component('f-select-active-disabled', require('./form/fields/select-active-disabled'))
  // select sex
  Vue.component('f-select-sex', require('./form/fields/select-sex'))
  // select state
  Vue.component('f-select-state', require('./form/fields/select-state'))
  // select state entity
  Vue.component('f-select-state-entity', require('./form/fields/select-state-entity'))
  // select marital status
  Vue.component('f-select-marital-status', require('./form/fields/select-marital-status'))
  // select route
  Vue.component('f-select-route', require('./form/fields/select-route'))
  // zip code
  Vue.component('f-zip', require('./form/masked/zip/zip'))
  // onlynumber.
  Vue.component('f-only-number', require('./form/masked/onlynumber/onlynumber'))
  // document.
  Vue.component('f-document', require('./form/masked/document/document'))
  // document cpf.
  Vue.component('f-document-cpf', require('./form/masked/document/document-cpf'))
  // document cnpj.
  Vue.component('f-document-cnpj', require('./form/masked/document/document-cnpj'))
  // date.
  Vue.component('i-date', require('./form/masked/date/date'))
  // time.
  Vue.component('f-time', require('./form/masked/time/time'))
  // phone.
  Vue.component('f-phone', require('./form/masked/phone/phone'))
  // currency.
  Vue.component('f-currency', require('./form/fields/masked/currency'))
  // file text
  Vue.component('f-file-text', require('./form/fields/file-text'))
  // file avatar
  Vue.component('f-file-avatar', require('./form/fields/file-avatar'))
  // file document
  Vue.component('f-file-document', require('./form/fields/file-document'))
  // file content
  Vue.component('f-file-content', require('./form/fields/file-content'))

  // f-maskdate
  Vue.component('f-maskdate', require('./form/fields/masked/date'))

  // f-date
  Vue.component('f-date', require('./form/fields/date/date'))

  // f date picker
  Vue.component('f-datepicker', require('./form/fields/datepicker'))

  // pagination
  Vue.component('pagination', require('./root/pagination/pagination'))
}
