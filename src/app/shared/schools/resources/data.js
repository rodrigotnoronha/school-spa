import address from './dataAddress'
import school from './dataSchool'

export default () => ({
  name: '',
  entity: 'school',
  entities: 'schools',
  title: 'Cadastro de escolas',
  subTitle: 'Escolas',
  links: [],
  errors: {
    address: address({}),
    phones: {
      work: null,
      other: null,
      mobile: null
    }
  },
  school: school({})
})
