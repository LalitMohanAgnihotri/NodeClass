import products from "../modules/productModules";

export const getProducts = (req, res) => {
  console.log("getProducts called");
  res.send(products);
};

export const getProductById = (req, res) => {
  const productId = req.params.id;
  products.map((product) => {
    if (product.id == productId) {
      res.send(product);
    } 
  });
}

export const getProductByName = (req, res) => {
  const productName = req.params.name || req.query.name;
  products.map((product) => {
    if (product.name == productName) {
      res.send(product);
    } 
  });
}


