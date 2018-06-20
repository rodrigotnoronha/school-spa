import address from './dataAddress'
import user from './dataUser'

export default () => ({
  kindDocument: 'country_register',
  labelDocument: '',
  showModal: false,
  showModalDocument: false,
  name: '',
  entity: 'user',
  title: 'Cadastro de usuários',
  subTitle: 'Adicionar novo(a) usuário(a)',
  links: [],
  isUser: false,
  errors: {
    address: address({}),
    phones: {
      work: null,
      home: null,
      mobile: null
    }
  },
  user: user({})
})
