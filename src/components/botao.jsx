function Botao({text,background, func}){
    return (
        <button onClick={func} className={background}>
            {text}
        </button>
    )
}

export default Botao