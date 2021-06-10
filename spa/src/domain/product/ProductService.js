export default class ProductService {
  constructor (resource = '', endpoint = '') {
    this._resource = resource
    this._endpoint = endpoint
  }

  list () {
    return this._resource
      .get(this._endpoint)
      .then(response => response.data.data)
      .catch(error => {
        console.log(error)
        throw new Error('Não foi possível carregar os produtos. Tente mais tarde')
      })
  }

  store (product) {
    if (product.id) {
      return this._resource
        .put(`${this._endpoint}/${product.id}`, product)
        .then(response => response.data.data)
        .catch(error => {
          console.log(error)
          throw new Error('Não foi possível alterar o produto.')
        })
    }

    return this._resource
      .post(this._endpoint, product)
      .then(response => response.data.data)
      .catch(error => {
        console.log(error)
        throw new Error('Não foi possível cadastrar o produto.')
      })
  }

  show (id) {
    return this._resource
      .get(`${this._endpoint}/${id}`)
      .then(response => response.data.data)
      .catch(error => {
        console.log(error)
        throw new Error('Não foi carregar o produto.')
      })
  }

  delete (id) {
    return this._resource
      .delete(`${this._endpoint}/${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
        throw new Error('Não foi excluir o produto.')
      })
  }
}
