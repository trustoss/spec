const requireDir = require('require-dir')

const LICENSE = {
  id: 'license',
  filenames: [
    'LICENSE',
    'LICENSE.md',
    'LICENSE.txt',
    'License',
    'License.md',
    'License.txt',
    'license',
    'license.md',
    'license.txt'
  ],
  purpose: 'Lets developers know the legal status of project usage.',
  versioncheck: null,
  templates: requireDir('../../templates/license'),
  defaults: {
    type: 'MIT',
    location: ''
  },
  prompts: {
    init: {
      description: 'License Type',
      type: 'string',
      require: true
    }
  }
}

module.exports = LICENSE
