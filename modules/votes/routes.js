import { Router } from 'express';
import { create, getOne } from './controller.js'

const router = new Router();

router.post('/', create);
router.get('/:id', getOne);

export default router;
