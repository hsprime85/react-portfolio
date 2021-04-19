import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import NavbarComponent from './components/Navbar.component'
import Header from './components/Header.component'
import AboutMe from './components/AboutMe.component'
import Services from './components/Services.component'
import Experience from './components/Experience.component'

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
      <Services/>
      <Experience />
    </>

  );
}

export default App;
