import {writeFileSync} from "fs";
import inquirer from "inquirer";
import {join} from "path";
import chalk from "chalk";

import {findProjectRoot} from "../utils/findDirectory.js";

export const initConfig = async () => {
    const rootDirectory: string | null = findProjectRoot(["package.json", ".git"])

    if (!rootDirectory) {
        console.log(chalk.red(`The root directory fo the project wasn't found`))
        return
    }

    const configPath = join(rootDirectory as string, "react-cli.config.json");

    console.log(chalk.blue("Setting up CLI preferences..."));

    try {
        // Prompt the user for their preferences
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "styling",
                message: "Which styling format do you prefer?",
                choices: ["CSS", "SCSS"],
                default: "CSS",
            },
            {
                type: "list",
                name: "language",
                message: "Which language do you want to use?",
                choices: ["JavaScript", "TypeScript"],
                default: "JavaScript",
            },
            {
                type: "confirm",
                name: "withTest",
                message: "Do you want to include test files by default?",
                default: true,
            },
        ]);

        // Save preferences to the config file
        const config = {
            styling: answers.styling.toLowerCase(), // 'css' or 'scss'
            language: answers.language.toLowerCase(), // 'javascript' or 'typescript'
            withTest: answers.withTest, // true or false
        };

        writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(chalk.green(`Configuration saved to ${configPath}`));
    } catch (err: any) {
        console.error(chalk.red("Error saving configuration:"), err.message);
    }
};
