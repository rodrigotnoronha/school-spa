import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de classes')),
  route('edit', '/:id/edit', Form, meta('Editar classe')),
  route('create', '/create', Form, meta('Adicionar classe'))
]
