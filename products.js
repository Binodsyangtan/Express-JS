const fetchProducts = () =>{
    console.log("list of products")
}
const createProducts = () =>{
    console.log("list of products")
}

/* default export */
// default mah 1 ota matra export garna sakinxa 
module.exports = fetchProducts
module.exports = createProducts

// 2 or more export garnu parema we can use object type

module.exports = {
    "fetchProducts":fetchProducts,
    "createProducts":createProducts
}

