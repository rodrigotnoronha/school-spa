import { expired } from '@/helpers/jwt/utils'
import { get } from 'lodash'

// JWT token.
export const jwt = ({ jwt }) => jwt
export const jwtToken = ({ jwt }) => get(jwt, 'token')
export const jwtData = ({ jwt }) => get(jwt, 'data')
export const jwtValid = ({ jwt }) => !expired(jwt)
