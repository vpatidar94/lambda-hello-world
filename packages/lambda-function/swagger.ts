import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Lambda API Documentation',
            version: '1.0.0',
            description: 'Swagger documentation for AWS Lambda functions',
        },
        servers: [
            {
                url: 'https://4z3rx17z62.execute-api.us-east-1.amazonaws.com/prod', 
            },
        ],
    },
    apis: ['./src/**/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
