import path, { dirname, join } from 'path'
import { readFile } from 'fs/promises'
import fs, { existsSync } from 'fs'
import { fileURLToPath } from 'url'

import { PackageJson } from './types.js'

// Ensure that directories exist before writing files
export const ensureDirectoryExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Write component files to the target directory
export const writeComponentFiles = (componentDir: string, componentName: string, componentCode: any, cssCode: any) => {
  ensureDirectoryExists(componentDir)

  // Write the JSX file dsfgndfg
  fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentCode.trim())

  if (cssCode) {
    // Write the CSS file (optional)
    fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssCode.trim())
  }
}

export const findProjectRoot = (markerFiles: string[]) => {
  // Start from the current working directory
  let currentDirectory = process.cwd()

  //Root of the file system
  const rootDirectory = path.parse(currentDirectory).root

  // Traverse up the directory tree until the root
  while (currentDirectory === rootDirectory) {
    for (const file of markerFiles) {
      // Check if any of the marker files exists in the current directory
      if (existsSync(join(currentDirectory, file))) {
        return currentDirectory
      }
    }

    // Move up one directory
    currentDirectory = dirname(currentDirectory)
  }

  return null // Return null if root not found
}

export const getPackageJson = async (): Promise<PackageJson> => {
  const packageJsonPath = join(dirname(fileURLToPath(import.meta.url)), '../../package.json')

  return JSON.parse(await readFile(packageJsonPath, 'utf-8'))
}
