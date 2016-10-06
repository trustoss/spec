const requireDir = require('require-dir')

const COC = {
  id: 'coc',
  filenames: [
    'COC',
    'COC.md',
    'COC.txt',
    'coc',
    'coc.md',
    'coc.txt',
    'CODEOFCONDUCT',
    'CODEOFCONDUCT.md',
    'CODEOFCONDUCT.txt',
    'CodeOfConduct',
    'CodeOfConduct.md',
    'CodeOfConduct.txt',
    'codeofconduct',
    'codeofconduct.md',
    'codeofconduct.txt',
  ],
  purpose: 'Lets developers know the rules of engagement while communicating with maintainers and other contributors. No specific coc is required, just that there is one present.',
  versioncheck: null,
  templates: requireDir('../../templates/coc'),
  defaults: {
    type: 'Contributor Covenant',
    location: '{{DOCROOT}}'
  },
  prompts: {
    init: {
      description: 'Code of Conduct Type',
      type: 'string',
      require: true
    }
  }
}

module.exports = COC
