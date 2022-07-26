
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import FooterBanner from './Components/FooterBanner'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import UrlContainer from './Components/UrlContainer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <UrlContainer/>
    <Services/>
    <FooterBanner/>   
    <Footer/>
    </>
  )
}
