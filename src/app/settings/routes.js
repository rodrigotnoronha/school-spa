import { route, meta, group, subGroup } from '@/helpers/routes'
import Profile from './profile/me'

const profileRoutes = subGroup('/profile', [
  route('me', '/me', Profile, meta('Editar dados cadastrais', true, 'guest'))
])

const routes = group('/app/settings', profileRoutes)

export default routes
