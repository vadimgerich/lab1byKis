import { Router } from 'express';
import bugaltControler from './controler.js'

const bugaltRouter = new Router();

//роути 
bugaltRouter.get("/init", bugaltControler.init);
bugaltRouter.get('/:countOfChilds', bugaltControler.getByCountOfChildsAndPosada);
bugaltRouter.get('/:id', bugaltControler.get_id);
bugaltRouter.post('/', bugaltControler.post);
bugaltRouter.delete('/:id', bugaltControler.delete_id);
bugaltRouter.patch('/:id', bugaltControler.patch);

export default bugaltRouter;