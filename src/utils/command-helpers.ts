import os from 'os'
import WSL from 'is-wsl'

import getPackageJson from "./get-package-json.js";

const platform = WSL ? 'wsl' : os.platform()
const arch = os.arch() === 'ia32' ? 'x86' : os.arch()

//@ts-ignore
const { name, version: packageVersion } = await getPackageJson()

export const version = packageVersion
export const USER_AGENT = `${name}/${version} ${platform}-${arch} node-${process.version}`