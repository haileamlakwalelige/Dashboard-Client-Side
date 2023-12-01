import React from 'react'
import Header from './boundary/Header'
import Footer from './boundary/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout