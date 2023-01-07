## setup

---
### setup_react
setup react vite con typescript:
```
git init
npm create vite@latest
npm install
```

---
### setup_eslint-e-prettier:
```
npm install -D eslint
npx eslint --init
npm install -D eslint-config-airbnb-typescript
npm install -D prettier
npm install -D eslint-plugin-prettier
npm install -D eslint-config-prettier
touch .prettierrc.cjs
```

---
### setup_testing:
```
npm install -D vitest
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D jsdom
```

---
### setup_routing:
```
npm install react-router-dom
```

---
### setup_husky-con_lint-staged_e_validate-branch-name
```
npm install -D husky@latest
npx husky-init && npm install
npm install -D lint-staged
npm install -D validate-branch-name
```

---
### setup_commitlint-per-husky: 
```
npm install -D @commitlint/config-conventional @commitlint/cli
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

---
### setup_semantic-release_e_github-actions: 
https://github.com/open-sauced/semantic-release-conventional-config
https://www.wizeline.com/blog-continuous-deployment-with-semantic-release-and-github-actions/
https://levelup.gitconnected.com/improve-your-commits-and-versioning-in-javascript-56f72c0ab761
```
npm install -D semantic-release @semantic-release/git @semantic-release/changelog
# npm install -D semantic-release @semantic-release/git @semantic-release/github
touch release.config.cjs
mkdir -p .github/workflows && touch .github/workflows/release.yml
```