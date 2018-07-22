import React, { Component } from 'react';
import { Form, Header, Icon, Button, Label, Message } from 'semantic-ui-react';
import { MarkdownEditor, PageHeader } from 'components/base/ui';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as post from 'store/modules/post';
import TagsInput from 'react-tagsinput';
import styled from 'styled-components';

const TagsWrapper = styled.div`
    margin-bottom:10px;
`;

class PostFormPage extends Component {

    componentDidMount(){
        const { PostActions } = this.props;
        PostActions.init();
    }

    handleEditorChange = (markdown, html) => {
        const { PostActions, form } = this.props;

        PostActions.formChange({
            ...form,
            content : markdown
        });
    }

    handleInputChange = e => {
        const { PostActions, form } = this.props;
        const { name, value } = e.target;
        PostActions.formChange({
            ...form,
            [name] : value
        });
    }

    handleTagsChange = tags => {
        const { PostActions, form } = this.props;
        PostActions.formChange({
            ...form,
            tags
        });
    }

    defaultRenderTag = props => {
        let {tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other} = props
        return (
            <Label key={key} {...other}>
            {getTagDisplayValue(tag)}
            {!disabled &&
                <Icon name='close' className={classNameRemove} onClick={(e) => onRemove(key)} />
            }
            </Label>
        )
    }
    

    defaultRenderLayout = (tagComponents, inputComponent) => {
        return (
            <div>
                <TagsWrapper>
                    {tagComponents}
                </TagsWrapper>
                {inputComponent}
            </div>
        )
    }

    handleSubmit = async () => {
        const { PostActions, form, history } = this.props;
        try { 
            await PostActions.addPost(form);
            alert('포스트가 등록되었습니다.');
            history.push('/');
        } catch(e) {
            PostActions.formChange({
                title : '',
                content : '',
                tags : []
            });
        }
    }

    render() {
        const {
            form: {
                title,
                content,
                tags
            },
            error
        } = this.props;

        return (
            <div>
                <PageHeader
                    title='포스트 작성'
                    icon='file'
                />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>제목</label>
                        <input 
                            name='title'
                            placeholder='제목을 입력해주세요'
                            onChange={this.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <MarkdownEditor
                            previewStyle='vertical'
                            height='400px'
                            initialEditType='markdown' 
                            onChange={this.handleEditorChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>태그</label>
                        <TagsInput 
                            value={tags}
                            onChange={this.handleTagsChange}
                            renderTag={this.defaultRenderTag}
                            renderLayout={this.defaultRenderLayout}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Message 
                            error
                            header={error}
                            visible={error != ''} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button 
                            type='submit'
                            floated='right' 
                            color='teal'
                        >
                        등록하기
                        </Button>
                    </Form.Field> 
                </Form>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        form : state.post.form,
        error : state.post.error
    }),
    dispatch => ({
        PostActions : bindActionCreators(post, dispatch)
    }) 
)(PostFormPage));