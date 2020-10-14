import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';

import multer from 'multer';
import uploadConfig from '../config/upload'


const router: Router = Router();

const upload = multer(uploadConfig)


router.get('/', OrphanagesController.getAll)

router.get('/:id', OrphanagesController.getById)


router.post('/',upload.array('images'), OrphanagesController.create)

export default router;