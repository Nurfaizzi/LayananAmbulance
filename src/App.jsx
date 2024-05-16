
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import WhyUs from './Components/WhyUs'
import About from './Components/About'
import Service from './Components/Service'
import Galery from './Components/Gallery'
import Informasi from './Components/Informasi'
import Contac from './Components/Contac'

function App() {

  return (
    <div className='scroll-smooth focus:scroll-auto'>
    <Navbar />
    <Banner/>
    <WhyUs />
    <About/>
    <Service />
    <Galery />
    <Informasi />
    <Contac />
    </div>
  )
}

export default App
