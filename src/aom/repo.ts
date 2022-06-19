import { Product, ProductPropertyType, ProductType } from './model'

export const theProductType = new ProductType('t-shirt')
  .addPropertyType(new ProductPropertyType('size', 'number'))
  .addPropertyType(new ProductPropertyType('brand', 'string'))

export const tShirt = new Product(theProductType)
