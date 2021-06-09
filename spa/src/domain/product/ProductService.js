export default class ProductService {
  constructor (resource = '', endpoint = '') {
    this._resource = resource
    this._endpoint = endpoint
  }

  list () {
    return this._resource
      .get(this._endpoint)
      .then(response => response.data.products)
  }

  store (product) {
    return this._resource
      .post(this._endpoint, product)
  }

  delete (id) {
    return this._resource
      .delete(`${this._endpoint}/${id}`)
  }
}
