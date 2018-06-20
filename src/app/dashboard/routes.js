import Index from './index/index'
import { group, route, meta } from '@/helpers/routes'

const routes = group('/app/dashboard', [
  route('index', '/', Index, meta('Dashboard'))
])

export default routes
