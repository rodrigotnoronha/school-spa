import address from './dataAddress'

export default (data = {}) => ({
  parent1_id: null,
  parent2_id: null,
  responsible1_id: null,
  responsible2_id: null,
  married_id: null,
  is_admin: false,
  profiles: {
    manager: false,
    student: false,
    resposnable: false,
    teacher: false
  },

  have_profiles: {
    manager: false,
    student: false,
    resposnable: false,
    teacher: false
  },

  name: null,
  email: null,
  country_register: null,

  state_register: null,
  state_register_state: 'PB',
  state_register_entity: 'SSP/PB',
  password: null,
  password_confirmation: null,
  sex: null,

  birthdate: '',

  address: address({}),
  phones: {
    work: null,
    home: null,
    mobile: null
  },

  family_bag: false,
  natural_from: null,
  profession: null,
  marital_status: null,
  ...data
})
