import { Router } from 'express';
import { createUserController, getUserByIdController, getAllUsersController, updateUserController, deleteUserController } from '../controllers/userController';

const router = Router();

router.post('/users', createUserController);
router.get('/users/:id', getUserByIdController);
router.get('/users', getAllUsersController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);

export default router;