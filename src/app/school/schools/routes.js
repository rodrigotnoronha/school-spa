import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Search from './search/search'

export default [
  route('index', '/index', Search, meta('Lista de escolas', true, 'admin')),
  route('edit', '/:id/edit', Form, meta('Editar escola', true, 'admin')),
  route('create', '/create', Form, meta('Adicionar escola', true, 'admin'))
]
