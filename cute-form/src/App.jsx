import { useState } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import './App.css'

function App() {

  const person = {
    name: '',
    age: '',
    gender: '',
    skills: '',
    isBrazilian: '',
    aboutMe:''
  }

  const [guy, setGuy] = useState(person)

  const rhymes = ['footer', 'snooker', 'booker', 'cooker', 'hooker', 'looker', 'booger']

  return (
    <div className="App">
      <Header name={guy.name} />
      <Body guy={guy} setGuy={setGuy}/>
      <Footer array={rhymes}/>
    </div>
  )
}

export default App
