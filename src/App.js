import React from 'react';
import { Route, Switch } from "react-router-dom";
import Product from "./screens/Product/Product";
import Shop from "./screens/Shop/Shop";

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/shop" component={Shop}/>
      </Switch>
  );
}

export default App;
