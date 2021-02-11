import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
import data from "../src/shared/data"

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCart = (item, count) => {

    console.log(item)
    console.log(count)
    console.log(cart)

    const indexExistCart = cart.findIndex(i => i.item.id === item.id)

    if (indexExistCart > -1) {
      const newCount = count;
      const newCountObjectItem = {item: item, count: newCount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
      return newCount;
    } 
    else {
      const newObjectItem = {item:item, count:count}
      cart.push(newObjectItem)
    } 
  }

  return (
    <Switch>
      <Route exact path="/" component={() => <Product items={data} handleAddCart={handleAddCart} />} />
      <Route exact path="/shop" component={() => <Shop cart={cart} totalPrice={totalPrice} />}/>
    </Switch>
  );
}

export default App;
