import { Command } from 'commander'

import { log, USER_AGENT } from '../utils/command-helpers.js'
import { getPackageJson } from '../utils/file-manager.js'

import { createComponentGenerateCommand } from './generate/index.js'
import { createInitCommand } from './init/index.js'

const mainCommand = async () => {
  const { name, version } = await getPackageJson()
  log(USER_AGENT(name, version))
}

export const createMainCommand = async () => {
  const program = new Command()

  createInitCommand(program)
  createComponentGenerateCommand(program)

  program.option('-v, --version', 'output the current version').showSuggestionAfterError(true).action(mainCommand)

  await program.parseAsync(process.argv)
}
