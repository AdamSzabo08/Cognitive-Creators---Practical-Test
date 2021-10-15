import data from "./data";
import ProductList from "./ProductList";
import React, { useState } from "react";

const Products = () => {
  const { products } = data;

  const [brand, setBrand] = useState("Car / Off road vehicles ATV");

  function Types() {
    const [typeState, changeState] = useState({
      activeObject: null,
      objects: [
        "Car / Off road vehicles ATV",
        "Trucks",
        "Agriculture",
        "Inner Tubes",
        "Skid Chains",
        "Rims",
      ],
    });

    function toggleActive(index) {
      changeState({ ...typeState, activeObject: typeState.objects[index] });
    }

    function toggleActiveStyle(index) {
      if (typeState.objects[index] === typeState.activeObject) {
        return "box active";
      } else {
        return "box inactive";
      }
    }

    return (
      <ol className="type">
        {typeState.objects.map((element, index) => (
          <li>
            <button
              key={index}
              className={toggleActiveStyle(index)}
              onClick={() => {
                setBrand(typeState.objects[index]);
                toggleActive(index);
              }}
            >
              {typeState.objects[index]}
            </button>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="categories">
            <ul className="cat">
              <li>
                <Types />
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="Productlist">
          <div className="brand">
            <div>
              <h3>{brand}</h3>
              <a href="#Pirelli">Pirelli</a>
              <a href="#Michelin">Michelin</a>
              <a href="#Hankook">Hankook</a>
              <a href="#Good year">Good year</a>
              <a href="#pirelli">Maxxis</a>
              <a href="#pirelli">Hartland</a>
              <a href="#pirelli">Dunlop</a>
              <a href="#pirelli">Bridgeston</a>
            </div>
          </div>
          <div>
            <h1 class="Pirelli" id="Pirelli">
              Pirelli
            </h1>
            <div>
              {products && (
                <ProductList
                  products={products.filter(
                    (product) => product.brand === "Pirelli"
                    /* && product.category === { brand } */
                  )}
                />
              )}
            </div>
            <h1 class="Michelin" id="Michelin">
              Michelin
            </h1>
            <div>
              {products && (
                <ProductList
                  products={products.filter(
                    (product) => product.brand === "Michelin"
                    /* && product.category === { brand } */
                  )}
                />
              )}
            </div>
            <h1 class="Hankook" id="Hankook">
              Hankook
            </h1>
            <div>
              {products && (
                <ProductList
                  products={products.filter(
                    (product) => product.brand === "Hankook"
                    /* && product.category === { brand } */
                  )}
                />
              )}
            </div>
            <h1 class="Good year" id="Good year">
              Good year
            </h1>
            <div>
              {products && (
                <ProductList
                  products={products.filter(
                    (product) => product.brand === "Good year"
                    /* && product.category === { brand } */
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
