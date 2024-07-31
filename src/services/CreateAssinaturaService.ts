import { getRepository, MssqlParameter } from "typeorm"
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
class CreateAssinaturaService {
     async execute({ nome, valor, ativo, data, cartao, categoria, subcategoria, conta }: IAssinatura) {

          const assinatura = await getRepository(Assinatura)
               .createQueryBuilder("assinatura")
               .createQueryBuilder()
               .insert()
               .into(Assinatura)
               .values([
                    {
                         nome: nome,
                         valor: valor,
                         ativo: ativo,
                         data: data,
                         cartao: cartao,
                         categoria: categoria,
                         subcategoria: subcategoria,
                         conta: conta
                    }
               ])
               .execute();
          //console.log(Assinatura);

          return assinatura.identifiers[0]
     }
}

export { CreateAssinaturaService }

