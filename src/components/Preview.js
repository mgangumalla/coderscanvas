import React from 'react';

function Preview({ htmlCode, cssCode, jsCode }) {
    const srcDoc = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `;

    return (
        <div style={{ flex: 1, height: '91%',  }}>
            <iframe
                style={{ border: '1px solid #ccc', height: '90%', width: '93%', margin: '18px',overflow: 'auto', padding: '5px' }}
                srcDoc={srcDoc}
                title="preview"
                sandbox="allow-scripts"
                frameBorder="0"
            />
        </div>
    );
}

export default Preview;


// import React, { useEffect, useRef } from 'react';
//
// function Preview({ htmlCode, cssCode, jsCode }) {
//     // Reference for the iframe to inject code into
//     const iframeRef = useRef(null);
//
//     useEffect(() => {
//         // Set up the iframe document content
//         const iframeDoc = iframeRef.current.contentDocument;
//         const iframeWindow = iframeRef.current.contentWindow;
//
//         // Reset the iframe content
//         iframeDoc.open();
//         iframeDoc.close();
//
//         // Construct the full page with the HTML, CSS, and JS
//         iframeDoc.write(htmlCode);
//         const styleTag = iframeDoc.createElement('style');
//         styleTag.textContent = cssCode;
//         iframeDoc.head.appendChild(styleTag);
//
//         // We have to use setTimeout to inject the script into the iframe
//         // to correctly handle the execution after the iframe content is fully loaded
//         if (jsCode) {
//             setTimeout(() => {
//                 const scriptTag = iframeDoc.createElement('script');
//                 scriptTag.textContent = jsCode;
//                 iframeDoc.body.appendChild(scriptTag);
//             }, 50);
//         }
//     }, [htmlCode, cssCode, jsCode]); // Re-run this effect when code changes
//
//     return (
//         <div style={{ height: '100%', width: '100%' }}>
//             <iframe
//                 ref={iframeRef}
//                 style={{ height: '100%', width: '100%', border: 'none' }}
//                 sandbox="allow-scripts" // Enable scripts but keep other sandbox properties for security
//                 title="preview"
//             />
//         </div>
//     );
// }
//
// export default Preview;
