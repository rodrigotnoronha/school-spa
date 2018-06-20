<script>
import resources from '@/app/dashboard/index/shared'

export default {
  name: 'dashboard-index-roles-teacher',

  mixins: [resources],

  resourcePath: '/teacher/dashboard'
}
</script>

<template lang="pug">
  div(v-if="false")
    .row
      .col-lg-3.col-xs-6
        .small-box.bg-aqua
          .inner
            h3 1.150
            |
            p Estudantes
          |
          .icon
            i.ion-social-twitch
          |
          a.small-box-footer(href='#')
            | Veja Mais
            i.fa.fa-arrow-circle-right
      // ./col
      .col-lg-3.col-xs-6
        // small box
        .small-box.bg-green
          .inner
            h3 653
            |
            p Professores
          |
          .icon
            i.ion.ion-stats-bars
          |
          a.small-box-footer(href='#')
            | Veja Mais
            i.fa.fa-arrow-circle-right
      // ./col
      .col-lg-3.col-xs-6
        // small box
        .small-box.bg-yellow
          .inner
            h3 96
            |
            p Vagas Dispon&iacute;veis
          |
          .icon
            i.ion.ion-person-add
          |
          a.small-box-footer(href='#')
            | Veja Mais
            i.fa.fa-arrow-circle-right
      // ./col
      .col-lg-3.col-xs-6
        // small box
        .small-box.bg-red
          .inner
            h3 120
            |
            p Transporte
          |
          .icon
            i.ion.ion-pie-graph
          |
          a.small-box-footer(href='#')
            | Veja Mais
            i.fa.fa-arrow-circle-right
      // ./col
    // /.row
    .row
      .col-md-12
        .box
          .box-header.with-border
            h3.box-title Frequ&ecirc;ncias e Faltas
            |
            .box-tools.pull-right
              select
                option Todas Escolas
                |
                option Escola Dom Pedro
                |
                option Escola Roberto Silva
                |
                option Escola Dom Casmurro
              |
              select
                option 2017
                |
                option 2016
                |
                option 2015
                |
                option 2014
                |
                option 2013
          // /.box-header
          .box-body
            .row
              .col-md-12
                .chart
                  // Sales Chart Canvas
                  canvas#salesChart(style='height: 118px; width: 564px;', width='564', height='118')
                // /.chart-responsive
              // /.col
              // /.col
            // /.row
        // /.box
      // /.col
    |
    .row
      .col-md-3
        .box.box-primary
          .box-header.with-border
            i.fa.fa-thumbs-o-up
            |
            h3.box-title Melhores M&eacute;dias
            |
            .box-tools.pull-right
              select
                option Todas Escolas
                |
                option Escola Dom Pedro
                |
                option Escola Roberto Silva
                |
                option Escola Dom Casmurro
              |
              select
                option Todos
                |
                option 1&ordm; Bimestre
                |
                option 2&ordm; Bimestre
                |
                option 3&ordm; Bimestre
                |
                option 4&ordm; Bimestre
          // /.box-header
          .box-body
            ul.products-list.product-list-in-box
              li.item
                .product-img
                  img(src='img/avatar.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Leandro Henrique Silva
                    span.label.label-success.pull-right 7 Ano
                  |
                  span.product-description
                    | Escola Roberto Duarte
              // /.item
              li.item
                .product-img
                  img(src='img/avatar2.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | T&uacute;lio Vargas
                    span.label.label-success.pull-right 2 Ano
                  |
                  span.product-description
                    | Escola Dom Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/avatar3.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Giulia Andrade
                    span.label.label-success.pull-right 3 Ano
                  |
                  span.product-description
                    | Escola Com Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 5 Ano
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
          // /.box-body
          .box-footer.text-center
            a.uppercase(href='javascript:void(0)') View All Products
          // /.box-footer
      |
      .col-md-3
        .box.box-danger
          .box-header.with-border
            i.fa.fa-thumbs-o-down
            |
            h3.box-title Piores M&eacute;dias
            |
            .box-tools.pull-right
              select
                option Todas Escolas
                |
                option Escola Dom Pedro
                |
                option Escola Roberto Silva
                |
                option Escola Dom Casmurro
              |
              select
                option Todos
                |
                option 1&ordm; Bimestre
                |
                option 2&ordm; Bimestre
                |
                option 3&ordm; Bimestre
                |
                option 4&ordm; Bimestre
          // /.box-header
          .box-body
            ul.products-list.product-list-in-box
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Leandro Henrique Silva
                    span.label.label-warning.pull-right $1800
                  |
                  span.product-description
                    | Escola Roberto Duarte
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | T&uacute;lio Vargas
                    span.label.label-info.pull-right $700
                  |
                  span.product-description
                    | Escola Dom Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Giulia Andrade
                    span.label.label-danger.pull-right $350
                  |
                  span.product-description
                    | Escola Com Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right $399
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
          // /.box-body
          .box-footer.text-center
            a.uppercase(href='javascript:void(0)') View All Products
          // /.box-footer
      |
      .col-md-3
        .box.box-danger
          .box-header.with-border
            i.fa.fa-thumbs-o-down
            |
            h3.box-title Top Faltantes
            |
            .box-tools.pull-right
              select
                option Todas Escolas
                |
                option Escola Dom Pedro
                |
                option Escola Roberto Silva
                |
                option Escola Dom Casmurro
              |
              select
                option Todos
                |
                option 1&ordm; Bimestre
                |
                option 2&ordm; Bimestre
                |
                option 3&ordm; Bimestre
                |
                option 4&ordm; Bimestre
          // /.box-header
          .box-body
            ul.products-list.product-list-in-box
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Leandro Henrique Silva
                    span.label.label-warning.pull-right $1800
                  |
                  span.product-description
                    | Escola Roberto Duarte
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | T&uacute;lio Vargas
                    span.label.label-info.pull-right $700
                  |
                  span.product-description
                    | Escola Dom Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Giulia Andrade
                    span.label.label-danger.pull-right $350
                  |
                  span.product-description
                    | Escola Com Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/default-50x50.gif', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right $399
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
          // /.box-body
          .box-footer.text-center
            a.uppercase(href='javascript:void(0)') View All Products
          // /.box-footer
      |
      .col-md-3
        .box.box-primary
          .box-header.with-border
            i.fa.fa-birthday-cake
            |
            h3.box-title Aniversariantes
            |
            .box-tools.pull-right
              select
                option Hoje
                |
                option Semana
                |
                option M&ecirc;s
              |
              select
                option Todas Escolas
                |
                option Escola Dom Pedro
                |
                option Escola Roberto Silva
                |
                option Escola Dom Casmurro
          // /.box-header
          .box-body
            ul.products-list.product-list-in-box
              li.item
                .product-img
                  img(src='img/avatar.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Leandro Henrique Silva
                    span.label.label-success.pull-right 16 Anos
                  |
                  span.product-description
                    | Escola Roberto Duarte
              // /.item
              li.item
                .product-img
                  img(src='img/avatar5.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | T&uacute;lio Vargas
                    span.label.label-success.pull-right 12 Anos
                  |
                  span.product-description
                    | Escola Dom Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/avatar2.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Giulia Andrade
                    span.label.label-success.pull-right 3 Anos
                  |
                  span.product-description
                    | Escola Com Pedro II
              // /.item
              li.item
                .product-img
                  img(src='img/avatar4.png', alt='Product Image')
                |
                .product-info
                  a.product-title(href='javascript:void(0)')
                    | Roberlei Silva
                    span.label.label-success.pull-right 7 Anos
                  |
                  span.product-description
                    | Escola Silva Pereira
              // /.item
          // /.box-body
          .box-footer.text-center
            a.uppercase(href='javascript:void(0)') View All Products
          // /.box-footer
</template>
