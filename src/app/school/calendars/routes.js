import { route, meta, subGroup } from '@/helpers/routes'

import Form from './schooldays/form'
import { routes as twoMonths } from './two_months'

export default [
  route('school_days.index', '/school_days', Form, meta('Calendário Escolar')),
  ...subGroup('/two_months', twoMonths)
]
