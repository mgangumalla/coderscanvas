import '../styles/Editor.css'
import React, { useEffect, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';

function Editor({ language, value, onChange }) {
    const editorRef = useRef(null);
    const initialRender = useRef(true);

    // Configure the extensions based on the language prop
    const extensions = [
        language === 'html' ? html() :
            language === 'css' ? css() :
                javascript()
    ];

    // Setup CodeMirror instance
    const { setContainer, view } = useCodeMirror({
        container: editorRef.current,
        extensions: extensions,
        value: value,
        lineWrapping: true,  // Enable line wrapping
        onUpdate: (update) => {
            if (update.docChanged) {
                onChange(update.state.doc.toString());
            }
        }
    });

    // Effect to handle updates to the CodeMirror instance when dependencies change
    useEffect(() => {
        if (!initialRender.current && view) {
            view.dispatch({
                changes: { from: 0, to: view.state.doc.length, insert: value }
            });
        }
        initialRender.current = false;
    }, [value, view]);

    // Effect to clean up the CodeMirror instance
    useEffect(() => {
        return () => {
            if (view) {
                view.destroy();
            }
        };
    }, [view]);

    // Attach the editor container on mount
    useEffect(() => {
        setContainer(editorRef.current);
    }, [setContainer]);

    return <div ref={editorRef} className="Editor" style={{ height: '200px' }} />;
}

export default Editor;
