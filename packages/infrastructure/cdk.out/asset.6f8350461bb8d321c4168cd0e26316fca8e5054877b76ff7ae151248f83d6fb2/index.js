"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    // Extract name from query string, default to 'World' if not provided
    const name = event.queryStringParameters?.name || 'World';
    // Create a typed response object
    const response = {
        message: `Hello, ${name}`,
    };
    // Return a properly typed response object
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
exports.handler = handler;
