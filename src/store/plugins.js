
const subscribe = (store) => {
  store.subscribe((mutation, payload) => {
    if (mutation.type === 'setTenantId') {
      // console.log('entrou aqui')
      // check tenant id has changed.
    }
  })
}

export default (store) => {
  subscribe(store)
}

