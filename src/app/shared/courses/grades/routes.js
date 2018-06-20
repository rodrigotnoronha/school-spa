import { route, meta } from '@/helpers/routes'

import Create from './create/create'
import Edit from './edit/edit'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de notas')),
  route('edit', '/:id/edit', Edit, meta('Editar nota')),
  route('create', '/create/several', Create, meta('Adicionar notas'))
]
