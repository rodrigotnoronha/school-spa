<script>
export default {
  name: 'schedule',

  data () {
    return {
      currentErrors: {},
      schedule: {
        hour_start: null,
        hour_end: null,
        monday: {
          skill_id: null
        },
        tuesday: {
          skill_id: null
        },
        wednesday: {
          skill_id: null
        },
        thursday: {
          skill_id: null
        },
        friday: {
          skill_id: null
        },
        showSkills: false
      }
    }
  },

  mounted () {
    this.schedule = this.value
  },

  props: {
    index: {
      type: Number,
      required: true
    },
    errors: {
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({
        hour_start: null,
        hour_end: null,
        monday: {
          skill_id: null
        },
        tuesday: {
          skill_id: null
        },
        wednesday: {
          skill_id: null
        },
        thursday: {
          skill_id: null
        },
        friday: {
          skill_id: null
        }
      })
    }
  },
  watch: {
    errors: {
      handler: function (value, oldValue) {
        this.currentErrors = value
      },
      deep: true
    }
  }
}
</script>

<template lang="pug">
  div.row
    .col-md-2
      .col-sm-6
        f-time(v-model="schedule.hour_start", :errors="currentErrors['schedules.' + index + '.hour_start']")
      .col-sm-6
        f-time(v-model="schedule.hour_end", :errors="currentErrors['schedules.' + index + '.hour_end']")
    .col-md-2
      f-select-skill(v-model="schedule.monday_skill_id", :unique-loader="true", :errors="currentErrors['schedules.' + index + '.monday_skill_id']")
    .col-md-2
      f-select-skill(v-model="schedule.tuesday_skill_id", :unique-loader="true", :errors="currentErrors['schedules.' + index + '.tuesday_skill_id']")
    .col-md-2
      f-select-skill(v-model="schedule.wednesday_skill_id", :unique-loader="true", :errors="currentErrors['schedules.' + index + '.wednesday_skill_id']")
    .col-md-2
      f-select-skill(v-model="schedule.thursday_skill_id", :unique-loader="true", :errors="currentErrors['schedules.' + index + '.thursday_skill_id']")
    .col-md-2
      f-select-skill(v-model="schedule.friday_skill_id", :unique-loader="true", :errors="currentErrors['schedules.' + index + '.friday_skill_id']")
</template>
