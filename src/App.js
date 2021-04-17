// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
// import axios from "../src/shared/api";
import data from "../src/shared/data";

const App = () => {
  // const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  //COMMENTS ACTIVATE json-server
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("/");
  //     setData(response.data);
  //   }
  //   fetchData();
  // }, []);

  const onAddCart = (selectedItem) => {
    const exist = cart.find((item) => item.id === selectedItem.id);
    const greenTeaId = "GR1";
    exist
      ? setCart((prevItems) => {
          const updatedItem = { ...exist, quantity: exist.quantity + 1 };
          checkOffers(updatedItem);

          return prevItems.map((item) =>
            item.id === selectedItem.id ? updatedItem : item
          );
        })
      : setCart(
        selectedItem.id === greenTeaId
            ? [
                ...cart,
                {
                  ...selectedItem,
                  quantity: 1,
                  quantityDouble: 2,
                  discount: 0
                },
              ]
            : [...cart, { ...selectedItem, quantity: 1, discount: 0 }]
        );
  };
  const onRemoveCart = (selectedItem) => {
    const exist = cart.find((item) => item.id === selectedItem.id);
    exist.quantity === 1
      ? setCart(cart.filter((item) => item.id !== selectedItem.id))
      : setCart((prevItems) => {
          const updatedItem = { ...exist, quantity: exist.quantity - 1 };
          checkOffersDiscount(updatedItem);

          return prevItems.map((item) =>
            item.id === selectedItem.id ? updatedItem : item
          );
        });
  };

  const onClearCart = () => {
    setCart([]);
  };

  //CHECKOFFERS
  const checkOffers = (item) => {
    let { id, unitdiscount, quantity } = item;
    const greenTeaId = "GR1";
    const strawberryId = "SR1";
    const coffeeId = "CF1";

    if (id === greenTeaId) {
      item.quantityDouble = quantity * 2;
    } else if (id === strawberryId && quantity > 3) {
      item.discount += unitdiscount;
      console.log(item.discount);
    } else if (id === coffeeId && quantity >= 3) {
      item.discount = unitdiscount * quantity;
      console.log(item.discount);
    }
  };
  const checkOffersDiscount = (item) => {
    let { id, unitdiscount, quantity } = item;
    const greenTeaId = "GR1";
    const strawberryId = "SR1";
    const coffeeId = "CF1";

    if (id === greenTeaId) {
      item.quantityDouble = quantity * 2;
    } else if (id === strawberryId && quantity > 3) {
      item.discount -= unitdiscount;
      console.log(item.discount);
    } else if (id === strawberryId && quantity <= 3) {
      item.discount = 0;
      console.log(item.discount);
    } else if (id === coffeeId && quantity >= 3) {
      item.discount = unitdiscount * quantity;
      console.log(item.discount);
    } else if (id === coffeeId && quantity < 3) {
      item.discount = 0;
      console.log(item.discount);
    }
  };

  const onCheckOut = () => {
    totalItems === 0
      ? alert("Your cart is empty ❔, please select any item")
      : alert("Proceed to checkout 🙃");
  };

  // TOTAL ITEMS CART
  const totalItems = cart.reduce(
    (accumulatedQty, item) => accumulatedQty + item.quantity,
    0
  );

  // TOTAL ORIGINAL PRICE
  const originalPrice = cart.reduce(
    (accumulatedQty, item) => accumulatedQty + item.quantity * item.price,
    0
  );

  // TOTAL DISCOUNT
  const totalDiscount = cart.reduce(
    (accumulatedQty, item) => (accumulatedQty += item.discount),
    0
  );

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (accumulatedQty, item) =>
      accumulatedQty + (item.quantity * item.price - item.discount),
    0
  );

  console.log(cart);

  return (
    <Switch>
      <Route exact path="/">
        <Product items={data} onAddCart={onAddCart} totalItems={totalItems} />
      </Route>
      <Route exact path="/shop">
        <Shop
          cart={cart}
          onAddCart={onAddCart}
          onRemoveCart={onRemoveCart}
          onClearCart={onClearCart}
          onCheckOut={onCheckOut}
          totalItems={totalItems}
          originalPrice={originalPrice}
          totalDiscount={totalDiscount}
          totalPrice={totalPrice}
        />
      </Route>
    </Switch>
  );
};

export default App;
