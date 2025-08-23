import { Router } from 'express';
import { create, getVotes } from './controller.js'

const router = new Router();

router.post('/', create);
router.get('/:id', getVotes);

export default router;
