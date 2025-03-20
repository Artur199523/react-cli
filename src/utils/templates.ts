export const createComponentTemplate = (componentName: string) => `
import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

export const createCSSTemplate = (componentName: string) => `
.${componentName} {
  /* Add styles for ${componentName} here */
}
`;