import { subGroup } from '@/helpers/routes'
import { routes } from './routes/index'
import { routes as stops } from './stops'
import { routes as vehicles } from './vehicles'

export default [
  ...subGroup('/routes', routes),
  ...subGroup('/stops', stops),
  ...subGroup('/vehicles', vehicles)
]
