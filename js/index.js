import { Card } from "../components/Card.js";
import { products } from "../data/products.js";

let renderProduct = document.querySelector("#renderProduct");

products.map((product) => (renderProduct.innerHTML += Card(product)));
