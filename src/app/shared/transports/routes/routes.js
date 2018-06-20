import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de rotas')),
  route('edit', '/:id/edit', Form, meta('Editar rota')),
  route('create', '/create', Form, meta('Adicionar rota'))
]
