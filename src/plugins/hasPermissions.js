export default function (permission, allow, office, team, custom) {
  console.log('check permission', permission)
  return true
/*
  var permissions = window.sessionStorage.getItem('permissions')
  if (permissions !== null) {
    permissions = JSON.parse(permissions)
  }
  if (allow === undefined) {
    allow = allow || [true, null]
  }
  var checkPermission = function (item) {
    if (allow === null && item.allow === false) {
      return false
    }
    if (Array.isArray(allow)) {
      var next = false
      for (var i = allow.length - 1; i >= 0; i--) {
        if (item.allow === allow[i]) {
          next = true
          break
        }
      }
      if (!next) {
        return false
      }
    }
    if (item.office !== office) {
      return false
    }
    if (item.team !== team) {
      return false
    }

    return true
  }
  return {
    byUser: function () {
      if (permissions === null) {
        return false
      }
      var user = permissions['user'] || null
      if (user === null) {
        return false
      }
      for (var i = user.length - 1; i >= 0; i--) {
        if (user[i].name === permission && checkPermission(user[i])) {
          return true
        }
      }

      return false
    },
    has: function () {
      return this.byUser()
    },
    hasEntity: function () {
      if (permissions === null) {
        return false
      }
      var user = permissions['user'] || null
      if (user === null) {
        return false
      }
      for (var i = user.length - 1; i >= 0; i--) {
        if (user[i].entity === permission) {
          return true
        }
      }

      return false
    }
  }
  */
}
