import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    SearchContainer,
    PostList
} from 'components/MainPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { FABButton } from 'components/base/ui';
import styled from 'styled-components';
import * as post from 'store/modules/post';

const Wrapper = styled.div`
    position: relative;
`

class MainPage extends Component {


    componentDidMount() {
        const { PostActions } = this.props;
        console.log('test');
        PostActions.getPosts();
    }

    render() {
        const { list } = this.props;
        return ( 
            <Wrapper>
                <SearchContainer/>
                <PostList
                    posts={list}
                />
                <FABButton 
                    as={Link}
                    to='/post/form'
                    icon='plus' 
                    color='red' 
                    size='large'
                    bottom='80'
                    right='50'
                />
            </Wrapper>
        )
    }
}


export default withRouter(connect(
    state => ({
        list : state.post.postList
    }),
    dispatch => ({
        PostActions: bindActionCreators(post, dispatch)
    })
)(MainPage));