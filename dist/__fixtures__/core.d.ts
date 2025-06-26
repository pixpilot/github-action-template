/**
 * This file is used to mock the `@actions/core` module in tests.
 */
import { jest } from '@jest/globals';
export declare const debug: jest.MockedFunction<(message: string) => void>;
export declare const error: jest.MockedFunction<(message: string | Error) => void>;
export declare const info: jest.MockedFunction<(message: string) => void>;
export declare const getInput: jest.MockedFunction<(name: string, options?: object) => string>;
export declare const setOutput: jest.MockedFunction<(name: string, value: string | number | boolean) => void>;
export declare const setFailed: jest.MockedFunction<(message: string | Error) => void>;
export declare const warning: jest.MockedFunction<(message: string | Error) => void>;
