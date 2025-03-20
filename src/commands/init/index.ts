import {Command} from "commander"
import {initConfig} from "./init.js";

export const createInitCommand = (program: Command) =>
    program
        .command("init")
        .description("Initialize CLI preferences (e.g., CSS or SCSS, JS or TS)")
        .action(initConfig);