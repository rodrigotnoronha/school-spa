import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as responsible } from './responsible'
import { routes as school } from './school'
import { routes as student } from './student'
import { routes as teacher } from './teacher'
import { routes as settings } from './settings'

const index = {
  name: 'index',
  path: '/',
  redirect: { name: 'auth.login' }
}

export default [
  ...auth,
  ...dashboard,
  ...responsible,
  ...school,
  ...student,
  ...teacher,
  ...settings,
  index
]
