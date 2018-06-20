<script>
import { get } from 'lodash'

const getValue = (address, column) => {
  const value = get(address, column, null)

  if (!value) {
    return {}
  }

  return {
    column,
    value
  }
}

const prepareSearch = item => {
  const search = {...item}

  const street = getValue(item.address, 'street')
  const district = getValue(item.address, 'district')
  const city = getValue(item.address, 'city')
  const state = getValue(item.address, 'state')
  const number = getValue(item.address, 'number')
  const zip = getValue(item.address, 'zip')

  search.address = [
    street,
    district,
    city,
    state,
    number,
    zip
  ]

  return search
}

export default {
  name: 'advanced',
  data () {
    return {
      search: {
        id: null,
        label: null,
        address: {
          street: null,
          number: null,
          district: null,
          city: null,
          state: null,
          zip: null
        }
      }
    }
  },
  methods: {
    doFilter () {
      this.$emit('do-filter', prepareSearch(this.search))
    }
  }
}
</script>

<template lang="pug">
  .row
    .col-md-1
      f-text(label="ID", v-model="search.id")
    .col-md-3
      f-text(label="Nome", v-model="search.label")
    .col-md-3
      f-text(label="Logradouro", v-model="search.address.street")
    .col-md-2
      f-text(label="Cidade", v-model="search.address.city")
    .col-md-2
      f-text(label="Estado", v-model="search.address.estado")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
