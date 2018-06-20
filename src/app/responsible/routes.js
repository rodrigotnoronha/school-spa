import { group, subGroup } from '@/helpers/routes'

import { routes as Students } from './students'

export default group('/app/responsible', subGroup('/students', Students))
