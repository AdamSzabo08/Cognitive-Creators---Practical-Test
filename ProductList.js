import { Link } from "react-router-dom";

const ProductList = ({ products, brand, product, category }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product._id}>
          <Link
            to={`/products/${product._id}`}
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <div>
              <div>
                <div className="product-name">{product.name}</div>
                <div className="product-p">{product.p}</div>
                <div className="product-m">{product.m}</div>
              </div>
              <div>
                <div className="product-summer"></div>
                <div className="product-i">{product.i}</div>
              </div>
            </div>
            <div className="product-price">{product.price1}.00 LEI</div>
            <div className="product-price">{product.price2}.00 LEI</div>
            <div className="product-availability">{product.availability}</div>
            <div className="product-button">
              <button>Add to Cart</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
