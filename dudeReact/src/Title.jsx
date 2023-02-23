import React, { useState } from "react";

const Title = () => {

    const [cor, setCor] = useState(0)

    const rosa0 = {color:'#DB7093'}
    const rosa1 = {color:'#bc6280'}
    const rosa2 = {color:'#C71585'}

    const colors = [rosa0, rosa1, rosa2]

    const retCor=(cor) => {
        if(cor === 0){
            return colors[0]
        } else if(cor === 1){
            return colors[1]
        } else{
            return colors[2]
        }
    }

    const mudaCor = () => {
        setCor(cor+1)
        if(cor > 1){
            setCor(0)
        }
    }


  return (
    <div className="title">
      <h2 style={retCor(cor)}>Estou aprendendo essa <del>mer..</del> maravilha</h2>
      <button onClick={() => mudaCor()}>Pinkier, Girl</button>
    </div>
  );
};

export default Title;
