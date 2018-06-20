import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de paradas')),
  route('edit', '/:id/edit', Form, meta('Editar parada')),
  route('create', '/create', Form, meta('Adicionar parada'))
]
