import { route, meta } from '@/helpers/routes'

import View from './form/form'
import Search from './search/search'

export default [
  route('index', '/index', Search, meta('Lista de escolas', true, 'admin')),
  route('view', '/view', View, meta('Adicionar escola', true, 'admin'))
]
