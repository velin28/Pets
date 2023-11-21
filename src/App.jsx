import { useState } from 'react'
import './App.css'
import Cadastro from './components/Cadastro.jsx';
import Animal from './components/Animais.jsx';

function App() {
  const [listaAnimal, setListaAnimal] = useState([
    { id: 1, nome: "Carlos", contato: "998865932", foto: "https://cassul.com.br/wp-content/uploads/2021/01/vira-lata-caramelo-meme.jpg", local: "Rua", raca:"SRD(Sem Raça Defenida)", estado:"Resgatado",  isFinalizado: false},
    { id: 2, nome: "Pedro", contato: "@pedroLegal", foto: "https://pbs.twimg.com/media/Da3FmbSWkAEuwUJ.jpg", local: "Avenida", raca:"Pincher", estado:"Perdido", isFinalizado: false},
    { id: 3, nome: "João", contato: "João Fernando", foto: "https://i.pinimg.com/736x/b4/b2/47/b4b2476be2ce21cefbce74ee1af6171f.jpg", local: "Estrada", raca:"Pastor Alemão", estado:"Resgatado", isFinalizado: false},
  ]);
  const addAnimal = (nome, contato, foto, local, raca, estado) => { 
    const newAnimal = [...listaAnimal, {
      id: Math.floor(Math.random()*10000),
      nome,
      contato,
      foto,
      local,
      raca,
      estado,
      isFinalizado: false,
    }]
    setListaAnimal(newAnimal);
  }

  const concluir = (id) => {
    const newAnimal = [...listaAnimal]
    newAnimal.map((item) => {
      if (item.id === id) {
        item.isFinalizado = !item.isFinalizado
      }
    })
    
    setListaAnimal(newAnimal);
  }

  const remover = (id) => {
    const newAnimal = [...listaAnimal].filter(item => item.id != id)

    setListaAnimal(newAnimal);
  }
  return (
    <>
      <div className='Cadastro'>
      <Cadastro addAnimal={addAnimal}/>
      <div className='listaAnimais'>
        {
          listaAnimal
          .map((item) => (
            <Animal key={item.id} item={item} concluir={concluir} remover={remover}/>
          ))
        }
      </div>
      </div>
    </>
  )
}

export default App