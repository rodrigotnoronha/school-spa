import * as user from './user'
import * as tenant from './tenant'
import * as jwt from './jwt'

export default {
  ...user,
  ...tenant,
  ...jwt
}
