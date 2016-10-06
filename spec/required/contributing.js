const requireDir = require('require-dir')

const CONTRIBUTING = {
  id: 'contributing',
  filenames: [
    'CONTRIBUTING',
    'CONTRIBUTING.md',
    'CONTRIBUTING.txt',
    'Contributing',
    'Contributing.md',
    'Contributing.txt',
    'contributing',
    'contributing.md',
    'contributing.txt'
  ],
  purpose: 'Information related to onboarding new contributors.',
  versioncheck: null,
  templates: requireDir('../../templates/contributing'),
  defaults: {
    type: 'keepacontributing',
    location: '{{DOCROOT}}'
  },
  prompts: {
    init: {
      description: 'Contributing Guide Type',
      type: 'string',
      require: true
    }
  }
}

module.exports = CONTRIBUTING
