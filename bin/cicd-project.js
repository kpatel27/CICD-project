#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CicdProjectStack } = require('../lib/cicd-project-stack');

const app = new cdk.App();
new CicdProjectStack(app, 'CicdProjectStack');
