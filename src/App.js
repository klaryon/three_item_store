import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
import data from "../src/shared/data"

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCart = (id, name, price, image, unitdiscount, count) => {

    const indexExistCart = cart.findIndex(i => i.id === id)
    const greenTeaId = "GR1"
    const strawberryId = "SR1";
    const coffeeId = "CF1";

    //REPLACE EXISTING ITEM
    if (indexExistCart > -1 && id === greenTeaId) {
      const doubleCount = count * 2;
      const discount = 0;
      const newCountObjectItem = {id: id, name: name, price: price, image:image, count: doubleCount, discount: discount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    }
    if (indexExistCart > -1 && id === strawberryId && count < 3) {
      const discount = 0;
      const newCountObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    }
    if (indexExistCart > -1 && id === strawberryId && count > 3) {
      const discount = (count - 3) * unitdiscount;
      const newCountObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    } 
    if (indexExistCart > -1 && id === coffeeId && count < 3) {
      const discount = 0;
      const newCountObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    }
    if (indexExistCart > -1 && id === coffeeId && count >= 3) {
      const discount = count * unitdiscount;
      const newCountObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.splice(indexExistCart, 1, newCountObjectItem);
    } 
    //PUSH NEW ITEM
    if (indexExistCart === -1 && id === greenTeaId) {
      const doubleCount = count * 2;
      const discount = 0;
      const newObjectItem = {id: id, name: name, price: price, image:image, count: doubleCount, discount: discount};
      cart.push(newObjectItem)
    }
    if (indexExistCart === -1 && id === strawberryId && count <= 3) {
      const discount = 0;
      const newObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.push(newObjectItem)
    }
    if (indexExistCart === -1 && id === strawberryId && count > 3) {
      const discount = (count - 3) * unitdiscount;
      const newObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.push(newObjectItem)
    }
    if (indexExistCart === -1 && id === coffeeId && count < 3) {
      const discount = 0;
      const newObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.push(newObjectItem)
    }
    if (indexExistCart === -1 && id === coffeeId && count >= 3) {
      const discount = count * unitdiscount;
      const newObjectItem = {id: id, name: name, price: price, image:image, count: count, discount: discount};
      cart.push(newObjectItem)
    }

    // TOTAL ITEMS CART
    let sumCart = 0;
    cart.forEach(item => {sumCart += item.count});
    setTotalItems(sumCart)

    // TOTAL ORIGINAL PRICE
    let sumOriginalPrice = 0;
    cart.forEach(item => {sumOriginalPrice += item.price * item.count});
    setOriginalPrice(sumOriginalPrice)

    // TOTAL DISCOUNT
    let totalDiscount = 0;
    cart.forEach(item => {totalDiscount += item.discount});
    setDiscount(totalDiscount)

    // TOTAL PRICE
    let totalPrice = 0;
    cart.forEach(item => {totalPrice += (item.price * item.count) - item.discount});
    setTotalPrice(totalPrice) 
  }

  console.log(cart);
  console.log(originalPrice);
  console.log(discount);
  console.log(totalPrice);

  return (
    <Switch>
      <Route exact path="/">
          <Product items={data} handleAddCart={handleAddCart} totalItems={totalItems}/>
      </Route>  
      <Route exact path="/shop">
          <Shop cart={cart} totalItems={totalItems} originalPrice={originalPrice} discount={discount} totalPrice={totalPrice}/>
      </Route> 
    </Switch>
  );
}

export default App;
