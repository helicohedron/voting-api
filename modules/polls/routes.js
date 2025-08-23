import { Router } from 'express';
import { create, getAll, getOnePoll } from './controller.js';

const router = new Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOnePoll);

export default router;
