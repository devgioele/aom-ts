import { Dictionary } from '../utils'

class TypeNotFoundError extends TypeError {
  constructor(name: string) {
    super(`The property '${name}' does not exist.`)
  }
}

class TypeMismatchError extends TypeError {
  constructor(value: unknown, type: Primitive) {
    super(`The value '${value}' is not of the required type '${type}'.`)
  }
}

/* All JS primitive data types, except for `null`,
  because `typeof null` erroneously returns `object` instead of `null`, making it undistinguishable from `object`.
  This is a known bug of JS that has not been removed to maintain backwards-compatibility.
  */
export type Primitive =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | undefined
  | object

export class Product {
  type: ProductType
  properties: ProductProperty[] = []

  constructor(type: ProductType) {
    this.type = type
  }

  getProperty(name: string): ProductProperty | undefined {
    if (!this.type.existsPropertyType(name)) {
      throw new TypeNotFoundError(name)
    }
    return this.properties.find((prop) => prop.type.name == name)
  }

  setProperty(name: string, value: unknown): Product {
    const prop = this.getProperty(name)
    if (prop) {
      // Overwrite value of property
      prop.setValue(value)
    } else {
      // Add property with value
      const type = this.type.getPropertyType(name)
      const prop = new ProductProperty(type)
      prop.setValue(value)
      this.properties.push(prop)
    }
    return this
  }

  toString(): string {
    // Construct a flat object
    const flatObj: Dictionary = {}
    for (const prop of this.properties) {
      flatObj[prop.type.name] = prop.getValue()
    }
    // Use the vanilla stringify algorithm
    return JSON.stringify(flatObj, null, 2)
  }
}

export class ProductType {
  readonly name: string
  propertyTypes: ProductPropertyType[] = []

  constructor(name: string) {
    this.name = name
  }

  getPropertyType(name: string) {
    const propType = this.findPropertyType(name)
    if (!propType) throw new TypeNotFoundError(name)
    return propType
  }

  existsPropertyType = (name: string) => !!this.findPropertyType(name)

  private findPropertyType = (name: string) =>
    this.propertyTypes.find((propType) => propType.name === name)

  addPropertyType(propType: ProductPropertyType): ProductType {
    this.propertyTypes.push(propType)
    return this
  }
}

export class ProductProperty {
  readonly type: ProductPropertyType
  private value: unknown

  constructor(type: ProductPropertyType) {
    this.type = type
  }

  getValue = () => this.value

  setValue(value: unknown) {
    if (!this.type.accepts(value))
      throw new TypeMismatchError(value, this.type.type)
    this.value = value
  }
}

export class ProductPropertyType {
  readonly name: string
  readonly type: Primitive

  constructor(name: string, type: Primitive) {
    this.name = name
    this.type = type
  }

  accepts = (value: unknown) => typeof value === this.type
}
