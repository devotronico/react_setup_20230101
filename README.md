

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

---
### percorso-del-progetto
D:\Sviluppo-Web-2\React-TS\react_setup_20230101

---
### reference
https://blog.devgenius.io/find-out-how-to-ensure-your-git-branch-name-is-valid-6930639eaaaa
https://www.git-tower.com/blog/git-hooks-husky/
https://strdr4605.com/optional-pre-commit-checks-with-husky
https://javascript.plainenglish.io/create-a-pre-commit-git-hook-to-check-and-fix-your-javascript-typescript-code-b04de61834bd
https://dev.to/samueldjones/run-a-typescript-type-check-in-your-pre-commit-hook-using-lint-staged-husky-30id
https://medium.com/@byeduardoac/analysing-slowness-pre-commit-setup-4b2b07de6569
https://github.com/saifbechan/nextjs-ts-eslint-chakraui-vitest-playwright

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
```

---
### regex-per-il-nome-del-branch
^(master|develop){1}$|^(feature|chore|fix)\/([\\w\\-\\d]+)\/(JIRA|TIKET)-([\\w\\-\\d]+)$
/^(master|develop){1}$|^(feature|chore|fix)\/([\/\w\\-\\d]+)\/(JIRA|TIKET|ITEM)-(\d{6})-([\w\-\d]+)$/
feature/username/ITEM-123456-new-username-label-1


/^(master|develop){1}$|^(feature|chore|fix)\/([\/\w\\-\\d]+)\/(JIRA|TIKET)-([\w\-\d]+)$/
feature/username/JIRA-123-new-username-label

/^(master|main|develop){1}$|^(feature|fix|hotfix|release)\/.+$/g