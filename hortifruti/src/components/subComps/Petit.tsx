
const Petit = (props) => {
    const { product } = props

    const weight = product.qty * 100
    const total = product.price * product.qty
    const grams = weight > 1000? `, ${weight.toString().slice(1,2)}` : ''

    return(
        <div className="secondRow">
            <div className="productSpace">
                <img src={product.img} alt="img Info" />
                <span className="productName">{product.name}</span>
            </div>
            <div>
                <span>{product.qty} x</span>
            </div>
            <div>
                <span>{weight >= 1000 ? `${weight.toString().slice(0,1)}${grams}kg` : `${weight}g`}</span>
            </div>
            <div>
                <span>R${total},00</span>
            </div>
        </div>
    )
}

export default Petit