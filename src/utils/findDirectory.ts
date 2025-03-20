import {existsSync} from "fs";
import path, {dirname, join} from "path";

export const findProjectRoot = (markerFiles:string[]) => {
    // Start from the current working directory
    let currentDirectory = process.cwd();
    let isDirectoryFound = false;

    //Root of the file system
    const rootDirectory = path.parse(currentDirectory).root;

    // Traverse up the directory tree until the root
    while (!isDirectoryFound || currentDirectory === rootDirectory) {
        for (const file of markerFiles) {
            // Check if any of the marker files exists in the current directory
            if(existsSync(join(currentDirectory, file))){
                return currentDirectory;
            }
        }

        // Move up one directory
        currentDirectory = dirname(currentDirectory);
    }

    return null; // Return null if root not found
};
