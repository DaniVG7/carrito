import "./filters.mjs"
import { displayProducts } from "./product_list_ui.mjs"
import { all, filterByBrands } from "./catalogo.mjs";

displayProducts(all());

document.querySelector("#brand-filters").addEventListener("change", onfilter);


function onfilter(event) {
  console.log(event.target.form);
  let formData = new FormData(event.target.form);
  let brands = formData.getAll("brand"); // coge todas las marcas que están señaladas
  console.log(brands);  //mostramos la variable brands para ver que funciona y nos coge las marcas checkeadas
  let productsToDisplay = filterByBrands(brands);
  displayProducts(productsToDisplay);
}
