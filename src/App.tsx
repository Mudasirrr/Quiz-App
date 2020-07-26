import React from 'react';
import Navbarr from './components/Navbar'
import Footer from './components/Footer'
// Styles
import { GlobalStyle, Wrapper } from './App.styles';
import Mainc from './Mainc';

const App = () => {
  return (
    <> <GlobalStyle />
          <Wrapper>

        <Navbarr/>
        <Mainc/>
        </Wrapper>
        
        <Footer/>
    </>
  )
};

export default App;
