import React, { useState } from "react";
import First from "./subComponents/First";
import Second from "./subComponents/Second";

const Super = () => {
    
    const choice = {
        beauty: <First/>,
        music: <Second/>
    }
    const [noice, setNoice] = useState(false)

    const textChoice = {
        BEAUTY: 'I Want Beauty!',
        MUSIC: 'I Want Music!'
    }

    const estilo = {border:'1px solid green', padding:'7px'}
    
    return(
        <div style={estilo}>
            <p>Music or Beauty?</p>      
            
            <button onClick={() => setNoice(!noice)}>{noice? textChoice.MUSIC : textChoice.BEAUTY}</button>           
            {noice? choice.beauty : choice.music}
        </div>
        )
}

export default Super