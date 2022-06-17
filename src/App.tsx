import Footer from './Footer'
import Header from './Header'
import SimpleButton from './SimpleButton'
import PropertiesForm from './form/PropertiesForm'
import { Product, tShirt } from './model'

const product: Product = {
  type: tShirt,
  properties: [],
}

const App: React.FC = () => {
  const handleCreateProduct = () => {
    // TODO
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="relative flex-auto p-10 bg-slate-300 text-black">
        <div className="flex flex-col">
          <PropertiesForm entityName="Product" />
        </div>
        <SimpleButton
          text="Create product"
          className="bg-green-600 hover:bg-green-800 text-white absolute m-10 bottom-0 right-0"
          onClick={handleCreateProduct}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
