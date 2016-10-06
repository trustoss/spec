const requireDir = require('require-dir')

const CIVICJSON = {
  id: 'civic.json',
  filenames: [
    'civic.json',
    '.civic',
    '.civic.json'
  ],
  purpose: 'A civic-centric configuration file, outlining project members, project status, and government partners',
  versioncheck: 'all',
  templates: requireDir('../../templates/civic.json'),
  defaults: {
    include: false,
    type: 'dc',
    location: ''
  },
  prompts: {
    init: {
      description: 'Is this a civic project? (Include civic.json?)',
      type: 'string',
      require: true
    }
  }
}

module.exports = CIVICJSON
