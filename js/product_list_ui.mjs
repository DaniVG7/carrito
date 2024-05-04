// Product list User Interface

import { all } from "./catalogo.mjs";

const template = document.querySelector("#product-item-template")
const target = document.querySelector("#product-list")
const hbTemplate = Handlebars.compile(
  template.content.firstElementChild.outerHTML
)

function displayProducts(products) {
  target.innerHTML = ""
  for (let product of products) {
    let output = hbTemplate({ product: product })
    target.insertAdjacentHTML("beforeend", output)
  }
}


export { displayProducts }
