import { Stack, StackProps, CfnOutput, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as gateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

/**
 * A stack for our simple Lambda-powered web service
 */
export class LambdaCustomIntegrationStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // The Lambda function that contains the functionality
        const backend = new lambda.Function(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '/../src/')),
        });

        // An API Gateway to make the Lambda web-accessible
        const api = new gateway.LambdaRestApi(this, 'Gateway', {
            description: 'Endpoint for a simple Lambda-powered web service',
            handler: backend,
            deployOptions: {
                stageName: "dev"
            },
        });

    }
}
