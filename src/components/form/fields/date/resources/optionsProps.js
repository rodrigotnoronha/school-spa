export default () => ({
  type: 'day',
  SundayFirst: true,
  week: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
  month: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  format: 'DD/MM/YYYY',
  mask: '##/##/####',
  color: {
    checked: '#F50057',
    header: '#3f51b5',
    headerText: '#fff'
  },
  wrapperClass: '',
  inputClass: '',
  inputStyle: {
    'display': 'inline-block',
    'padding': '6px',
    'line-height': '22px',
    'font-size': '16px',
    'border': '2px solid #fff',
    'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    'border-radius': '2px',
    'color': '#5F5F5F'
  },
  placeholder: 'Quando?',
  buttons: {
    ok: 'OK',
    cancel: 'Cancelar'
  },
  overlayOpacity: 0.5,
  dismissible: true
})
