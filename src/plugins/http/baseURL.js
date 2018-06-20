// dependencies.
import { get } from 'lodash'

// detect the base URL.
const baseURL = get(process.env, 'API_URL')

/**
 * detect the api base URL
 */
export default baseURL
