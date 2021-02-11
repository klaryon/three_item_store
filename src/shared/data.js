import greentea from "../assets/images/greentea.jpg"
import strawberries from "../assets/images/strawberries.jpg"
import coffee from "../assets/images/coffee.jpg"

const data = [
    {
        id: "GR1",
        name: "Green Tea",
        image: greentea,
        price: 3.11,
        discount: 3.11,
        description: "Buy one get one free!"
    },
    {
        id: "SR1",
        name: "Strawberries",
        image: strawberries,
        price: 5.00,
        discount: 0.50,
        description: "Buy 3 at original price, then get €0.50 discount per unit"
    },
    {
        id: "CF1",
        name: "Coffee",
        image: coffee,
        price: 11.23,
        discount: 3.74,
        description: "Buy 3, and all your items get €3.74 discount per unit"
    },
];

export default data;