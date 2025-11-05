import React from 'react'

const Produto = ({ nome, preco, categoria, quantidade, estoque }) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Status: {
            estoque > 0
            ? 'DISPONIVEL'
            : 'INDISPONIVEL'
            }</p>
    </div>
  )
}

export default Produto