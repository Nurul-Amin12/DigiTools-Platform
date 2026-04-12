
import './App.css'
import Banner from './Components/Banner/Banner'
import Summary from './Components/Banner/Summary'
import Footer from './Components/Footer/Footer'
import GEtStarted from './Components/GetStart/GetStarted'
import Model from './Components/Models/Model'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Transform from './Components/Pricing/Transform'


const getModels = async() => {
    const res = await fetch('/models.json')
    return res.json();
}

const modelPromise = getModels();


function App() {
  

  return (
    <>
      <div>
        <header>
          <Navbar/>
        </header>

        <section>
          <Banner/>
          <Summary/>
        </section>

        <section>
          <Model modelPromise={modelPromise}/>
        </section>

        <section>
          <GEtStarted/>
        </section>

        <section>
          <Pricing/>
          <Transform/>
        </section>

        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App