import { route, meta } from '@/helpers/routes'

import View from './form/form'
import Index from './search/index'

export default [
  route('index', '/index', Index, meta('Lista de alunos')),
  route('create', '/create', View, meta('Adicionar aluno'))
]
