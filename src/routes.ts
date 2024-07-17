import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

import { CreateTransactionController } from "./controllers/CreateTransactionController";
// import { DeleteTransactionController } from "./controllers/DeleteTransactionController";
import { GetAllTransactionController } from "./controllers/GetAllTransactionController";
// import { UpdateTransactionController } from "./controllers/UpdateTransactionController";


const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createTransactionController = new CreateTransactionController();
const getAllTransactionController = new GetAllTransactionController();
// const updateTransactionController = new UpdateTransactionController();
// const deleteTransactionController = new DeleteTransactionController();


router.get('/', (request: Request, response: Response) => {

    return response.json({ Menssage: 'Deu bom safado' })
})

router.post('/usuarios', createUserController.handle)
router.get('/usuarios', getAllUserController.handle)
router.patch('/usuario', updateUserController.handle)
router.delete('/usuario/:id', deleteUserController.handle)

router.post('/transacao', createTransactionController.handle)
router.get('/transacao', getAllTransactionController.handle)
// router.patch('/transacao', updateTransactionController.handle)
// router.delete('/transacao/:id', deleteTransactionController.handle)
export { router }