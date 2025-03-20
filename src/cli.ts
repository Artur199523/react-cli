import {program} from "commander"
import { initConfig } from "./commands/initConfig.js";
import {generateComponent} from "./commands/generateComponent.js";

// Initialize the user preferences (CSS/SCSS, JS/TS, with or without test)
program
    .command("init")
    .description("Initialize CLI preferences (e.g., CSS or SCSS, JS or TS)")
    .action(initConfig);


// Register CLI commands
program
    .command('generate <component-name>')
    .description('Generate a new React component')
    .action((componentName, options) => generateComponent(componentName, options));

// Parse CLI arguments
program.parse(process.argv);


// import {createMainCommand} from "./commands/main";
//
// createMainCommand();