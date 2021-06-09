export default class Product {
  constructor (sku = '', name = '', price = 0.00, description = '') {
    this.sku = sku
    this.name = name
    this.price = price
    this.description = description
  }
}
