

## react_setup_20230101

---
### note
setup 
iniziato il 2023-01-01 e 
aggiornato il 2023-01-07 
con le seguenti librerie:
- react
- typescript
- vite
- vitest
- prettier
- eslint
- lint-staged
- validate-branch-name
- husky
- semantic-release

---
### todo
- [x] Validating Branch Names

- [x] Linting Commit Messages

- [ ] Activating github action on pull request on branch develop

- [ ] Compressing Staged Images

- [ ] Skipping Hooks

- [ ] Bloccare i push sul ramo master
https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches

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
### da-risolvere
lint-staged generate too much output
excessive output when invoked through pre-commit script
https://github.com/okonet/lint-staged/issues/1164

```js
message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`,
```