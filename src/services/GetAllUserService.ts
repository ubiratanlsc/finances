import { getRepository } from 'typeorm'
import { Usuario } from '../entities/Usuario'
import { Assinatura } from '../entities/Assinatura';
import { Transaction } from '../entities/Transaction';




class GetAllUserService {
    async execute() {
        const usuarios = await getRepository(Usuario)
            .createQueryBuilder('usuarios')
            .select()
            .getMany()
        const assinaturas = await getRepository(Assinatura)
            .createQueryBuilder('assinaturas')
            .select()
            .getMany()
        const transacao = await getRepository(Transaction)
            .createQueryBuilder('transaction')
            .select()
            .getMany()

        return [...usuarios, ...assinaturas, ...transacao];

    }
}
export { GetAllUserService }