const express = require("express")
const router = express.Router()
const { getProducts, getProductsById, updateProducts, deleteProducts, createProducts } = require("../controller/product.controller")

router.get('/', getProducts)

router.get('/:id', getProductsById)

router.post('/', createProducts)

router.put('/:id', updateProducts)

router.delete('/:id', deleteProducts)

module.exports = router