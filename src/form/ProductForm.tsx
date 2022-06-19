import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import type { Primitive, Product, ProductPropertyType } from '../aom/model'
import type { Dictionary } from '../utils'
import { parseBoolean, parseNumber } from '../utils'
import InputField from './InputField'

/** Parses the given string depending on the expected type.
 * Throws an error if the parsing is not possible.
 */
const parseValue = (
  value: string,
  type: Primitive
): string | number | boolean => {
  switch (type) {
    case 'string':
      return value
    case 'number':
      return parseNumber(value)
    case 'boolean':
      return parseBoolean(value)
    default:
      throw new Error(`Value '${value}' cannot be parsed to type '${type}'.`)
  }
}

/** Sets the value for the given product.
 * Returns whether the parsing was successful.
 */
const setPropertyWithParsing = (
  product: Product,
  propType: ProductPropertyType,
  value: string
): boolean => {
  let parsedValue
  let success = false
  try {
    parsedValue = parseValue(value, propType.type)
    success = true
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e.message)
    }
  }
  if (success) {
    product.setProperty(propType.name, parsedValue)
    return true
  }
  return false
}

const ProductForm: React.FC<{ product: Product }> = ({ product }) => {
  const { type } = product
  const [error, setError] = useState<Dictionary<boolean>>({})
  const updateError = useCallback(
    (name: string, value: boolean) => setError({ ...error, [name]: value }),
    [error]
  )
  return (
    <form className="w-full">
      <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">
        {type.name}
      </label>
      <div className="flex flex-wrap -mx-3 mb-6">
        {type.propertyTypes.map((propType) => (
          <InputField
            key={propType.name}
            name={propType.name}
            error={error[propType.name]}
            onChange={function (event) {
              const { value } = event.target
              const error = !setPropertyWithParsing(product, propType, value)
              updateError(propType.name, error)
            }}
          />
        ))}
      </div>
    </form>
  )
}

export default ProductForm
