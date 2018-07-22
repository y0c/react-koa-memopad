import React, { Component } from 'react';
import 'highlight.js/styles/github.css';
import 'tui-editor/dist/tui-editor-contents.css';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';

class MarkdownViewer extends Component {

    constructor() {
        super();
        this.viewerRef = React.createRef();
    }

    componentDidMount() {
        const {
            height,
            initialValue
        } = this.props

        this.viewer = new Viewer({
            el: this.viewerRef.current,
            height,
            initialValue 
        });
    }

    componentWillUpdate(nextProps) {
        const { value } = nextProps;
        this.viewer.setValue(value);
    }

    render() {
        return (
            <div ref={this.viewerRef}>
            </div>
        )
    }
}

export default MarkdownViewer;