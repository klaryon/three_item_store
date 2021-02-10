import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";
import data from "../src/shared/data"

const App = () => {
  const [teaQuantity, setTeaQuantity] = useState(0);
  const [berryQuantity, setBerryQuantity] = useState(0);
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);

  const handleSelectItem = (item, value) => {
    if(item.id === data.id[0]) {
      setTeaQuantity(value)
    } else if(item.id === data.id[1]) {
      setBerryQuantity(value)
    } else if(item.id === data.id[2]) {
      setCoffeeQuantity(value)
    }
  }
  
  console.log(teaQuantity)
  console.log(berryQuantity)
  console.log(coffeeQuantity)

  return (
    <Switch>
      {/* <Route exact path="/">
        <Product data={data} onSelectedItem={handleSelectItem} />
      </Route>
      <Route exact path="/shop">
        <Shop teaQuantity={teaQuantity} berryQuantity={berryQuantity} coffeeQuantity={coffeeQuantity}/>
      </Route> */}
      <Route exact path="/" component={() => <Product items={data} onSelectedItem={handleSelectItem} />} />
      <Route exact path="/shop" component={() => <Shop teaQuantity={teaQuantity} berryQuantity={berryQuantity} coffeeQuantity={coffeeQuantity} />}/>
    </Switch>
  );
}

export default App;
