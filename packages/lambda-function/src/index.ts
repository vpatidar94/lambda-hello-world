import {
    APIGatewayProxyHandler,
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
} from 'aws-lambda';

interface HelloResponse {
    message: string;
}

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    // Extract name from query string, default to 'World' if not provided
    const name: string = event.queryStringParameters?.name || 'World';

    // Create a typed response object
    const response: HelloResponse = {
        message: `Hello, ${name}`,
    };

    // Return a properly typed response object
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    } as APIGatewayProxyResult;
};
