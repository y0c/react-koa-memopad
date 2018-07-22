import Router from 'koa-router';
import * as postCtrl from './post.ctrl';
import authCheck from 'lib/middleware/authCheck';
const router = new Router();

router.get('/', authCheck(), postCtrl.getPosts);
router.post('/', authCheck(), postCtrl.addPost);

export default router;