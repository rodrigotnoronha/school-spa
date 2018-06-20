<script>
  import resources from './resources'

  export default {
    name: 'pagination',
    mixins: [resources]
  }
</script>

<template lang="pug">
  ul.pagination.pagination-sm.no-margin.pull-right(v-if="visibled")
    li(:class="{disabled: pagination.current_page === 1}")
      a(v-if="pagination.current_page === 1") «
      a(href="#", @click.prevent="goPrevious()", v-if="pagination.current_page > 1") «
    li(v-for="page in pages", :class="{active: page === pagination.current_page}")
      a(@click.prevent="goPage(page)", href="#", v-if="page !== pagination.current_page")
        | {{ page }}
      a(v-if="page === pagination.current_page")
        | {{ page }}
        span.sr-only(v-if="page === pagination.current_page")
          | {{ page }}
    li(:class="{disabled: pagination.current_page === pagination.total_pages}")
      a(href="#", @click.prevent="goNext()", v-if="pagination.current_page < pagination.total_pages") »
      a(v-if="pagination.current_page === pagination.total_pages") »
    li(v-if="false")
      button#menu1.btn.btn-primary.dropdown-toggle(type='button', data-toggle='dropdown')
        | ...
      ul.dropup.dropdown-menu.dropdown-menu-right(role='menu', aria-labelledby='menu1')
        li(v-for="page in pages", :class="{active: page === pagination.current_page}")
         a(href="#", @click="goPage(page)") {{ page }}


</template>
