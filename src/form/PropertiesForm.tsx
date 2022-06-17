import PropertyForm from './PropertyForm'

const PropertiesForm: React.FC<{ entityName: string }> = ({ entityName }) => {
  return (
    <form className="w-full">
      <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">
        {entityName}
      </label>
      <PropertyForm />
    </form>
  )
}

export default PropertiesForm
