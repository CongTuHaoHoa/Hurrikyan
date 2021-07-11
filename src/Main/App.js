import React from 'react'
import '../StyleSheets/index.scss'
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../Components/About";

const App = () =>
{
  return  <>
    <div className='mainboard'>
      <Header/>
      <Banner/>
      {/*<About/>*/}
    </div>
  </>
}
export default App
