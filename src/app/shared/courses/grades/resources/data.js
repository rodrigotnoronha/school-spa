export default () => ({
  entity: 'grade',
  entities: 'grades',
  grades: [],
  links: [],
  title: 'Notas',
  subTitle: 'Notas',
  titleCreate: 'Adicionar nota',
  prefixRouter: 'school.courses.grades.',
  columns: {
    id: 'ID',
    'quiz.label': 'Prova/Trabalho',
    'quiz.date': 'Data da Prova/Trabalho',
    'student.name': 'Estudante',
    value: 'Nota'
  },
  includes: [
    'quiz',
    'student'
  ]
})
