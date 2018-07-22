import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as post from 'store/modules/post'
import { PageHeader, MarkdownViewer } from 'components/base/ui';

class PostViewPage extends Component {
    
    async componentDidMount() {
        const { PostActions, match } = this.props;
        try {
            await PostActions.findPost(match.params.id);
        } catch(e) {

        }
    }
   
    render() {
        console.log(this.props.post);
        return (
            <div>
                <PageHeader
                    title={this.props.post.title}
                />
                <MarkdownViewer
                    value={this.props.post.content}
                />
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        post : state.post.view        
    }),
    dispatch => ({
        PostActions : bindActionCreators(post, dispatch)
    })
)(PostViewPage));