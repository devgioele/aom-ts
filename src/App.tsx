import Footer from './Footer'
import Form from './Form'
import Header from './Header'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-auto p-10 bg-slate-300 text-black">
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default App
