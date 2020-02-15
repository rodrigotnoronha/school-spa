import { get, first, reduce } from 'lodash'

// isLogged
export const isLogged = ({ user }) => {
  return get(user, 'id', null) !== null
} // isLogged

// user getters
export const currentUser = ({ user }) => user // all user data
export const user = ({ user }) => user // all user data
export const userId = ({ user }) => get(user, 'id') // current user id
export const userName = ({ user }) => get(user, 'name') // current user name
export const userAvatar = ({ user }) => get(user, 'avatar') // current user name
export const userFirstName = ({ user }) => first((get(user, 'name') || '').split(' ')) // current user first name
export const userEmail = ({ user }) => get(user, 'email') // current user email

// current user role
export const userIsAdmin = ({ user }) => get(user, 'is_admin', false)

export const userIsMaster = ({ user }) => get(user, 'master', false)

// current user profile (for the current tenant).
export const userIsResponsible = ({ user }) => get(user, 'have_profiles.responsible', false) || get(user, 'profiles.responsible', false)
export const userIsStudent = ({ user }) => get(user, 'have_profiles.student', false) || get(user, 'profiles.student', false)
export const userIsTeacher = ({ user }) => get(user, 'have_profiles.teacher', false) || get(user, 'profiles.teacher', false)
export const userProfile = ({ user }) => {
  if (userIsAdmin({user})) {
    return 'admin'
  }
  if (userIsTeacher({user})) {
    return 'teacher'
  }
  if (userIsResponsible({user})) {
    return 'responsible'
  }
  if (userIsStudent({user})) {
    return 'student'
  }

  return
}

export const userTotalProfiles = ({ user }) => {
  const profiles = [
    user.is_admin,
    get(user, 'profiles.responsible', false) || get(user, 'have_profiles.responsible'),
    get(user, 'profiles.student', false) || get(user, 'have_profiles.student'),
    get(user, 'profiles.teacher', false) || get(user, 'have_profiles.teacher')
  ]

  return reduce(profiles, (acc, item) => {
    if (item) {
      return acc + 1
    }

    return acc
  }, 0)
}
