import path from 'path'
import chalk from 'chalk';

import {writeComponentFiles} from '../utils/fileManager.js';
import {createComponentTemplate, createCSSTemplate} from '../utils/templates.js';

// Define the "generate" command logic
export const generateComponent = (componentName: string, options: any) => {
    const componentDir = path.join('./src/components', componentName);

    console.log(chalk.blue(`Creating React component: "${componentName}"...`));

    try {
        // Create component and CSS templates
        const componentCode = createComponentTemplate(componentName);
        const cssCode = options.withCss ? createCSSTemplate(componentName) : null;

        // Write files to the target directory
        writeComponentFiles(componentDir, componentName, componentCode, cssCode);

        console.log(chalk.green(`✓ Component "${componentName}" created successfully.`));
    } catch (error: any) {
        console.error(chalk.red(`✗ Error: ${error.message}`));
    }
};