## trash

---
### old
vecchia configurazione di lint-staged nel file package.json
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


```js
/* eslint-disable import/no-extraneous-dependencies */
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

export const plugins = [
  postcssImport,
  postcssPresetEnv({
    stage: 0,
    browsers: 'last 2 versions',
  }),
];
```