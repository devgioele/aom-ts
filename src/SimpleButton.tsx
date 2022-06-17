import { classNames } from './utils'

const SimpleButton: React.FC<{
  className?: string
  text: string
  onClick?: () => void
}> = ({ className, text, onClick }) => {
  return (
    <button
      className={classNames('font-bold py-2 px-4 rounded', className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SimpleButton
