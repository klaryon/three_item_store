import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
import data from "../src/shared/data"

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCart = (id, name, price, count) => {

    console.log(cart)

    const indexExistCart = cart.findIndex(i => i.id === id)

    if (indexExistCart > -1) {
      const newCount = count;
      const newCountObjectItem = {id: id, name: name, price: price, count: newCount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    } 
    else {
      const newObjectItem = {id: id, name: name, price: price, count: count}
      cart.push(newObjectItem)
    }

    // TOTAL ITEMS CART
    let sumCart = 0;
    cart.forEach(item => {sumCart += item.count});
    // cart.forEach(item => console.log(item.count));
    console.log(sumCart);
    // setTotalItems(sumCart)
  }

  console.log(cart);
  
  return (
    <Switch>
      <Route exact path="/">
          <Product items={data} handleAddCart={handleAddCart} />
      </Route>  
      <Route exact path="/shop">
          <Shop cart={cart} />
      </Route> 
    </Switch>
  );
}

export default App;
