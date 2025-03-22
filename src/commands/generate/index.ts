import { Command } from 'commander'
import { generateComponent } from './generate.js'

export const createComponentGenerateCommand = (program: Command) =>
  program
    .command('generate <component-name>')
    .description('Generate a new React component')
    .action((componentName, options) => {
      generateComponent(componentName, options)
    })
