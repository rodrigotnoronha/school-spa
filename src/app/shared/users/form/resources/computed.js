import { isEmpty, get } from 'lodash'
import { dateToIso } from '@/helpers/dates'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  ...mapGetters(['userId', 'currentUser']),
  countryRegisterExists () {
    return !!get(this.user, 'documents.country_register', false)
  },
  stateRegisterExists () {
    return !!get(this.user, 'documents.state_register', false)
  },
  addressExists () {
    return !!get(this.user, 'documents.address', false)
  },
  age () {
    if (isEmpty(this.user.birthdate)) {
      return 0
    }
    const date = dateToIso(this.user.birthdate)

    return moment().diff(date, 'years', false)
  }
}
