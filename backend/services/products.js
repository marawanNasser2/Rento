const productModel = require('../models/Product');



module.exports.findAllProducts = async() => {
    try {
        const products = await productModel.find();
        return product;
    } catch (err) {
    
        throw new Error('Could not retrieve products');
    }
    };



    module.exports.addNewProduct = async (info) => {

        try{
            const car = new productModel({
                productID: info.productID,
                productName: info.productName,
                description: info.description,
                category: info.category,
                price: info.price,
                stockQuantity: info.stockQuantity,
                createdAt: info.createdAt,
                productImages: info.productImages,
            });
    
            const createdProduct = await product.save();
            return createdProduct;
        } catch (err){
            throw new Error ('Could not add product');
        }
    };


