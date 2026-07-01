

function Card({foto,titulo,paragrafo,texto ,background}) {
  return (
    <div className ={background}>
      <div className="card-cima">
      <img className="foto" src={foto} alt="" />
        <h1>{titulo}</h1>
      </div>
      <div className="card-baixo">
        <h3>{paragrafo}</h3>

        
        <button className="info">{texto}</button>
        </div>
        

    </div>
  )
}

export default Card