const requireDir = require('require-dir')

const CHANGELOG = {
  id: 'changelog',
  filenames: [
    'CHANGELOG',
    'CHANGELOG.md',
    'CHANGELOG.txt',
    'Changelog',
    'Changelog.md',
    'Changelog.txt',
    'changelog',
    'changelog.md',
    'changelog.txt'
  ],
  purpose: 'Notable changes to code or API, corresponding with git tagged version releases',
  versioncheck: 'all',
  templates: requireDir('../../templates/changelog'),
  defaults: {
    type: 'keepachangelog',
    location: '{{DOCROOT}}'
  },
  prompts: {
    init: {
      description: 'Changelog Type',
      type: 'string',
      require: true
    }
  }
}

module.exports = CHANGELOG
