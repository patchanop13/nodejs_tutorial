const router = require('express').Router()
const ProductController = require('../controllers/product.controller')

router.get('/',ProductController.getProducts)
router.get('/price',ProductController.getProductByPrice)
router.get('/:id',ProductController.getProduct)
router.post('/',ProductController.addProduct)
router.put('/:id',ProductController.updateProduct)
router.delete('/:id',ProductController.deleteProduct)

module.exports = router