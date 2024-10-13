import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class InfrastructureStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaFunction = new Function(this, 'LambdaFunction', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'index.handler',
            code: Code.fromAsset(path.join(__dirname, '../../lambda-function/build')),
        });

        const api = new apigateway.RestApi(this, 'Greeting API', {
            restApiName: 'Greeting API',
        });

        const apiResource = api.root.addResource('hello');  // Add '/abc' to the API

        const getSwaggerSpec = new apigateway.LambdaIntegration(lambdaFunction);
        apiResource.addMethod('GET', getSwaggerSpec);  // GET /abc serves the Swagger JSON

    }
}
