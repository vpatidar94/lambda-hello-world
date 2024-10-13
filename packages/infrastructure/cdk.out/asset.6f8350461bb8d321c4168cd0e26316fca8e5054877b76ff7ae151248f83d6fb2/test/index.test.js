"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('Lambda Function Handler', () => {
    it('should return Hello, John when name is provided', async () => {
        const mockContext = {}; // Mock the context, if needed
        const mockCallback = jest.fn(); // Mock callback function
        // Simulate the API Gateway event with a query string parameter for 'name'
        const event = {
            queryStringParameters: {
                name: 'John',
            },
        };
        // Invoke the Lambda function
        const result = (await (0, index_1.handler)(event, mockContext, mockCallback));
        // Assertions
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).message).toBe('Hello, John');
    });
    it('should return Hello, World when no name is provided', async () => {
        const mockContext = {}; // Mock the context, if needed
        const mockCallback = jest.fn(); // Mock callback function
        // Simulate the API Gateway event with no query string parameters
        const event = {
            queryStringParameters: null,
        };
        // Invoke the Lambda function
        const result = (await (0, index_1.handler)(event, mockContext, mockCallback));
        // Assertions
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).message).toBe('Hello, World');
    });
});
