import { classNames } from '../utils'

const InputField: React.FC<{
  name: string
  error?: boolean
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}> = ({ name, error = false, placeholder, onChange }) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {name}
      </label>
      <input
        className={classNames(
          'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
          error && 'border-red-500'
        )}
        id="grid-first-name"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField
