import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Callback,
    Context,
} from 'aws-lambda';
import { handler } from '../index';

describe('Lambda Function Handler', () => {
    it('should return Hello, John when name is provided', async () => {
        const mockContext: Context = {} as Context; // Mock the context, if needed
        const mockCallback: Callback<APIGatewayProxyResult> = jest.fn(); // Mock callback function

        // Simulate the API Gateway event with a query string parameter for 'name'
        const event = {
            queryStringParameters: {
                name: 'John',
            },
        } as Partial<APIGatewayProxyEvent>;

        // Invoke the Lambda function
        const result = (await handler(
            event as APIGatewayProxyEvent,
            mockContext,
            mockCallback
        )) as APIGatewayProxyResult;

        // Assertions
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).message).toBe('Hello, John');
    });

    it('should return Hello, World when no name is provided', async () => {
        const mockContext = {} as Context; // Mock the context, if needed
        const mockCallback: Callback<APIGatewayProxyResult> = jest.fn(); // Mock callback function
        // Simulate the API Gateway event with no query string parameters
        const event = {
            queryStringParameters: null,
        } as APIGatewayProxyEvent;

        // Invoke the Lambda function
        const result = (await handler(
            event,
            mockContext,
            mockCallback
        )) as APIGatewayProxyResult;

        // Assertions
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).message).toBe('Hello, World');
    });
});
