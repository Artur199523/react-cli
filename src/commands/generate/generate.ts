import path from 'path'
import chalk from 'chalk'

import { createComponentTemplate, createCSSTemplate } from '../../utils/templates.js'
import { writeComponentFiles } from '../../utils/file-manager.js'
import { error } from '../../utils/command-helpers'

// Define the "generate" command logic
export const generateComponent = (componentName: string, options: any) => {
  const componentDir = path.join('./src/components', componentName)

  console.log(chalk.blue(`Creating React component: "${componentName}"...`))

  try {
    // Create component and CSS templates
    const componentCode = createComponentTemplate(componentName)
    const cssCode = options.withCss ? createCSSTemplate(componentName) : null

    // Write files to the target directory
    writeComponentFiles(componentDir, componentName, componentCode, cssCode)

    console.log(chalk.green(`✓ Component "${componentName}" created successfully.`))
  } catch (err: unknown) {
    error(`✗ Error:`, err)
  }
}
