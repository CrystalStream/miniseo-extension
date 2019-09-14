import React from 'react'
import './App.scss'

import SeoChecker from './containers/SeoChecker'
import Header from './components/Header'

function App() {
  return (
    <div className="miniseo">
      <Header />
    <div className="container">
      <section className="section main-section">
        <SeoChecker />
      </section>
    </div>
  </div>
  )
}

export default App
