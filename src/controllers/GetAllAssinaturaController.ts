import { Request, Response } from 'express';
import { GetAllAssinaturaService } from '../services/GetAllAssinaturaService';

class GetAllAssinaturaController {
    async handle(request: Request, response: Response) {
        const getAllAssinaturaService = new GetAllAssinaturaService();

        const users = await getAllAssinaturaService.execute();

        return response.status(200).json(users)

    }
}
export { GetAllAssinaturaController }