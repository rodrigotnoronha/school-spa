<script>
import resources from './resources'

export default {
  name: 'users-form',
  mixins: [resources]
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    modal(:visible="showModal", @toggle="doToggleModal")
      div(name="header")
        h4(style='margin: 8px 0px;') Alterar Foto Perfil
      f-file-avatar(@uploaded="onUploadedAvatar", :user-id="user.id")
    modal(:visible="showModalDocument", @toggle="doToggleModalDocument")
      div(name="header")
        h4(style='margin: 8px 0px;') Enviar {{ labelDocument }}
      f-file-document(@uploaded="onUploadedDocument", :user-id="user.id", :kind="kindDocument")
    section.content
     .row
       .col-md-12
         // Default box
         .box.box-success
           .box-header.with-border
             h3.box-title {{ getTitleForm }}
             .box-tools.pull-right
               button.btn.btn-primary(@click.prevent="doSave()")
                 i.fa.fa-floppy-o(aria-hidden='true')
                 |  Salvar
           .nav-tabs-custom.row(style='margin: 0;')
             .col-md-3(v-if="user.id")
               .box-body(style='text-align: center; padding: 7px 10px; margin-top: 0;')
                 img.img-circle(:src='user.avatar', :alt='user.name', @click.prevent="doToggleModal(true)")
                 label(@click.prevent="doToggleModal(true)") Alterar foto do perfil
             .col-md-9(v-if="user.id")
               div
                 h3 {{ name }}
                 p CPF: {{ user.country_register }}
               ul.nav.nav-tabs.navegacao(style='border: none;')
                 li.active
                   a(href='#tab_1', data-toggle='tab', aria-expanded='true', style='border: 1px solid;border-radius: 4px;') Dados do Usuário
                 li(v-if="user.id")
                   a(href='#tab_2', data-toggle='tab', aria-expanded='false', style='border: 1px solid;border-radius: 4px;') Documentos Anexos
                 li(v-if="user.id && user.profiles.student")
                   a(href='#tab_3', data-toggle='tab', aria-expanded='false', style='border: 1px solid;border-radius: 4px;') Notas
                 li(v-if="user.id && user.profiles.student")
                   a(href='#tab_4', data-toggle='tab', aria-expanded='false', style='border: 1px solid;border-radius: 4px;') Frequências
             .tab-content.col-md-12
               #tab_1.tab-pane.active
                 .box-body(style='border-top: 3px solid #d2d6de;padding: 10px 0px;')
                   .row(v-if="isUser")
                     .col-sm-12.col-md-2
                       label Perfis:
                     .col-sm-12.col-md-2
                       input(type="checkbox", v-model="user.is_admin")
                       label Administrador
                     .col-sm-12.col-md-2
                       input(type="checkbox", v-model="user.have_profiles.student", :disabled="user.profiles.student")
                       label Aluno
                     .col-sm-12.col-md-2
                       input(type="checkbox", v-model="user.have_profiles.teacher", :disabled="user.profiles.teacher")
                       label Professor
                     .col-sm-12.col-md-2
                       input(type="checkbox", v-model="user.have_profiles.responsible", :disabled="user.profiles.responsible")
                       label Responsável
                   .row
                     .col-md-4
                       f-text(name="name", label="Nome Completo", v-model="user.name", :errors="errors['name']")
                     .col-md-4
                       f-document-cpf(:disabled="!(!user.id)", name="country_register", label="CPF", v-model="user.country_register", :errors="errors['country_register']")
                     .col-md-4
                       f-email(label="E-Mail/Usuário", placeholder="email@example.com" v-model="user.email", :errors="errors['email']")

                   .row
                     .col-md-4
                       f-select-responsible(v-model="user.parent1_id", label="Mãe", name="parent1_id", :searchable="true")
                     .col-md-4
                       f-select-responsible(v-model="user.parent2_id", label="Pai", name="parent2_id", :searchable="true")
                     .col-md-4
                       f-select-responsible(v-model="user.responsible1_id", label="Responsável 1", name="responsible1_id", :searchable="true")

                   .row
                     .col-md-4
                       f-select-responsible(v-model="user.responsible2_id", label="Responsável 2", name="responsible2_id", :searchable="true")
                     .col-md-4
                       f-date(label="Data de Nascimento", name="birthdate", v-model="user.birthdate", :errors="errors['birthdate']")
                     .col-md-4
                       f-text(label="Idade", :disabled="true", placeholder="Calcula Idade Automático", v-model="age")

                   .row
                     .col-md-4
                       f-only-number(:maxlength="14", name="state_register", label="RG", v-model="user.state_register", :errors="errors['state_register']")
                     .col-md-4
                       f-select-state-entity(name="state_register_entity", label="Expedido Por", v-model="user.state_register_entity", :errors="errors['state_register_entity']")
                     .col-md-4
                       f-select-state(name="state_register_state", label="UF RG", v-model="user.state_register_state", :errors="errors['state_register_state']")

                   .row
                     .col-md-4
                       f-text(label="Natural de", v-model="user.natural_from", name="natural_from", :errors="errors['natural_from']")
                     .col-md-4
                       f-text(label="Profissão", v-model="user.profession", name="profession", :errors="errors['profession']")
                     .col-md-4
                       f-select-yes-no(name="family_bag", label="Bolsa Família", v-model="user.family_bag")

                   .row
                     .col-md-4
                       f-select-marital-status(name="marital_status", label="Estado Civil", v-model="user.marital_status", :errors="errors['marital_status']")
                     .col-md-4(v-if="user.marital_status === 'married'")
                       f-select-user(v-model="user.married_id", label="Cônjuge", name="married_id", :searchable="true")
                     .col-md-4
                       f-phone(field-id="mobile", label="Celular", name="mobile", v-model="user.phones.mobile", :errors="errors['phones.mobile']")

                   .row
                     .col-md-4
                       f-phone(field-id="home", label="Fixo", name="home", v-model="user.phones.home", :errors="errors['phones.home']")
                     .col-md-4
                       f-phone(field-id="work", label="Telefone do trabalho", name="work", v-model="user.phones.work", :errors="errors['phones.work']")
                     .col-md-4
                       f-zip(@on-get-address="setAddress", label="CEP", v-model="user.address.zip", name="address_zip", :errors="errors['address.zip']")

                   .row
                     .col-md-4
                       f-text(label="Logradouro", v-model="user.address.street", name="address_street", :errors="errors['address.street']")
                     .col-md-4
                       f-text(label="Número", v-model="user.address.number", name="address_number", :errors="errors['address.number']")
                     .col-md-4
                       f-text(label="Bairro", v-model="user.address.district", name="address_district", :errors="errors['address.district']")

                   .row
                     .col-md-4
                       f-text(label="Complemento", v-model="user.address.complement", name="address_complement", :errors="errors['address.complement']")
                     .col-md-4
                       f-text(label="Cidade", v-model="user.address.city", name="address_city", :errors="errors['address.city']")
                     .col-md-4
                       f-select-state(name="address_state", label="Estado", v-model="user.address.state", :errors="errors['address.state']")
                   .row(v-if="!user.id")
                     .col-md-4
                       f-password(label="Senha", v-model="user.password", name="password", :errors="errors['password']")
                     .col-md-4
                       f-password(label="Confirmar senha", v-model="user.password_confirmation", name="password_confirmation", :errors="errors['password_confirmation']")
                   .box-tools.pull-right
                     button.btn.btn-primary(@click.prevent="doSave()")
                       i.fa.fa-floppy-o(aria-hidden='true')
                       |  Salvar
               // /.tab-pane
               #tab_2.tab-pane
                 .box
                   .box-header.ui-sortable-handle(style='cursor: move;')
                     h3.box-title Lista de Documentos
                   .box-body
                     ul.todo-list.ui-sortable
                       documents(@on-delete="doDeleteDocument", @on-download="doDownloadDocument", @on-toggle="doToggleDocument", label="Cópia do RG", :exists="stateRegisterExists", kind="state_register")
                       documents(@on-delete="doDeleteDocument", @on-download="doDownloadDocument", @on-toggle="doToggleDocument", label="Cópia do CPF", :exists="countryRegisterExists", kind="country_register")
                       documents(@on-delete="doDeleteDocument", @on-download="doDownloadDocument", @on-toggle="doToggleDocument", label="Cópia do Comprovante de Residência", :exists="addressExists", kind="address")
               // /.tab-pane
               // tab-notas
               #tab_3.tab-pane
                 .box(v-if="user.id && user.profiles.student")
                   .box-header.ui-sortable-handle(style='cursor: move;')
                     h3.box-title Notas
                   // /.box-header
                   .box-body
                     grades(:user-id="user.id")
               // tab-notas
               // tab-frequencia
               #tab_4.tab-pane
                 .box(v-if="user.id && user.profiles.student")
                   .box-header.ui-sortable-handle(style='cursor: move;')
                     h3.box-title Frequências
                   // /.box-header
                   .box-body
                     frequencies(:user-id="user.id")
</template>
