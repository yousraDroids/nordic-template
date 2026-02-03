import './App.css'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import FocusAreas from './components/FocusAreas'
import HowWeWork from './components/HowWeWork'
import Contact from './components/Contact'

function App() {
  return (
    <main className="app">
      <Hero />
      <WhatWeDo />
      <FocusAreas />
      <HowWeWork />
      <Contact />
    </main>
  )
}

export default App
