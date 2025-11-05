import React from 'react'

const RenderizandoComFuncoes = () => {

  function oQueRenderizar(Estado) {
    if (Estado === "Paraiba") {
      return <h1>João Pessoa</h1>
    }
    else {
      return <h2>Recife</h2>
    }       

  }

    return (
    <div>
      {oQueRenderizar("Recife")}
    </div>
  )
}

export default RenderizandoComFuncoes