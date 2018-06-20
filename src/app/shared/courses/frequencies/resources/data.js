export default () => ({
  entity: 'frequency',
  entities: 'frequencies',
  frequencies: [],
  links: [],
  title: 'Frequências',
  subTitle: '',
  titleCreate: 'Adicionar frequência',
  prefixRouter: 'school.courses.frequencies.',
  columns: {
    date: 'Data',
    'subject.label': 'Disciplina',
    'student.name': 'Estudante',
    present: 'Presente',
    justified_absence: 'Falta justificada'
  }
})
