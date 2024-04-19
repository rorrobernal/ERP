import zod from 'zod'

const parametersSchema = zod.object({
    tipo: zod.string(),
    descripcion: zod.string(),
    estado: zod.number().int().positive()
})

export function validateParameter(input){
    return parametersSchema.safeParse(input);
}

export function validatePartialParameter(input){
    return parametersSchema.partial().safeParse(input);
}