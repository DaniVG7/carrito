
import data from "./data.mjs"

class Product {
  constructor(data) {
    this.brand = data.brand;
    this.model = data.model;
    this.variant = data.variant;
    this.price = data.price;
    this.id = data.id;
  }
  get pictureURL() {
    return `./img/${this.id}.jpeg`
  }
}

const catalog = data.map(function (item) {
  return new Product(item)
});

function all() {
  return [...catalog];
}

function filterByBrands(brands) {  //cogemos todo el catalogo y lo filtramos
  if (brands.length === 0) {
    return all();   // si no hay nada señalado devuelve todo
  } else {   // de lo contrario nos devolvera los productos que tengan brands de la funcion onfilter de la main.mjs
    return catalog.filter(product => brands.includes(product.brand))
    // console.log(product, brands, brands.includes(product.brand))
  }
}

function brands() {
  let allBrands = catalog.map((item) => item.brand);
  let uniqueBrands = [...new Set(allBrands)];
  uniqueBrands.sort();
  return uniqueBrands;
}

export { all, brands, filterByBrands };

