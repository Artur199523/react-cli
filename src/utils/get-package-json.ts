import { readFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

interface PackageJson {
    name: string;
    version: string;
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
    [key: string]: unknown;
}

let packageJson: PackageJson | null = null

const getPackageJson = async () => {

    if (!packageJson) {
        const packageJsonPath = join(dirname(fileURLToPath(import.meta.url)), '../../package.json')

        packageJson = JSON.parse(await readFile(packageJsonPath,'utf-8')) as PackageJson
    }

    return packageJson
}

export default getPackageJson
