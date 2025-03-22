import { createMainCommand } from './commands/main.js'
import { error } from './utils/command-helpers.js'

createMainCommand().catch((err: unknown) => {
  error('Create Main Command Fail:', err)
})
