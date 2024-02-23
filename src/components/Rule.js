// Rule.js
import React from 'react';

// Component for displaying an individual rule
const Rule = ({ number, text }) => {
  return (
    <p><b>Rule {number}:</b> {text}</p>
  );
};

export default Rule;