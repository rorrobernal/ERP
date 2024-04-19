import { ParametersModel } from '../models/mysql/parameters.js'
import { validateParameter, validatePartialParameter } from '../schemas/parameters.js'

export class ParametersController {
    static async getAll (req, res) {
        const { tipo } = req.query
        const paramenters = await ParametersModel.getAll({tipo})
        res.json(paramenters)
    }

    static async getById (req, res) {
        const { id } = req.params
        const parameter = await ParametersModel.getById({id})
        if(parameter) return res.json(parameter)
        res.status(404).json({"message": "PArametro no encontrado"})
    }
}