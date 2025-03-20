import fs from 'fs'
import path from 'path'

// Ensure that directories exist before writing files
export const ensureDirectoryExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
};

// Write component files to the target directory
export const writeComponentFiles = (componentDir: string, componentName: string, componentCode: any, cssCode: any) => {
    ensureDirectoryExists(componentDir);

    // Write the JSX file
    fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentCode.trim());

    if (cssCode) {
        // Write the CSS file (optional)
        fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssCode.trim());
    }
};