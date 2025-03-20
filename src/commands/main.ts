import {program} from "commander"
import {createInitCommand} from "./init/index.js";

import {USER_AGENT} from "../utils/command-helpers.js";

const mainCommand = () => {
    console.log("main command testong")
}

export const createMainCommand = () => {
    createInitCommand(program);

    program
        .version(USER_AGENT, '-v, --version')
        .showSuggestionAfterError(true)
        .action(mainCommand)

    program.parse(process.argv);
}