import React,{ useState } from "react";

const Master = () => {
    
    const verde = '#32CD32'
    const amarelo = '#FFD700'
    const azul = '#1E90FF'
    
    const [ cor, changeColor ] = useState('Choose your color')

    return(
        <>
            <h5>{cor}</h5>
            <div className="box" style={{ backgroundColor:cor}}></div>
            <button onClick={() => changeColor(verde)}>Verde</button>
            <button onClick={() => changeColor(amarelo)}>Amarelo</button>
            <button onClick={() => changeColor(azul)}>Azul</button>
        </>
    )
}

export default Master