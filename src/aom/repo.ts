import { Product, ProductPropertyType, ProductType } from './model'

const tShirtPropertySize = new ProductPropertyType('size', 'number')

const tShirtPropertyBrand = new ProductPropertyType('brand', 'string')

const tShirt = new ProductType('t-shirt')
tShirt.addPropertyType(tShirtPropertySize)
tShirt.addPropertyType(tShirtPropertyBrand)

export const tShirts = [
  new Product(tShirt).setProperty('size', 2).setProperty('brand', 'Adidas'),
]
