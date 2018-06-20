<script>
import RouteSearch from '../../routes/search/search'

import resources from '../resources'
import crud from '@/crud/form/form'
import { isEmpty, filter, find, map } from 'lodash'

const prepareRoute = (item) => {
  return {
    _selected: true,
    driver: null,
    ...item,
    error: null
  }
}

const getRoutes = (data) => {
  const routes = filter(data, { _selected: true })
  return map(routes, route => {
    return {
      route_id: route.id,
      driver: route.driver
    }
  })
}

const setErrorFromDriver = (routes) => {
  map(routes, (route) => {
    route.error = (isEmpty(route.driver) && route._selected) ? 'Informe o motorista' : ''
  })
}

const hasRouteWithoutDriver = (routes) => {
  return find(routes, (route) => {
    return (isEmpty(route.driver) && route._selected)
  })
}

export default {
  name: 'vehicles-form',
  components: {
    RouteSearch
  },
  data () {
    return {
      title: 'Cadastro de veículos',
      subTitle: 'Adicionar novo veículo',
      errors: {},
      vehicle: {
        id: null,
        tenant_id: null,
        label: null,
        board: null,
        capacity: null,
        routes: []
      }
    }
  },
  methods: {
    beforeSave (item) {
      if (item.routes.length < 1) {
        this.$toast.warning('Necessário ter pelo menos uma rota.')
        return false
      }

      setErrorFromDriver(this.vehicle.routes)
      if (hasRouteWithoutDriver(item.routes)) {
        this.$toast.warning('Informe o motorista para as rotas selecionadas.')
        return false
      }

      return true
    },
    prepareSave (item) {
      item.routes = getRoutes(item.routes)

      return item
    },
    prepareShow (vehicle) {
      vehicle.routes = map(vehicle.routes, prepareRoute)

      return vehicle
    },
    doAddRoute (route) {
      const current = find(this.vehicle.routes, {id: route.id})
      if (!current) {
        this.vehicle.routes.push(prepareRoute(route))
        return
      }
      this.$toast.warning('Rota já foi adicionada')
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
                button.btn.btn-primary.btn-success(@click.prevent="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .form-group.col-md-6
                    f-text(label="Nome do Veículo", v-model="vehicle.label", :errors="errors['label']")
                  .form-group.col-md-6
                    f-text(label="Marca", v-model="vehicle.board", :errors="errors['board']")
                  .form-group.col-md-6
                    f-text(type="number", :min="1", :max="100", label="Capacidade", v-model="vehicle.capacity", :errors="errors['capacity']")
                  .form-group.col-md-12
                    .box
                      .box-header.ui-sortable-handle(style='cursor: move;')
                        h3.box-title Lista de rotas
                      .box-body
                        .row
                          .col-sm-12.col-md-6
                            label Rota
                          .col-sm-12.col-md-6
                            label Motorista

                        .row(v-for="route in vehicle.routes")
                          .col-sm-12.col-md-6
                            input(type="checkbox", v-model="route._selected")
                            label {{ route.label }}
                          .col-sm-12.col-md-6
                            f-text(v-model="route.driver", :force-no-label="true", label="Motorista", :errors="route.error")
                        .row
                          route-search(:no-title="true", :active-filter="true", :no-actions="true", :no-add="true", :button-select="true", @on-selected="doAddRoute")
</template>
