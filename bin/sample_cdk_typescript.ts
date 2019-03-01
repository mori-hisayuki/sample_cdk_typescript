#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { SampleCdkTypescriptStack } from '../lib/sample_cdk_typescript-stack';

const app = new cdk.App();
new SampleCdkTypescriptStack(app, 'SampleCdkTypescriptStack');
app.run();
