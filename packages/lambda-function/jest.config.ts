import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src';
const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
    displayName: 'Lambada Function',
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [`${baseDir}/**/*.ts`],
    testMatch: [`${baseTestDir}/**/*test.ts`],
    // setupFiles: ['dotenv/config'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: [`/.*node_modules.*/`],
    testPathIgnorePatterns:  [`/.*node_modules.*/`],
    errorOnDeprecated: true,
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 85,
            lines: 85,
            statements: 85,
        },
    },
    watchman: true,
};

export default config;