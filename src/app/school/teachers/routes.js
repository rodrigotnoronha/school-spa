import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/index'

export default [
  route('index', '/index', Index, meta('Lista de professores')),
  route('edit', '/:id/edit', Form, meta('Editar professor(a)')),
  route('create', '/create', Form, meta('Adicionar professor(a)'))
]
