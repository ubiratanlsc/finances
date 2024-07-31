import { getRepository } from 'typeorm'
import { Assinatura } from '../entities/Assinatura'




class GetAllAssinaturaService {
    async execute() {
        const assinatura = await getRepository(Assinatura)
            .createQueryBuilder('assinatura')
            .select()
            .getMany()

        console.log(assinatura);
        return assinatura;

    }
}
export { GetAllAssinaturaService }