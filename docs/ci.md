## ci

---
### regex-per-il-nome-del-branch
/^(master|develop){1}$|^(feature|chore|fix)/([\\w\\-\\d]+)/(ITEM|TIKET)-([\\w\\-\\d]+)$/

crea il ramo develop:
```
git checkout -b develop
```

crea il ramo feature/username/ITEM-123456-new-username-label-1:
```
git checkout -b feature/username/ITEM-123456-new-username-label-1
```

---
### commit_type
https://www.npmjs.com/package/@commitlint/config-conventional
```
- build:    Changes that affect the build system or external dependencies      
- chore:    changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- ci:       Changes to our CI configuration files and scripts
- docs:     changes in documentation
- feat:     a new feature
- fix:      a bug fix
- perf:     improve performance
- refactor: modifiche che non risolvono un bug o aggiungono funzionalità
- revert:   reverts a previous commit
- style:    everything related to styling
- test:     everything related to testing
```

---
### commit_scopes
release

all-global
all-doc
all-home
all-about

web-global
web-doc
web-home
web-about

mobile-global
mobile-doc
mobile-home
mobile-about

---
### commit_validi-e-eseguiti
```
feat(all-global): activate workflow on branch develop

BREAKING CHANGE
feat(all-global): generic commit BREAKING CHANGE: this is a test
feat(all-global): edited the file "release.yml" BREAKING CHANGE: update the prop "on"
chore(all-global): update "actions/checkout" and "actions/setup-node" from version 2 to 3
docs(all-doc): create folder "docs" with files "ci.md", "setup.md" and "trash.md"
fix(all-global): rename the extension of the file "release.config.js" from "js" to "cjs"
fix(all-global): fix the version of nodejs to the version 18.12.1
chore(all-global): fix the name of the lib semantic-release
fix(all-about): fix the second argument type passed to the function myFunc
docs(all-doc): edd details for the commits
fix(all-home): add the date
feat(all-home): add the author BREAKING CHANGE: insert my name as author
feat(all-doc): expand the documentation
```
