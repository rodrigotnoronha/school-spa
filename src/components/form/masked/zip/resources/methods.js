import { isEmpty, get } from 'lodash'
import axios from 'axios'

export default {
  afterChange (zip) {
    if (isEmpty(zip) || zip.length !== 8) {
      return
    }

    axios.get(`https://viacep.com.br/ws/${zip}/json/`)
    .then(({data}) => {
      if (get(data, 'erro', false)) {
        return
      }
      this.$emit('on-get-address', {
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      })
    })
    .catch((er) => {
    })
  }
}
