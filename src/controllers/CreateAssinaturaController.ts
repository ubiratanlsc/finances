import { Request, Response } from "express"
import { CreateAssinaturaService } from "../services/CreateAssinaturaService"
import { v4 as uuid } from "uuid"

class CreateAssinaturaController {
    async handle(request: Request, response: Response) {
        console.log(request.body);
        const createAssinaturaServeice = new CreateAssinaturaService();
        const { id, nome, valor, ativo, data, cartao, categoria, subcategoria, conta } = request.body;


        // const valor = parseFloat(valorString.replace("R$ ", "").replace(",", "."));

        const user = await createAssinaturaServeice.execute({ id, nome, valor, ativo, data, cartao, categoria, subcategoria, conta })
        return response.status(201).json({ user })

    }
}

export { CreateAssinaturaController }