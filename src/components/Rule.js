// Rule.js
import React from 'react';

// Component for displaying an individual rule
const Rule = ({ number, text, backgroundColor }) => {
    // Apply the backgroundColor prop to the paragraph style
    return (
      <div style={{ backgroundColor: backgroundColor, padding: '10px', borderRadius: '10px', marginBottom: '5px' }}>
        <p><b>Rule {number}:</b> {text}</p>
      </div>
    );
  };
  
export default Rule;