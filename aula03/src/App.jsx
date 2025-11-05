import React from 'react'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
      {
        [
          {
            nome: "TV", preco: 1200, categoria: "Eletronicos", quantidade: 5
          }
        ].map((produto) => (
          <Produto
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            quantidade={produto.quantidade}
            estoque={produto.quantidade}
          />
        ))
      }
    </div>
  )
}

export default App