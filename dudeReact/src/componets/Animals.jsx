import React,{useState} from 'react'
import dog from '../assets/dog.png'
import cat from '../assets/cat.png'


const Animals = () => {
    const [ animal, setAnimal ] = useState(dog)

    const text = {
        DOG: 'I Wanna See the Dog',
        CAT: 'I Wanna See the Cat'
    }
    return(
        <>
            <img style={{borderRadius:'14px'}} src={animal} alt="animal" /> <br/>
            <button onClick={() => setAnimal(animal === cat? dog : cat)}>{animal === cat? text.DOG : text.CAT }</button>
        </>
    )
}

export default Animals