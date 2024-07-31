import { Request, Response } from "express"
import { CreateTransactionService } from "../services/CreateTransactionService"
import { v4 as uuid } from "uuid"

class CreateTransactionController {
    async handle(request: Request, response: Response) {

        const createTransactionServeice = new CreateTransactionService();
        const id = request.body.id;
        const valorString = request.body.valor;
        const data = request.body.data;
        const hora = request.body.hora;
        const local = request.body.local;
        const cartao = request.body.cartao
        const categoria = request.body.categoria
        const subcategoria = request.body.subcategoria
        const recorrente = request.body.recorrente
        console.log(request.body);

        if (valorString?.length === 0) {
            return response.status(400).json({ mensagem: "Valor Obrigatorio" })
        }
        const valor = parseFloat(valorString.replace("R$ ", "").replace(",", "."));

        const user = await createTransactionServeice.execute({ id, valor, data, hora, local, cartao, categoria, subcategoria })
        return response.status(201).json({ user })

    }
}

export { CreateTransactionController }