<script>
import resources from './resources'

export default {
  name: 'crud-index',
  mixins: [resources]
}
</script>

<template lang="pug">
  page(:title="title", sub-title="", :links="links", :no-title="noTitle")
    section.content
      // /.row
      .row
        .col-xs-12
          .box.box-warning(v-if="filter")
            .box-header.with-border
              h3.box-title
                i.fa.fa-search Busca
              .box-tools.pull-right
                // Remove Button
                button.btn.btn-box-tool(@click.prevent="filter = false")
                  i.fa.fa-times
              // /.box-tools
            .box-body
              advanced(@do-filter="doSearch")
            // /.box-body
          .box
            .box-header
              h3.box-title {{ subTitle }}
              .box-tools.pull-right
                button.btn.btn-box-tool(@click.prevent="filter = true", v-if="!filter")
                  i.fa.fa-search
                  |  Busca
                router-link(:to="{name: getRouterCreate}", v-if="!noAdd")
                  a
                    button.btn.btn-box-tool
                      i.fa.fa-plus
                      |  {{ titleCreate }}
            // /.box-header
            .box-body.table-responsive.no-padding
              .col-sm-12
                table.table.table-hover#tabela
                  tr
                    th(v-for="column in getColumns") {{ column }}
                    th(v-if="buttonSelect")
                    th.text-right(v-if="!noActions") Ações
                  item(@on-selected="onSelected",
                    :button-select="buttonSelect",
                    :no-actions="noActions",
                    :no-delete="noDelete",
                    v-for="item in data",
                    :item="item",
                    :keys="getKeys",
                    @on-deleted="doDelete")
                    router-link.btn.btn-circle-micro.btn-primary(:to="{name: getRouterEdit, params: {id: item.id}}")
                      span.fa.fa-pencil

              .box-footer.clearfix()
                pagination(:pagination="pagination", @pagination-changed-page="doSearchByPage")
</template>


<style>
#tabela tr {
    cursor: pointer;
}
</style>
