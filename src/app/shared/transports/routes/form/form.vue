<script>
import Stop from '../../stops/form/form-add'
import StopSearch from '../../stops/search/search'

import crud from '@/crud/form/form'
import resources from '../resources'

import { filter, find, map } from 'lodash'

const prepareStop = (item) => {
  return {
    id: item.id,
    label: item.label + ': ' + item.address.label,
    _selected: true
  }
}

export default {
  name: 'routes-form',

  components: {
    Stop,
    StopSearch
  },
  data () {
    return {
      selectOrAdd: 'add',
      route: {
        tenant_id: null,
        label: null,
        stops: []
      },
      stop: {
        id: null,
        label: null,
        address: {
          street: null,
          number: null,
          district: null,
          city: null,
          state: null,
          complement: null,
          zip: null
        }
      },
      title: 'Cadastro de rotas',
      subTitle: 'Adicionar nova rota'
    }
  },
  methods: {
    beforeSave (item) {
      if (item.stops.length > 0) {
        return true
      }
      this.$toast.warning('Necessário ter pelo menos uma parada.')

      return false
    },
    prepareSave (item) {
      const stops = filter(item.stops, { _selected: true })
      item.stops = map(stops, stop => {
        return {
          stop_id: stop.id
        }
      })

      return item
    },
    prepareShow (item) {
      const route = {...item}

      route.stops = map(route.stops, prepareStop)

      return route
    },
    doAddStop (stop) {
      const current = find(this.route.stops, {id: stop.id})
      if (!current) {
        this.route.stops.push(prepareStop(stop))
        return
      }
      this.$toast.warning('Parada já foi adicionada')
    }
  },

  mixins: [crud, resources]
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    section.content
      .row
        .col-md-12
          // Default box
          .box.box-success
            .box-header.with-border
              h3.box-title {{ title }}
              .box-tools.pull-right
                button.btn.btn-primary.btn-success(@click="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .form-group.col-md-12
                    f-text(label="Nome da Rota", v-model="route.label", :errors="errors['label']")
                  .form-group.col-md-12
                    .box
                      .box-header.ui-sortable-handle(style='cursor: move;')
                        h3.box-title Lista de paradas
                      .box-body
                        ul.todo-list.ui-sortable
                          li(v-for="stop in route.stops")
                            input(type="checkbox", v-model="stop._selected")
                            label {{ stop.label }}
                        .row
                          .col-sm-12
                            .col-sm-6
                              input(type="radio", name="selectOrAdd", v-model="selectOrAdd", value="add")
                              label Adicionar
                            .col-sm-6
                              input(type="radio", name="selectOrAdd", v-model="selectOrAdd", value="search")
                              label Pesquisar
                        stop-search(:no-title="true", v-if="selectOrAdd === 'search'", :active-filter="true", :no-actions="true", :no-add="true", :button-select="true", @on-selected="doAddStop")
                        stop(v-if="selectOrAdd === 'add'", label-save="Adicionar endereço", btn-save-class="btn btn-default pull-right", :emit="true", @saved="doAddStop")
                  .clearfix
</template>
