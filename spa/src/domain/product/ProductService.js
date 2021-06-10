export default class ProductService {
  constructor (resource = '', endpoint = '') {
    this._resource = resource
    this._endpoint = endpoint
  }

  list () {
    return this._resource
      .get(this._endpoint)
      .then(response => response.data.products)
      .catch(error => {
        console.log(error)
        throw new Error('Não Foi Possível carregar os produtos. Tente mais tarde')
      })
  }

  // TODO: Tratar erro
  store (product) {
    if (product.id) {
      return this._resource
        .put(`${this._endpoint}/${product.id}`, product)
    }

    return this._resource
      .post(this._endpoint, product)
  }

  // TODO: Tratar erro
  show (id) {
    return this._resource
      .get(`${this._endpoint}/${id}`)
      .then(response => response.data.product)
  }

  // TODO: Tratar erro
  delete (id) {
    return this._resource
      .delete(`${this._endpoint}/${id}`)
  }
}
