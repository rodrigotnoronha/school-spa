import address from './dataAddress'

export default (data = {}) => ({
  name: null,
  email: null,
  country_register: null,
  director_id: null,
  state_register: null,
  active: true,
  phones: {
    work: null,
    mobile: null,
    other: null
  },
  address: address({}),
  ...data
})
