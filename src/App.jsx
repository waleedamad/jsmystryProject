import Biling from "./Biling&invoicing/Biling"
import AboutUs from "./components/aboutUs/AboutUs"
import Footer from "./components/footer/Footer"
import MainPage from "./components/mainpage/MainPage"
import MoneyHandling from "./components/moneyhandling/MoneyHandling"
import Navbar from "./components/navbar/Navbar"
import OnlineAnalysis from "./components/onlineAnalysis/OnlineAnalysis"
import Services from "./components/service/Services"

function App() {
  

  return (
    <>
    <Navbar/>
    <MainPage/>
    <MoneyHandling/>
    <Biling/>
    <OnlineAnalysis/>
    <AboutUs/>
    <Services/>
    <Footer/>
    </>
  )
}

export default App
