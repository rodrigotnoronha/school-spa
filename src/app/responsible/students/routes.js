import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Search from './search/search'
import Frequencies from './frequencies/frequencies'
import Grades from './grades/grades'

export default [
  route('frequencies', '/frequencies', Frequencies, meta('Mi,nhas Frequências')),
  route('grades', '/grades', Grades, meta('Minhas Notas')),
  route('index', '/index', Search, meta('Lista de usuários', true, 'responsible')),
  route('edit', '/:id/edit', Form, meta('Editar usuário', true, 'responsible'))
]
