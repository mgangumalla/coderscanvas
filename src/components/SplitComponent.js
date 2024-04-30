import React, { useEffect, useRef } from 'react';
import Split from 'split.js';

function SplitPane({ children }) {
    const splitContainerRef = useRef(null);

    useEffect(() => {
        const splitInstance = Split(splitContainerRef.current.children, {
            sizes: [50, 50], // Initial size of each pane in percentage
            minSize: 100,    // Minimum size in pixels
            gutterSize: 8,   // Gutter size in pixels
            cursor: 'col-resize' // Cursor to display
        });

        return () => splitInstance.destroy();
    }, []);

    return <div ref={splitContainerRef} style={{ height: '100vh', display: 'flex' }}>
        {React.Children.map(children, child => {
            return <div style={{ flex: 1 }}>{child}</div>;
        })}
    </div>;
}

export default SplitPane;
