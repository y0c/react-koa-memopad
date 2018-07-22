import Router from 'koa-router';
import user from 'api/user';
import auth from 'api/auth';
import post from 'api/post';
import authCheck from 'lib/middleware/authCheck';

const router = new Router();

router.use('/auth', auth.routes());
router.use('/user', authCheck(), user.routes());
router.use('/post', post.routes());

export default router;
