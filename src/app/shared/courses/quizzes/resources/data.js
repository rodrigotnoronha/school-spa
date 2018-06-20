export default () => ({
  entity: 'quiz',
  entities: 'quizzes',
  quizzes: [],
  links: [],
  title: 'Provas e trabalhos',
  subTitle: 'Provas e trabalhos',
  titleCreate: 'Adicionar prova/trabalho',
  prefixRouter: 'school.courses.quizzes.',
  columns: {
    id: 'ID',
    label: 'Nome',
    'schedule.skill.label': 'Disciplina',
    date: 'Data',
    score: 'Valor'
  },
  includes: ['schedule'],
  kindOptions: [
    {
      id: 'proof', label: 'Prova'
    },
    {
      id: 'work', label: 'Trabalho'
    },
    {
      id: 'cultural_fair', label: 'Feira Cultural'
    },
    {
      id: 'others', label: 'Outros'
    }
  ]
})
