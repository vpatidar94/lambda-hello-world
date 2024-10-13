import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { swaggerSpec } from '../swagger';  // Import the Swagger spec configuration

export const handler: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(swaggerSpec),  // Return the Swagger JSON
    };
};
