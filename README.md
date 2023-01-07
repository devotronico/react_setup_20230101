

## react_setup_20230101

---
## note
setup del 2023-01-01 con:
- react
- typescript
- vite
- vitest
- prettier
- eslint
- lint-staged
- validate-branch-name
- husky

---
## todo
- Validating Branch Names
- Linting Commit Messages
- Compressing Staged Images
- Skipping Hooks
- bloccare i push sul ramo master

---
### percorso-del-progetto
D:\Sviluppo-Web-2\React-TS\react_setup_20230101

---
### reference
https://www.wizeline.com/blog-continuous-deployment-with-semantic-release-and-github-actions/
https://levelup.gitconnected.com/improve-your-commits-and-versioning-in-javascript-56f72c0ab761
https://github.com/conventional-changelog/commitlint#shared-configuration
https://blog.devgenius.io/find-out-how-to-ensure-your-git-branch-name-is-valid-6930639eaaaa
https://www.git-tower.com/blog/git-hooks-husky/
https://strdr4605.com/optional-pre-commit-checks-with-husky
https://javascript.plainenglish.io/create-a-pre-commit-git-hook-to-check-and-fix-your-javascript-typescript-code-b04de61834bd
https://dev.to/samueldjones/run-a-typescript-type-check-in-your-pre-commit-hook-using-lint-staged-husky-30id
https://medium.com/@byeduardoac/analysing-slowness-pre-commit-setup-4b2b07de6569
https://github.com/saifbechan/nextjs-ts-eslint-chakraui-vitest-playwright

---
### versioning
https://github.com/open-sauced/semantic-release-conventional-config
https://www.wizeline.com/blog-continuous-deployment-with-semantic-release-and-github-actions/
https://levelup.gitconnected.com/improve-your-commits-and-versioning-in-javascript-56f72c0ab761

---
### setup
```
git init
npm create vite@latest
npm install
npm install -D eslint
npx eslint --init
npm install -D eslint-config-airbnb-typescript
npm install -D prettier
npm install -D eslint-plugin-prettier
npm install -D eslint-config-prettier
touch .prettierrc.cjs
npm install -D vitest
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D jsdom
npm install react-router-dom
npm install -D husky@latest
npx husky-init && npm install
npm install -D lint-staged
npm install -D validate-branch-name 
npm install -D @commitlint/config-conventional @commitlint/cli
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
npm install -D semantic-release @semantic-release/git @semantic-release/github
touch release.config.js
mkdir -p .github/workflows && touch .github/workflows/release.yml
```





---
### regex-per-il-nome-del-branch
/^(master|develop){1}$|^(feature|chore|fix)/([\\w\\-\\d]+)/(ITEM|TIKET)-([\\w\\-\\d]+)$/
feature/username/ITEM-123456-new-username-label-1



---
### old
vecchia configurazione di linta-staged nel file package.json
```json
"lint-staged": {
    "src/**/*.{ts,tsx}": [
        "npm run lint",
        "git add"
    ],
    "src/**/*.{ts,tsx,css,html}": [
        "npm run format",
        "git add"
    ]
},
```

---
### da-risolvere
lint-staged generate too much output
excessive output when invoked through pre-commit script
https://github.com/okonet/lint-staged/issues/1164