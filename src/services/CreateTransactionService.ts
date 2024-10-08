import { getRepository, MssqlParameter } from "typeorm"
import { Transaction } from "../entities/Transaction";
interface ITransaction {
     id: string,
     valor: number;
     valorParcela: number;
     quantidadeParcelas: number;
     data: string;
     hora: string;
     local: string;
     cartao: string;
     categoria: string;
     subcategoria: string;
}
class CreateTransactionService {
     async execute({ valor, valorParcela, quantidadeParcelas, data, hora, local, cartao, categoria, subcategoria }: ITransaction) {

          const transaction = await getRepository(Transaction)
               .createQueryBuilder("transaction")
               .createQueryBuilder()
               .insert()
               .into(Transaction)
               .values([
                    {
                         valor: valor,
                         parcela: valorParcela,
                         quantidadeParcelas: quantidadeParcelas,
                         data: data,
                         hora: hora,
                         local: local,
                         cartao: cartao,
                         categoria: categoria,
                         subcategoria: subcategoria
                    }
               ])
               .execute();
          //console.log(Transaction);

          return transaction.identifiers[0]
     }
}

export { CreateTransactionService }

