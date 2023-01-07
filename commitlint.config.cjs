const prefixes = ['all', 'web', 'mobile'];
const scopes = ['global', 'doc', 'home', 'about'];
const arr = scopes.map(s => prefixes.map(p => `${p}-${s}`));

const prefixed = arr.flat();

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', prefixed],
  },
};
