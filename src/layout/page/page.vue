<script>
export default {
  name: 'page',
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: 'Preencha os Campos Abaixo'
    },
    links: {
      type: Array,
      default: () => ([
        // {
        //   'title': 'Dashboard',
        //   'icon': 'fa fa-dashboard',
        //   'route': 'dashboard.index'
        // },
        // {
        //   'title': 'Meu título 2',
        //   'icon': 'fa fa-dashboard',
        //   'route': 'settings.profile.me'
        // }
      ])
    }
  }
}
</script>

<template lang="pug">
  div
    header.page-header(v-if="!noTitle")
      h2(v-if="headerTitle") {{ headerTitle }}
    section.content-header(v-if="!noTitle")
      h1
        | {{ title }}
        small
          b {{ subTitle }}
      ol.breadcrumb
        router-link(tag="li", :to="{ name: 'dashboard.index' }")
          a
            i.fa.fa-dashboard
            |  Home
        li(v-for="route in links")
          a(v-if="!route.route", href="#")
            i(v-if="route.icon", :class='route.icon')
            | {{ route.title }}
          router-link(:to="{name: route.route }", v-if="route.route")
            i(v-if="route.icon", :class='route.icon')
            | {{ route.title }}
    slot
</template>
