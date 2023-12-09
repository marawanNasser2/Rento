const productsService = require('../services/products');



module.exports.getProducts = async (req, res) => {
  try {
    const products = await productsService.findAllProducts();
    res.send({ products });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};



module.exports.addProducts = async (req, res) => {
  const info = {
   //productID : req.body.productID,
   productID: 1,
   productName: "Michelin Tire",
   description: "185/60 R14 H (81)",
   category: "Tires",
   price: 4999,
   //stockQuantity: ,
   //createdAt: ,
   productImages: "https://m.media-amazon.com/images/I/51ztIUxbPGL._AC_UL480_FMwebp_QL65_.jpg",
 };

 try{
   const createdProduct = await productsService.addNewProduct(info);
   return res.status(201).send ({
       msg:'Product created successfully',
       productID: createdProduct.productID
   });
} catch(err) {
  return res.status(500).send({
   error: err.message
  });
}
};

