import { Router } from 'express'

import { ParametersController } from '../controllers/parameters.js'

export const paramentersRoutes = Router()

paramentersRoutes.get('/', ParametersController.getAll)
paramentersRoutes.get('/:id', ParametersController.getById)
