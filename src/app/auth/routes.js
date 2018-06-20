import { group, route, meta } from '@/helpers/routes'
import Login from './form/login'
import Reset from './reset/reset'
import Forgot from './forgot/forgot'
import Logout from './logout/logout'

const routes = group('/app/auth', [
  route('password.reset', '/password/reset/:token', Reset, meta('Resetar a senha', false, 'guest')),
  route('login', '/login', Login, meta('Auth Login', false, 'guest')),
  route('forgot', '/forgot', Forgot, meta('Esqueci minha senha', false, 'guest')),
  route('logout', '/logout', Logout, meta('Sair', false, 'guest'))
])

export default routes
