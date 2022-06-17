export type Product = {
  type: ProductType
  properties: ProductProperty[]
}

export type ProductType = {
  name: string
  propertyTypes: ProductPropertyType[]
}

export type ProductProperty = {
  type: ProductPropertyType
  value: unknown
}

export type ProductPropertyType = {
  name: string
  /* All JS primitive data types, except for `null`,
  because `typeof null` erroneously returns `object` instead of `null`, making it undistinguishable from `object`.
  This is a known bug of JS that has not been removed to maintain backwards-compatibility.
  */
  type: 'number' | 'bigint' | 'string' | 'boolean' | undefined | object
}

export const tShirt: ProductType = {
  name: 't-shirt',
  propertyTypes: [
    {
      name: 'size',
      type: 'number',
    },
    {
      name: 'brand',
      type: 'string',
    },
  ],
}
