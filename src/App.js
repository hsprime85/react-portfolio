import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import NavbarComponent from './components/Navbar.component'
import Header from './components/Header.component'
import AboutMe from './components/AboutMe.component'
import Skills from './components/Skills.component'
import Experience from './components/Experience.component'
import Portfolio from './components/Portfolio.component'
import Testimomnial from './components/Testimomnial.component'
import Contact from './components/Contact.component'
import Footer from './components/Footer.component'

function App() {
  return (
    <>
      <Particles className='particles-canvas'
        params={{ 
          particles:{ 
            number: {
              value: 20,
              density:{
                enable: true,
                value_area: 700
              }
            },
            shape:{
              type: 'circle',
              stroke:{
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }}
      />
      <NavbarComponent />
      <Header/>
      <AboutMe />
      <Skills/>
      <Experience />
      <Portfolio />
      <Testimomnial />
      <Contact/>
      <Footer />

    </>

  );
}

export default App;
