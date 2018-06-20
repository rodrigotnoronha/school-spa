import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/index'

export default [
  route('index', '/index', Index, meta('Lista de responsáveis')),
  route('edit', '/:id/edit', Form, meta('Editar responsável')),
  route('create', '/create', Form, meta('Adicionar responsável'))
]
