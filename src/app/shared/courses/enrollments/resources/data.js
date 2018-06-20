export default () => ({
  entity: 'enrollment',
  entities: 'enrollments',
  enrollments: [],
  links: [],
  title: 'Matrículas',
  subTitle: 'Matrículas',
  titleCreate: 'Adicionar matrícula',
  prefixRouter: 'school.courses.enrollments.',
  columns: {
    'group.complete_label': 'Turma',
    'student.name': 'Estudante',
    'route.label': 'Rota'
  },
  includes: ['student', 'group', 'route']
})
