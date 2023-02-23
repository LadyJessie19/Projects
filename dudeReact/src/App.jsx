import './App.css'
import Exe1 from './componets/Exe1'
import Exe2 from './componets/Exe2'
import Master from './componets/Master'
import Animals from './componets/Animals'
import Super from './componets/Super'
import Title from './Title'

import array from './assets/array'

function App() {
  
  const imprime = (info) => {
    return console.log(info)
  }

  return (
    <div className="App">
      <Title/>
      <div className="left">
        <Exe1 />
      </div>
      <div className="center">
        <Master />
      </div>
      <div className="right">
        <Exe2 name='^nomes esquisitos^' funcao={imprime} array={array}/>
      </div>
      <div className="animals">
        <Animals />
      </div>
      <div className="render">
        <Super />
      </div>
    </div>
  )
}

export default App
