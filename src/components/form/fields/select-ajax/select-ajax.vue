<script>
import resources from './resources'

export default {
  // component name.
  name: 'f-select-ajax',

  mixins: [resources]
}

</script>

<template lang="pug">
  // form group
  div.label-floating.has-add-button(:class="groupClasses")
    a.btn-add(v-if="create && isEmpty && mode === 'select'", @click="setAddMode")
      icon(name="plus")
      | Novo
    a.btn-add(v-if="create && isEmpty && mode === 'add'", @click="addEntity")
      icon(name="check")
      | Salvar
    // field label.
    label.control-label {{ label }}
    input.form-control(
      v-if="mode === 'add'",
      type="text", @focus="focus", @blur="blur",
      name="add-entity", id="add-entity", v-model="addLabel")

    // ajax select field.
    div(:class="{'input-group': getAll}")
      emtudo-select(
        :limit="limit",
        :loading="getLoading"
        :block-keys="['Tab']",
        :disabled="disabled",
        v-if="mode === 'select'",
        :track-by="trackBy",
        :name="name",
        :hide-tags="multiple",
        :close-on-select="!multiple",
        :clear-on-select="!multiple",
        v-model="internalValue",
        :placeholder="placeholder || 'Selecione'",
        :id="name",
        :allow-empty="required",
        :show-labels="showLabels",
        :multiple="multiple",
        :searchable="searchable",
        :hide-selected="hideSelected",
        @open="focus",
        @close="blur",
        :options="getOptions ? getOptions : []",
        :label="labelBy",
        :internal-search="false",
        @search-change="doSearch",
        @input="onChange")
      span.input-group-addon.btn.btn-xs.btn-success(:disabled="disabled", :class="{disabled: 'disabled'}", v-if="getAll", :aria-describedby="name", @click.prevent="refreshAll(true)")
        i.fa.fa-refresh
    error(:message="errors")
</template>
