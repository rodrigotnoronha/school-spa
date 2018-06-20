// dependencies.
import { map, get, assign, toString } from 'lodash'
const defaultTitle = 'Escola Municipal'

export const meta = (title = defaultTitle, auth = true, role = 'guest', full = false, staff = false) => {
  if (title !== defaultTitle) {
    title = title + ' - ' + defaultTitle
  }

  return {
    auth,
    role,
    title,
    full,
    staff
  }
}

/**
* Generates a route object from some given parameters.
*
* @param {String} name
* @param {String} path
* @param {Object} component
* @param {Object} defaultMeta
* @returns {{name: *, path: *, component: *, meta: *}}
*/
export const route = (name, path, component, defaultMeta = meta()) => {
  return assign({}, { name, path, component, meta: defaultMeta })
}

/**
* Generates a subGroup object from some given parameters.
*
* @param {String} pathPrefix
* @param {Array} routes
* @returns {Array} routes
*/
export const subGroup = (pathPrefix, routes) => {
  return map(routes, (route) => {
    return prepareRoute(route, pathPrefix, urlToName(pathPrefix), route.meta)
  })
}

/**
* Generates a route object from some given parameters.
*
* @param {String} name
* @param {String} path
* @param {Object} component
* @param {Object} defaultMeta
* @returns {{name: *, path: *, component: *, meta: *}}
*/
export const staffRoute = (name, path, component, defaultMeta = meta()) => {
  return { name, path, component, meta: Object.assign({ staff: true }, defaultMeta) }
}

/**
* Generates a route name from a given url.
*
* @param url
* @returns {string}
*/
export const urlToName = url => {
  return toString(url)
    .replace(/^(\/?)app/, '') // remove /app from the beginning of the path.
    .replace(new RegExp('/', 'g'), '.') // replace all / (slash) with . (dot)
    .replace(/^\./, '') // remove . (dot) from the beginning of the path.
}

/**
* Prepend name and path prefixes into a route object.
*
* @param {Object} r { route }
* @param {String} pathPrefix
* @param {String} namePrefix
* @param {Object} meta
* @returns {Object}
*/
export const prepareRoute = (r, pathPrefix, namePrefix, meta) => {
  r.name = namePrefix ? namePrefix + `.${r.name}` : r.name
  r.path = r.path ? `${pathPrefix}${r.path}` : pathPrefix
  r.meta = assign({}, meta, r.meta)

  return {...r}
}

/**
* Prepares an array of routes with given prefixes and default configurations.
*
* @param pathPrefix
* @param routes
* @param meta
* @returns {Array}
*/
export const group = (pathPrefix, routes = [], meta = { auth: true }) => {
  return map(routes, r => prepareRoute(r, pathPrefix, urlToName(pathPrefix), meta))
}

/**
* Last route segment (determine action).
*
* @param route
*/
export const lastSegment = route => get(route, 'name', '').split('.').pop()

/**
* Get a route param (safe query).
*
* @param route
* @param name
*/
export const getParam = (route, name) => get(route, `params.${name}`, null)

/**
* Does the current route needs auth?
*/
export const needsAuth = route => get(route, 'meta.auth', true)

const startsWith = (route, value) => {
  const name = get(route, 'name', '')

  return name.startsWith(value)
}

export const routeStartsWith = (r, prefix) => {
  if (get(r, 'name', null) === null) {
    return false
  }

  return startsWith(r, prefix)
}

export const routeIsProfessional = (r) => {
  return routeStartsWith(r, 'professional.')
}

export const routeIsSettings = (r) => {
  return routeStartsWith(r, 'settings.')
}
