/* eslint-disable linebreak-style */
// const prefixes = ['all', 'web', 'mobile'];
const scopes = ['release', 'global', 'doc', 'page'];
// const arr = scopes.map(scope =>
//   prefixes.map(prefix => {
//     if (prefix) {
//       return `${prefix}-${scope}`;
//     }
//     return scope;
//   }),
// );

// const prefixed = arr.flat();

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
};
