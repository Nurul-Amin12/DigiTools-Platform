
import './App.css'
import Banner from './Components/Banner/Banner'
import Summary from './Components/Banner/Summary'
import GEtStarted from './Components/GetStart/GetStarted'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'


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
          <GEtStarted/>
        </section>

        <section>
          <Pricing/>
        </section>
      </div>
    </>
  )
}

export default App