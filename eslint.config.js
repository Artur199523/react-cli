import tseslint from "typescript-eslint";
import eslint from '@eslint/js'
import node from 'eslint-plugin-n'

import {includeIgnoreFile} from "@eslint/compat"
import path from "path";
import {fileURLToPath} from "url";
import prettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config (
    // Global rules and configuration
    includeIgnoreFile(path.resolve(__dirname, '.gitignore')),
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
    // JavaScript-specific rules
    eslint.configs.recommended,

    // Typescript-specific rules
    tseslint.configs.strictTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
    },
    node.configs['flat/recommended'],
    {
        rules: {
            'n/no-extraneous-import': 'off',
            'n/no-extraneous-require': 'off',
            'n/no-missing-import': 'off',
            'n/no-missing-require': 'off',
            'n/no-unpublished-import': 'off',
            'n/no-unpublished-require': 'off',
        },
    },
    {
        files: ['**/*.?(c|m)js?(x)'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        files: ['**/*.?(c|m)ts?(x)'],
        rules: {
            // `interface` and `type` have different use cases, allow both
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off'
        },
    },
    prettier
)