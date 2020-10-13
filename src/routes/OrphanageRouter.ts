import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';


const router: Router = Router();


router.get('/', OrphanagesController.getAll)

router.get('/:id', OrphanagesController.getById)


router.post('/', OrphanagesController.create)

export default router;