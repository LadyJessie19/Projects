import Petit from './Petit';

const Shopping = (props) => {
    const { cart } = props
    const totalCart = cart.reduce((acumulado, item) => {return acumulado + (item.price * item.qty)}, 0)
    return(
    <>
        <div className="shopping">
            <h3>Seu carrinho de compras</h3>
            <hr />
            <div className="firstRow">
                <span>Produto</span><span>Quantidade</span><span>Peso total</span><span>Preço total</span>
            </div>
        {cart.map((item, index) => <Petit key={index} product={item}/>)}
            <div className="checkout">
                <h3>Total do carrinho : R${totalCart},00</h3>
                <button>Finalizar a Compra</button>
            </div>
            </div>
    </>
    )
}

export default Shopping