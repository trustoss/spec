require("babel-core/register")

const requireDir = require('require-dir')

module.exports = {
  templates: requireDir('./templates'),
  spec: requireDir('./spec'),
  dict: requireDir('./dict')
}
