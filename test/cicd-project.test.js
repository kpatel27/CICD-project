const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const CicdProject = require('../lib/cicd-project-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CicdProject.CicdProjectStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
