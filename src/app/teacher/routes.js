import { group, subGroup } from '@/helpers/routes'

import { routes as courses } from './courses'
import { routes as responsibles } from './responsibles'
import { routes as students } from './students'

const routes = group('/app/teacher', [
  ...subGroup('/courses', courses),
  ...subGroup('/responsibles', responsibles),
  ...subGroup('/students', students)
])

export default routes
