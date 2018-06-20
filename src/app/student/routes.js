import { group, route, meta } from '@/helpers/routes'

import Frequencies from './frequencies/frequencies'
import Grades from './grades/grades'

export default group('/app/student', [
  route('frequencies', '/frequencies', Frequencies, meta('Minhas Frequências')),
  route('grades', '/grades', Grades, meta('Minhas Notas'))
])
