import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import { productsAPI } from "../rest/productAPI";

// import "./ViewCart.css";

function AddCartProducts() {
  const [productData, setAPIData] = useState([]);
  const cartTotal = [];

  function addProducts() {
    return cartTotal.push(499.99);
  }

  function addAll(productyQty) {
    console.log("CartCalculation productData:");
    console.log("CartCalculation productyQty:", productyQty);
    let newTotal = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      newTotal += productData[i].productQty * 499.99;
    }
    console.log("CartCalculation newTotal:", newTotal);
    return parseFloat(newTotal).toFixed(2);
  }

  useEffect(() => {
    productsAPI
      .get("https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/products")
      .then((response) => {
        setAPIData(response);
      });
  }, []);

  return (
    <div className="viewCartPage">
      {[...productData].reverse().map((data, index) => {
        return (
          <Container hidden id="hiddenProductPriceContainer" key={index}>
            {addProducts()}
          </Container>
        );
      })}
      <div>${addAll()}</div>
    </div>
  );
}

export default AddCartProducts;
