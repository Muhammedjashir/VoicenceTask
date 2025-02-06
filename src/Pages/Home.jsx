import React from 'react'
import App from '../App'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Home/Banner'
import Content from '../Components/Home/Content'
import Products from '../Components/Home/Products'
import OurProduct from '../Components/Home/OurProduct'
import Gallery from '../Components/Home/Gallery'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <div>
     <Navbar/>
     <Banner/>
     <Content/>
     <Products/>
     <OurProduct/>
     <Gallery/>
     <Footer/>
      </div>
    </>
  )
}

export default Home
