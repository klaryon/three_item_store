# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![alt text](https://github.com/klaryon/three_item_store/blob/develop/src/assets/gif/three-item-store.gif?raw=true)

## Task description
You are the lead FE programmer for a small web shop. You are required to make a simple
page where the user can add products to a cart, and the total of the cart is updated
in real time.

### API

You will have an API endpoint that returns products with the following structure (assume
your preferred seralization format)

| id  | name         | price  |
| --- |:------------:| ------:|
| GR1 | Green tea    |  £3.11 |
| SR1 | Strawberries |  £5.00 |
| SF1 | Coffee       | £11.23 |

There will be an API endpoint to actually do the checkout, charge customer etc, but it won't
be used here.

## Special conditions:

* The CEO is a big fan of buy-one-get-one-free offers and of green tea. He wants us to add a
rule to do this.
* The COO, though, likes low prices and wants people buying strawberries to get a price
discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50
* The CTO is a coffee addict. If you buy 3 or more coffees, the price of all coffees should drop
to two thirds of the original price.

We can assume that discount do not change very often so they can be hardcoded in the
application, for display purpose.
Our check-out can scan items in any order, and because the C*Os change their minds, it needs
to be flexible regarding our pricing rules.

## Deliverables

* A shop route where the user can view all available items and add to basket (a quantity selector would be nice).
* A checkout route where the user can view all items in his basket with:
  * `1` The quantity of each item and the original prices
  * `2` All the discounts currently applied
  * `3` The total price of the basket after discounts applied

* Some navigation implementation between the routes.
* A service or similar that is responsible of calculating and persisting total amount.

The application must be demoable without an actual backend (use some approriate
client-side API server for demoing)

## Tools & Languages

* React
* styled-components
* Axios
* json-server

## Available Scripts

In the project directory, you can run:

### `yarn server`

Loads db.json database with json-server.
Open [http://localhost:3005/data](http://localhost:3005/data) to view database in the browser.

Then database loads in http://localhost:3000 and can be viewed in the app.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
