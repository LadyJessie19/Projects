import { useState } from 'react'

import Header from "./subComps/Header"
import Body from "./subComps/Body"
import Shopping from "./subComps/Shopping"

import products  from "../assets/products";

const Mae = () => {
    const [cart, setCart ] = useState([])
    const productExist = (product) => {
      return cart.find(x => x.id === product.id)
    } 
    const add = (product) => {        
      const exist = productExist(product);
      if(exist) {
        setCart(cart.map(x => x.id === product.id ? {...x, qty: Number(x.qty) + 1} : x));
      } else {
        setCart([...cart, {...product, qty:1 }])
      }
    }
    const remove = (product) => {
      const exist = productExist(product);
      
      if(exist.qty === 1) {
        setCart(cart.filter((x) => x.id !== product.id))
      }  else{
        setCart(
          cart.map((x) => x.id === product.id? {...x, qty: Number(x.qty) - 1} : x)
        )
      }
    }
    return (
        <>
            <Header />
            <Body products={products} add={add} remove={remove} cartLength={cart.length}/>
            {cart.length > 0? <Shopping cart={cart}/> : ''}
        </>
    )
}

export default Mae