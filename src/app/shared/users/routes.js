import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/index'

export default [
  route('index', '/index', Index, meta('Lista de usuários')),
  route('edit', '/:id/edit', Form, meta('Editar usuário')),
  route('create', '/create', Form, meta('Adicionar usuário'))
]
