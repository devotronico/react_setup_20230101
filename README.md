

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
- husky

---
### percorso-del-progetto
D:\Sviluppo-Web-2\React-TS\setup_2022-12-27

---
### reference
https://dev.to/samueldjones/run-a-typescript-type-check-in-your-pre-commit-hook-using-lint-staged-husky-30id
https://medium.com/@byeduardoac/analysing-slowness-pre-commit-setup-4b2b07de6569
https://www.youtube.com/watch?v=_ssKvmZqSnk&ab_channel=MonsterlessonsAcademy
https://github.com/saifbechan/nextjs-ts-eslint-chakraui-vitest-playwright
https://www.youtube.com/watch?v=cchqeWY0Nak&ab_channel=CodingGarden
https://www.youtube.com/watch?v=R8HcBz2wlt0&ab_channel=JavaScriptTalks
https://www.youtube.com/watch?v=ChKBhmsnXKI&ab_channel=JavaScriptTalks

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
```


