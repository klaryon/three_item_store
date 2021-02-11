import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
import data from "../src/shared/data"

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCart = (item, count) => {

    console.log(cart)

    const indexExistCart = cart.findIndex(i => i.item.id === item.id)

    if (indexExistCart > -1) {
      const newCount = count;
      const newCountObjectItem = {item: item, count: newCount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    } 
    else {
      const newObjectItem = {item:item, count:count}
      cart.push(newObjectItem)
    }

    // TOTAL ITEMS CART
    let sumCart = 0;
    cart.forEach(item => {sumCart += item.count});
    // cart.forEach(item => console.log(item.count));
    console.log(sumCart);
  }

  // useEffect(() => {
  //   // handleTotalItems()
  //   console.log("effect happening")
  // }, [cart])


  // const handleTotalItems = () => {
  //   let sumCart = 0;
  //   cart.forEach(item => {sumCart += item.count});
  //   console.log(sumCart);
  //   setTotalItems(sumCart)
  // }

  return (
    <Switch>
      <Route exact path="/" component={() => <Product items={data} handleAddCart={handleAddCart} />} />
      <Route exact path="/shop" component={() => <Shop />}/>
    </Switch>
  );
}

export default App;
