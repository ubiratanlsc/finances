import { getRepository } from 'typeorm'
import { Transaction } from "../entities/Transaction";


interface ITransaction {
    id: string;
    valor: number;
    data: string;
    hora: string;
    local: string;
    cartao: string;
    categoria: string;
    subcategoria: string;
}
class UpdateUserService {
    async execute({ id, valor, data, hora, local, cartao, categoria, subcategoria }: ITransaction) {
        const transaction = await getRepository(Transaction)
            .createQueryBuilder()
            .update()
            .set({
                valor: valor,
                data: data,
                hora: hora,
                local: local,
                cartao: cartao,
                categoria: categoria,
                subcategoria: subcategoria,
            })
            .where('id = :id', { id })
            .execute()
        console.log(transaction);
        return transaction.raw
    }

}

export { UpdateUserService }