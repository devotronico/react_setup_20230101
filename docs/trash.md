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