import Post from 'db/models/Post';
import Joi from 'joi';

export const getPosts = async ctx => {
    const {

    } = ctx.request.body;
    const { _id } = ctx.request.user;

    try { 
        let posts = await Post.selectPostByWriter({ writer : _id });
        
        ctx.body = {
            list : posts
        }; 
        ctx.status = 200;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

export const addPost = async ctx => {
    const {
        title,
        content,
        tags
    } = ctx.request.body;
    
    try { 
        const schema = Joi.object().keys({
            title : Joi.string().max(100).required(),
            content : Joi.string().max(5000).required(),
            tags : Joi.array()
        });

        let validateResult = schema.validate(ctx.request.body);

        if( validateResult.error != null ) {
            ctx.status = 422;
            ctx.body = { 
                type : "ValidateError",
                message : validateResult.error.details[0].message 
            };
            return;
        }

        const post = await Post.savePost({
            title,
            content,
            tags,
            writer: ctx.request.user._id
        });

        ctx.status = 200;
        ctx.body = { data : post };

    } catch(e) {
        ctx.throw(e, 500);
    }
}

export const removePost = async ctx => {

}

export const findPost = async ctx => {

}