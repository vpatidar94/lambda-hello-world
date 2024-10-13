import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class InfrastructureStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const fnPath = path.join(__dirname, '../../lambda-function/build/src');

        const greetingLambda = new Function(this, 'GreetingHandler', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'index.handler',
            code: Code.fromAsset(fnPath),
        });

        const greetingApi = new apigateway.RestApi(this, 'Greeting API', {
            restApiName: 'Greeting API',
        });

        const greetingApiResource = greetingApi.root.addResource('hello');

        const getGreeting = new apigateway.LambdaIntegration(greetingLambda);
        greetingApiResource.addMethod('GET', getGreeting);


        // Add a new Lambda for serving Swagger
        const swaggerLambda = new Function(this, 'SwaggerHandler', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'api-docs.handler', 
            code: Code.fromAsset(fnPath),
        });

        const swaggerApi = new apigateway.RestApi(this, 'SwaggerApi', {
            restApiName: 'Swagger Documentation API',
        });

        const swaggerApiResource = swaggerApi.root.addResource('api-docs');

        const getSwaggerSpec = new apigateway.LambdaIntegration(swaggerLambda);
        swaggerApiResource.addMethod('GET', getSwaggerSpec);

    }
}
