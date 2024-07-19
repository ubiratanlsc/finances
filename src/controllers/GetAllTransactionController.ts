import { Request, Response } from 'express';
import { GetAllTransactionService } from '../services/GetAllTransactionService';

class GetAllTransactionController {
    async handle(request: Request, response: Response) {
        const getAllTransactionService = new GetAllTransactionService();

        const users = await getAllTransactionService.execute();

        return response.status(200).json(users)

    }
}
export { GetAllTransactionController }