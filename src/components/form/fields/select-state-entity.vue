<script>
import Select from './select'

export default {
  name: 'f-select-state-entity',
  extends: Select,
  props: {
    options: {
      type: Array,
      default: () => [
        {
          id: 'SSP',
          label: 'SSP - Secretaria de Segurança Pública'
        },
        {
          id: 'PM',
          label: 'PM - Polícia Militar'
        },
        {
          id: 'PC',
          label: 'PC - Policia Civil'
        },
        {
          id: 'CNT',
          label: 'CNT - Carteira Nacional de Habilitação'
        },
        {
          id: 'DIC',
          label: 'DIC - Diretoria de Identificação Civil'
        },
        {
          id: 'CTPS',
          label: 'CTPS - Carteira de Trabaho e Previdência Social'
        },
        {
          id: 'FGTS',
          label: 'FGTS - Fundo de Garantia do Tempo de Serviço'
        },
        {
          id: 'IFP',
          label: 'IFP - Instituto Félix Pacheco'
        },
        {
          id: 'IPF',
          label: 'IPF - Instituto Pereira Faustino'
        },
        {
          id: 'IML',
          label: 'IML - Instituto Médico-Legal'
        },
        {
          id: 'MTE',
          label: 'MTE - Ministério do Trabalho e Emprego'
        },
        {
          id: 'MMA',
          label: 'MMA - Ministério da Marinha'
        },
        {
          id: 'MAE',
          label: 'MAE - Ministério da Aeronáutica'
        },
        {
          id: 'MEX',
          label: 'MEX - Ministério do Exército'
        },
        {
          id: 'POF',
          label: 'POF - Polícia Federal'
        },
        {
          id: 'POM',
          label: 'POM - Polícia Militar'
        },
        {
          id: 'SES',
          label: 'SES - Carteira de Estrangeiro'
        },
        {
          id: 'SJS',
          label: 'SJS - Secretaria da Justiça e Segurança'
        },
        {
          id: 'SJTS',
          label: 'SJTS - Secretaria da Justiça do Trabalho e Segurança'
        },
        {
          id: 'ZZZ',
          label: 'ZZZ - Outros (inclusive exterior)'
        }
      ]
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
