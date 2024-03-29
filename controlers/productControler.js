import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const Cg = req.query.Cg
    const filter = req.query.filter
    const from = req.query.from
    const to = req.query.to
    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}
    
    console.log(req.query.keyword)

    if(Cg){
        const products =  await Product.find({category : Cg});
        res.json(products)

    }
    else if(filter){
        switch (filter) {
            case 'Rating':
                const productsbyrating =  await Product.find({}).sort('-rating').exec();
                res.json(productsbyrating)

                break;
            case 'date':
                const productsbydate =  await Product.find({}).sort('createdAt').exec();
                res.json(productsbydate)
                    break;
            case 'highprice':
                const productsbyhighprice =  await Product.find({}).sort('price');
                res.json(productsbyhighprice)

                    break;
            case 'lowprice':
                const productsbylowprice =  await Product.find({}).sort('-price').exec();
                res.json(productsbylowprice)
                    break;
        
            default:
                break;
        }
    }else if(from && to){
        const productbyprice =  await Product.find({price:{$lte:to},price:{$gte:from}});
        res.json(productbyprice)

    }else{
        const products =  await Product.find({...keyword});
        res.json(products)

    }
})




// @desc Fetch single  product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product =  await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else{
        // status it's 500 by default cuz of errHandler
        res.status(404)
        throw new Error('Product not found')
    }
})


// @desc Delete a product
// @route GET /api/products/:id
// @access Private/Admin 
const deleteProduct = asyncHandler(async (req, res) => {
    const product =  await Product.findById(req.params.id)
    if(product){
        await product.deleteOne()
        res.json({message : 'Product Removed'})
    } else{
        // status it's 500 by default cuz of errHandler
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc Create a product
// @route Post /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {

    const product = new Product({
        name : 'Sample name',
        price : 0,
        description : 'sample description',
        user : req.user._id,
        sizes : [],
        images : ['https://images.unsplash.com/photo-1491960693564-421771d727d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1063&q=80','https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668&q=80','https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80'],
        category : [],
        countInStock :  0,
        numReviews : 0

    })
    const createProduct = await product.save();
    res.status(201).json(createProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {name,price,description,category,sizes,Images,countInStock} = req.body
    console.log(name,price,Images)
    const product = await Product.findById(req.params.id)
    if(product){
        product.name = name
        product.price = price
        product.description = description
        product.category = category
        product.sizes = sizes
        product.images = Images
        product.countInStock = countInStock 
    const updatedProduct = await product.save();
    console.log(updatedProduct)
    res.json(updateProduct)

    }else{
        res.status(404)
        throw new Error('Product Not found')
    }
})


// @desc Create new Review
// @route PUT /api/products/:id/reviews
// @access Private
const createproductreview = asyncHandler(async (req, res) => {
    const {rating,comment} = req.body
    const product = await Product.findById(req.params.id)
    if(product){
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString()) 
        if(alreadyReviewed){
            res.status(404)
            throw new Error('User Already Review')

        }
        const review = {
            name : req.user.name,
            rating : Number(rating),
            comment,
            user : req.user._id
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating =product.reviews.reduce((acc,item)=> item.rating+acc,0)/product.reviews.length
        await product.save()
        res.status(201).json({message : 'Review added'})
    }else{
        res.status(404)
        throw new Error('Product Not found')
    }
})


export {
    getProducts, getProductById,deleteProduct,createProduct,updateProduct,createproductreview
}