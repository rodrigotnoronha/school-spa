import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/index'

export default [
  route('index', '/index', Index, meta('Lista de alunos')),
  route('edit', '/:id/edit', Form, meta('Editar aluno')),
  route('create', '/create', Form, meta('Adicionar aluno'))
]
