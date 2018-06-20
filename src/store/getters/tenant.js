import { get, filter, size } from 'lodash'
import moment from 'moment'

// Current Tenant Getters.
export const tenant = ({ tenant }) => tenant    // current user tenant..
export const tenantId = ({ tenant }) => get(tenant, 'id') // tenant id.
export const tenantLabel = ({ tenant }) => get(tenant, 'label') // tenant label
export const tenantName = ({ tenant }) => get(tenant, 'name') // tenant name
export const tenantLabelOrName = ({ tenant }) => tenantLabel({ tenant }) || tenantName({ tenant })
export const tenantsTotal = ({tenants}) => tenants.length

// all tenants getters.
export const tenants = ({ tenants }) => tenants // all user tenants.
export const otherTenants = ({ tenants }) => filter(tenants, { 'current': false })

// laravel echo
export const echo = ({ echo }) => echo

export const lastNotifications = ({ lastNotifications }) => get(lastNotifications, 'data', [])
export const notificationsExpired = ({ lastNotifications, tenant }) => {
  // if wrong tenant.
  const tenantId = get(tenant, 'id')
  if (tenantId !== get(lastNotifications, 'meta.tenant', null)) {
    return true
  }
  // or really expired.
  const when = moment(get(lastNotifications, 'meta.when'), '1990-11-02')
  return when.add(5, 'minutes').isAfter()
}
export const lastUnread = ({ lastNotifications }) => filter(lastNotifications.data, { 'read_at': null })

export const lastUnreadCount = ({ lastNotifications }) => size(lastUnread({ lastNotifications }))
