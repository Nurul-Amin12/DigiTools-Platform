
import './App.css'
import Banner from './Components/Banner/Banner'
import Summary from './Components/Banner/Summary'
import GEtStarted from './Components/GetStart/GetStarted'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Transform from './Components/Pricing/Transform'


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
          <Transform/>
        </section>
      </div>
    </>
  )
}

export default App