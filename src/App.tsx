import Footer from './Footer'
import Header from './Header'
import SimpleButton from './SimpleButton'
import ProductForm from './form/ProductForm'
import toast from 'react-hot-toast'
import { tShirt } from './aom/repo'

const App: React.FC = () => {
  const handlePrintProduct = () => {
    const msg = `Product = ${tShirt.toString()}`
    // eslint-disable-next-line no-console
    console.log(msg)
    toast.success(msg)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="relative flex-auto p-10 bg-slate-300 text-black">
        <div className="flex flex-col">
          <ProductForm product={tShirt} />
        </div>
        <SimpleButton
          text="Print product"
          className="bg-green-600 hover:bg-green-800 text-white absolute m-10 bottom-0 right-0"
          onClick={handlePrintProduct}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
