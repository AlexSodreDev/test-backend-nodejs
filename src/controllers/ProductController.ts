/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'
import { Product } from '../models/Product'

class ProductController {
  async findById(req: Request, res: Response) {
    const productRepository = getMongoRepository(Product)

    const productId = req.params.id

    const productFindId = await productRepository.findOne(productId)

    if (!productFindId) {
      return res.sendStatus(404)
    }

    return res.status(200).json(productFindId)
  }
}
export const productController = new ProductController()