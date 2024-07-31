import { getRepository } from 'typeorm'
import { Assinatura } from "../entities/Assinatura";

interface IAssinatura {
    id: number,
    nome: string,
    valor: number;
    ativo: boolean;
    data: string;
    cartao: string;
    categoria: string;
    subcategoria: string;
    conta: string;
}
class UpdateAssinaturaService {
    async execute({ id, nome, valor, ativo, data, cartao, categoria, subcategoria, conta }: IAssinatura) {
        const assinatura = await getRepository(Assinatura)
            .createQueryBuilder()
            .update()
            .set({
                nome: nome,
                valor: valor,
                ativo: ativo,
                data: data,
                cartao: cartao,
                categoria: categoria,
                subcategoria: subcategoria,
                conta: conta
            })
            .where('id = :id', { id })
            .execute()
        console.log(assinatura);
        return assinatura.raw
    }

}

export { UpdateAssinaturaService }