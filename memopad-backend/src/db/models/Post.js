import mongoose from 'mongoose';
import removeMarkdown from 'remove-markdown';

const { Schema } = mongoose;

const Post = new Schema({
    title : String,
    content: String,
    tags : Array,
    thumbnail : String,
    writer : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
},{
    toJSON : { virtuals : true},
    toObject : { virtuals : true}
});


Post.virtual('plainContent').get(function(){
    return removeMarkdown(this.content).substring(0,500);
})


Post.statics.selectPostByWriter = function({
    writer
}) {
    return this.find({writer})
                .populate('writer')
                .exec();
}


Post.statics.savePost = function({
    title,
    content,
    tags,
    writer
}){
    let post = new this({
        title,
        content,
        tags,
        writer
    });
    
    return post.save();
}


export default mongoose.model('Post',Post);