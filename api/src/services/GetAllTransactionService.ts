import { getRepository } from 'typeorm'
import { Transaction } from '../entities/Transaction'




class GetAllTransactionService {
    async execute() {
        const transaction = await getRepository(Transaction)
            .createQueryBuilder('transaction')
            .select()
            .getMany()

        console.log(transaction);
        return transaction;

    }
}
export { GetAllTransactionService }