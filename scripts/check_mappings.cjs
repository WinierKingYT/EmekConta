const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf8');

const prods = [
  'klingirit-flans-conta',
  'asbestsiz-klingerit-levha',
  'klingirit-conta',
  'epdm-conta',
  'viton-conta',
  'spiral-sarimli-celik-conta',
  'saf-grafit-levha',
  'ptfe-teflon-conta',
  'ptfe-teflon-levha',
  'mantar-levhalar'
];

prods.forEach(id => {
  const m = content.match(new RegExp('"id":\\s*"' + id + '"[\\s\\S]*?"image":\\s*"([^"]+)"'));
  if (m) console.log(id, '->', m[1]);
  else console.log(id, '-> NOT FOUND');
});
