import data from "./data.mjs"


const catalog = data

function all() {
  return [...catalog];
}

function filterByBrands(brands) {
  if (brands.length === 0) {
    return all()
  }
  return catalog.filter(function (product) {
    console.log(product, brands, brands.includes(product.brand))
    return brands.includes(product.brand)
  })
}

function brands() {
  let allBrands = catalog.map((item) => item.brand);
  let uniqueBrands = [...new Set(allBrands)];
  uniqueBrands.sort();
  return uniqueBrands;
}

export { all, brands };
export { filterByBrands }
