<script>
import resources from './resources'

export default {
  name: 'stops-form',
  mixins: [resources]
}
</script>

<template lang="pug">
  .row
    .col-md-12
      // Default box
      .box.box-success
        .box-header.with-border(v-if="withSave")
          h3.box-title {{ title }}
          .box-tools.pull-right
            button(@click="doSave", :class="btnSaveClass")
              i.fa.fa-check
              |  {{ labelSave }}
        .box-body
          form(role='form')
            .box-body
              .row
                .form-group.col-md-4
                  f-text(label="Nome", v-model="stop.label", :errors="errors['label']")
              .row
                .form-group.col-md-4
                  f-zip(@on-get-address="setAddress", label="CEP", v-model="stop.address.zip", name="address_zip", :errors="errors['address.zip']")
                .form-group.col-md-4
                  f-text(label="Logradouro", v-model="stop.address.street", name="address_street", :errors="errors['address.street']")
                .form-group.col-md-4
                  f-text(label="Número", v-model="stop.address.number", name="address_number", :errors="errors['address.number']")
              .row
                .form-group.col-md-4
                  f-text(label="Bairro", v-model="stop.address.district", name="address_district", :errors="errors['address.district']")
                .form-group.col-md-4
                  f-text(label="Complemento", v-model="stop.address.complement", name="address_complement", :errors="errors['address.complement']")
                .form-group.col-md-4
                  f-text(label="Cidade", v-model="stop.address.city", name="address_city", :errors="errors['address.city']")
              .row
</template>
