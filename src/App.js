import React, { useState } from 'react';
import './App.css'; // Make sure to include your CSS file for styling
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';

function App() {
    const [htmlCode, setHtmlCode] = useState('<!-- HTML code goes here -->');
    const [cssCode, setCssCode] = useState('/* CSS code goes here */');
    const [jsCode, setJsCode] = useState('/* JS code goes here */');

    // Handle template selection
    const handleTemplateSelection = (template) => {
        setHtmlCode(template.html);
        setCssCode(template.css);
        setJsCode(template.js);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>CodersCanvas</h1>
            </header>
            <div className="SplitPane">
                <div className="EditorPane">
                    <Editor language="html" value={htmlCode} onChange={setHtmlCode} />
                    <Editor language="css" value={cssCode} onChange={setCssCode} />
                    <Editor language="js" value={jsCode} onChange={setJsCode} />
                </div>
                <div className="PreviewPane">

                    <TemplateSelector onTemplateSelect={handleTemplateSelection} />
                    <Preview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
                </div>
            </div>
        </div>
    );
}

export default App;
