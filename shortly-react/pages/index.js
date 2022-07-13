import styles from '../styles/Home.module.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import FooterBanner from './Components/FooterBanner'
import Navbar from './Components/Navbar'
import UrlContainer from './Components/UrlContainer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <UrlContainer/>
    <FooterBanner/>   
    <Footer/>
    </>
  )
}
