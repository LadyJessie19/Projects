
const Product = (props) => {
    const { product, add, remove } = props
    
    return(
        <div className="spaceBody">
            <h4>{product.name}</h4>
            <img src={product.img} alt="fruitPhoto" />
            <h5>100g - R${product.price},00</h5>
            <div className="buttonsProduct">
            <button onClick={() => remove(product)}>-</button>
            <button onClick={() => add(product)}>+</button>
            </div>
        </div>
    )
}

export default Product