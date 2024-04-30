import React from 'react';
import '../styles/TemplateSelector.css';

const templates = {
    default: {
        html: '<!-- HTML code goes here -->',
        css: '/* CSS code goes here */',
        js: '/* JavaScript code goes here */'
    },
    resume: {
        html: '<h2>John Doe</h2><p>Web Developer</p>',
        css: 'h2 { color: green; } p { font-style: italic; }',
        js: '// JavaScript for resume'
    },
    // More templates can be added here...
};

function TemplateSelector({ onTemplateSelect }) {
    const handleChange = (event) => {
        const selectedTemplate = templates[event.target.value];
        if (selectedTemplate) {
            onTemplateSelect(selectedTemplate);
        }
    };

    return (
        <div style={{ margin: '0 18px', padding: '5px' }}>

            <label htmlFor="template-select">Choose a template:</label>
            <select id="template-select" onChange={handleChange}>
                <option value="default">Default</option>
                <option value="resume">Resume</option>
                {/* Options for more templates */}
            </select>
        </div>
    );
}

export default TemplateSelector;
