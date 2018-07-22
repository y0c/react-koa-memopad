import React, { Component } from 'react';
import Editor from 'tui-editor';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

class MarkdownEditor extends Component {

    constructor(){
        super();
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const {
            height,
            previewStyle,
            initialEditType,
            initialValue,
            onChange,
            onLoad
        } = this.props;
        this.editor = new Editor({
            el: this.editorRef.current,
            initialEditType,
            previewStyle,
            initialValue,
            height
        });

        if(onChange) {
            this.editor.on('change', () => {
                onChange(this.editor.getMarkdown(), this.editor.getHtml());
            });
        }
        if(onLoad) this.editor.on('load', onLoad);
    }
    
    componentWillUnmount() {
        this.editor.off('load');
        this.editor.off('change');
    }

    render() {
        return (
            <div ref={this.editorRef}>
            </div>
        )
    }

} 

export default MarkdownEditor;