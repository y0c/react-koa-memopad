import Router from 'koa-router';
import * as postCtrl from './post.ctrl';
const router = new Router();

router.get('/',  postCtrl.getPosts);
router.post('/',  postCtrl.addPost);
router.get('/:id', postCtrl.findPost);

export default router;