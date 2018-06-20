<script>
import crud from '@/crud/form/form'
import resources from '../resources'
import moment from 'moment'

const dateToShow = date => moment(date).format('DD/MM')
const dateToISo = (year, date) => moment(date + '/' + year + '/', 'DD/MM/YYYY').format('YYYY-MM-DD')

export default {
  name: 'two-months-form',

  data () {
    return {
      title: 'Cadastro de bimestre',
      subTitle: 'Adicionar bimestre',
      two_month: {
        id: parseInt(moment().format('YYYY')).toString(),
        start1: null,
        end1: null,
        start2: null,
        end2: null,
        start3: null,
        end3: null,
        start4: null,
        end4: null
      }
    }
  },

  methods: {
    prepareShow (item) {
      item.id = item.id.toString()
      item.start1 = dateToShow(item.start1)
      item.end1 = dateToShow(item.end1)
      item.start2 = dateToShow(item.start2)
      item.end2 = dateToShow(item.end2)
      item.start3 = dateToShow(item.start3)
      item.end3 = dateToShow(item.end3)
      item.start4 = dateToShow(item.start4)
      item.end4 = dateToShow(item.end4)

      return item
    },
    prepareSave (item) {
      item.start1 = dateToISo(item.id, item.start1)
      item.end1 = dateToISo(item.id, item.end1)
      item.start2 = dateToISo(item.id, item.start2)
      item.end2 = dateToISo(item.id, item.end2)
      item.start3 = dateToISo(item.id, item.start3)
      item.end3 = dateToISo(item.id, item.end3)
      item.start4 = dateToISo(item.id, item.start4)
      item.end4 = dateToISo(item.id, item.end4)

      return item
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
                  .row
                    .form-group.col-md-2
                      f-text(label="Ano", v-model="two_month.id", :errors="errors['id']")
                  .row
                    .form-group.col-md-3
                      f-date(label="Inicio 1º bimestre", v-model="two_month.start1", :errors="errors['start1']", :options="{mask: '##/##', format: 'DD/MM'}")
                    .form-group.col-md-3
                      f-date(label="Final 1º bimestre", v-model="two_month.end1", :errors="errors['end1']", :options="{mask: '##/##', format: 'DD/MM'}")

                  .row
                    .form-group.col-md-3
                      f-date(label="Inicio 2º bimestre", v-model="two_month.start2", :errors="errors['start2']", :options="{mask: '##/##', format: 'DD/MM'}")
                    .form-group.col-md-3
                      f-date(label="Final 2º bimestre", v-model="two_month.end2", :errors="errors['end2']", :options="{mask: '##/##', format: 'DD/MM'}")

                  .row
                    .form-group.col-md-3
                      f-date(label="Inicio 3º bimestre", v-model="two_month.start3", :errors="errors['start3']", :options="{mask: '##/##', format: 'DD/MM'}")
                    .form-group.col-md-3
                      f-date(label="Final 3º bimestre", v-model="two_month.end3", :errors="errors['end3']", :options="{mask: '##/##', format: 'DD/MM'}")

                  .row
                    .form-group.col-md-3
                      f-date(label="Inicio 4º bimestre", v-model="two_month.start4", :errors="errors['start4']", :options="{mask: '##/##', format: 'DD/MM'}")
                    .form-group.col-md-3
                      f-date(label="Final 4º bimestre", v-model="two_month.end4", :errors="errors['end4']", :options="{mask: '##/##', format: 'DD/MM'}")
</template>
