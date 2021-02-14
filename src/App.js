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

  const handleAddCart = (id, name, price, count) => {

    // console.log(cart)

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
    setTotalItems(sumCart)

    // TOTAL ORIGINAL PRICE
    let sumOriginalPrice = 0;
    cart.forEach(item => {sumOriginalPrice += item.price * item.count});
    setOriginalPrice(sumOriginalPrice)  
  }

  // TOTAL DISCOUNT
  const handleDiscount = () => {
    const strawberryExist = cart.some(i => i.id === "SR1")
    const coffeeExist = cart.some(i => i.id === "CF1")
    console.log(strawberryExist)
    console.log(coffeeExist)

    if (strawberryExist) {
      const strawberry = cart.find(i => i.id === "SR1");
      if (strawberry.count > 3) {
      const discount = (strawberry.count - 3) * 0.5;
      setDiscount(prevCount => prevCount + discount);
      } else {
        console.log("strawberry no discount")
      }
    } else {
      console.log("strawberry not found for discount")
    }

    if(coffeeExist) {
      const coffee = cart.find(i => i.id === "CF1");
      if (coffee.count >= 3 ) {
        const discount = coffee.count * 3.74;
        setDiscount(prevCount => prevCount + discount);
      } else {
        console.log("coffee no discount")
      }
    } else {
      console.log("coffee not found for discount")
    }
  }

  // console.log(cart);
  // console.log(totalItems);
  // console.log(originalPrice);
  console.log(discount);

  return (
    <Switch>
      <Route exact path="/">
          <Product items={data} handleAddCart={handleAddCart} totalItems={totalItems} handleDiscount={handleDiscount}/>
      </Route>  
      <Route exact path="/shop">
          <Shop cart={cart} totalItems={totalItems} originalPrice={originalPrice} discount={discount}/>
      </Route> 
    </Switch>
  );
}

export default App;
