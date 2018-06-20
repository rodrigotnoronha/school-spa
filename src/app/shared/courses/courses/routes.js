import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de cursos')),
  route('edit', '/:id/edit', Form, meta('Editar curso')),
  route('create', '/create', Form, meta('Adicionar curso'))
]
