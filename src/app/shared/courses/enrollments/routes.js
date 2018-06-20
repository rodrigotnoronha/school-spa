import { route, meta } from '@/helpers/routes'

import Form from './form/form'
import Index from './search/search'

export default [
  route('index', '/index', Index, meta('Lista de matrículas')),
  route('edit', '/:id/edit', Form, meta('Editar matrícula')),
  route('create', '/create', Form, meta('Adicionar matrícula'))
]
