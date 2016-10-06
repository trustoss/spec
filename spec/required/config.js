const requireDir = require('require-dir')

const CONFIG = {
  id: 'config',
  filenames: [
    '.trustoss',
    '.trustoss.json',
    'trustoss',
    'trustoss.json',
    '.docs',
    '.docs.json',
    'docs',
    'docs.json'
  ],
  purpose: 'Establish the version of specification and location/types of documentation files',
  versioncheck: 'all'
}

module.exports = CONFIG
