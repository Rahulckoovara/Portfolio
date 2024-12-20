
import './App.css'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';

import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
    </>
    
  )
}

export default App
