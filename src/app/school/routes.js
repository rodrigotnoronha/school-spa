import { group, subGroup } from '@/helpers/routes'

import { routes as calendars } from './calendars'
import { routes as courses } from './courses'
import { routes as responsibles } from './responsibles'
import { routes as students } from './students'
import { routes as schools } from './schools'
import { routes as teachers } from './teachers'
import { routes as transports } from './transports'
import { routes as users } from './users'

const routes = group('/app/school', [
  ...subGroup('/calendars', calendars),
  ...subGroup('/courses', courses),
  ...subGroup('/responsibles', responsibles),
  ...subGroup('/schools', schools),
  ...subGroup('/students', students),
  ...subGroup('/teachers', teachers),
  ...subGroup('/transports', transports),
  ...subGroup('/users', users)
])

export default routes
