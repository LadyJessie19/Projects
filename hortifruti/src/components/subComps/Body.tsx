import Product from "./Product";

const Body = (props) => {
  const{ products, add, remove, cartLength } = props;

  return (
    <div className="body">
      <h2>Produtos - Você tem {cartLength} {cartLength > 1? 'items' : 'item'} no carrinho</h2>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            add={add}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
