<script>
import { mapGetters } from 'vuex'

import crud from '@/crud/form/form'
import resources from '../resources'

export default {
  name: 'schools-form',

  computed: {
    ...mapGetters(['currentSchool'])
  },
  methods: {
    setAddress (address) {
      this.school.address = {
        ...this.school.address,
        ...address
      }
    }
  },

  mixins: [crud, resources]
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    // Content Header (Page header)
    section.content
      .row
        .col-md-12
          // Default box
          .box.box-success
            .box-header.with-border
              h3.box-title Cadastrar Nova Escola
              .box-tools.pull-right
                // button.btn.btn-danger(type="submit") Cancelar
                button.btn.btn-primary.btn-success(@click.prevent="doSave()")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div
                .box-body
                  .row
                    .form-group.col-md-4
                      f-document-cnpj(:disabled="!(!school.id)", name="country_register", label="CNPJ", v-model="school.country_register", :errors="errors['country_register']")
                    .form-group.col-md-4
                      f-select-user(v-model="school.director_id", label="Diretor", name="director_id", :searchable="true")
                    .form-group.col-md-4
                      f-text(name="name", label="Nome da Instituição", v-model="school.name", :errors="errors['name']")
                  .row
                    .form-group.col-md-4
                      f-email(label="E-Mail", placeholder="email@example.com" v-model="school.email", :errors="errors['email']")
                    .form-group.col-md-4
                      f-only-number(:maxlength="14", name="state_register", label="Inscrição Estadual", v-model="school.state_register", :errors="errors['state_register']")
                    .form-group.col-md-4
                      f-select-active-disabled(label="Situação", v-model="school.active", name="active")
                  .row
                    .form-group.col-md-4
                      f-phone(field-id="work", label="Telefone da Escola", name="work", v-model="school.phones.work", :errors="errors['phones.work']")
                    .form-group.col-md-4
                      f-phone(field-id="mobile", label="Celular do Responsável", name="mobile", v-model="school.phones.mobile", :errors="errors['phones.mobile']")
                    .form-group.col-md-4
                      f-phone(field-id="other", label="Outro Telefone", name="other", v-model="school.phones.other", :errors="errors['phones.other']")
                  .row
                    .form-group.col-md-4
                      f-zip(@on-get-address="setAddress", label="CEP", v-model="school.address.zip", name="address_zip", :errors="errors['address.zip']")
                    .form-group.col-md-4
                      f-text(label="Logradouro", v-model="school.address.street", name="address_street", :errors="errors['address.street']")
                    .form-group.col-md-4
                      f-text(label="Número", v-model="school.address.number", name="address_number", :errors="errors['address.number']")
                  .row
                    .form-group.col-md-4
                      f-text(label="Bairro", v-model="school.address.district", name="address_district", :errors="errors['address.district']")
                    .form-group.col-md-4
                      f-text(label="Complemento", v-model="school.address.complement", name="address_complement", :errors="errors['address.complement']")
                    .form-group.col-md-4
                      f-text(label="Cidade", v-model="school.address.city", name="address_city", :errors="errors['address.city']")
                  .row
                    .form-group.col-md-4
                      f-select-state(name="address_state", label="Estado", v-model="school.address.state", :errors="errors['address.state']")
            // /.box-footer
</template>
