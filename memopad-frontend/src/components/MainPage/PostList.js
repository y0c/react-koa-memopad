import React from 'react';
import { List, Image, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(({
    to,
    children, 
    className,
    ...rest
}) => (
    <Link to={to} className={className}>
        <Header as='h2'>{children}</Header>
    </Link>
))`
    h2 {
        color : #2085d0 !important;
    }
`;

const PostList = ({
    posts
}) => (
    <List>
        {
            posts.map( post => (
                <List.Item key={post._id}>
                    <List.Header as={HeaderLink} to={`/post/${post._id}`}>
                        {post.title}
                    </List.Header>
                    <List.Description>
                        {post.plainContent}
                    </List.Description>
                </List.Item>
            ))
        }
    </List>
);
export default PostList;