import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class InfrastructureStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaFunction = new Function(this, 'LambdaFunction', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'index.handler',
            code: Code.fromAsset(path.join(__dirname, '../../lambda-function/build')),
        });

        new LambdaRestApi(this, 'Endpoint', {
            handler: lambdaFunction
        });
    }
}
