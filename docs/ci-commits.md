## commits

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
global
doc
page

---
### commit_validi-e-eseguiti
```
ci(global): update the file release.config
docs(global): update ci documentation files
chore(global): install library @semantic-release/changelog
fix(global): replace the char endline with CRLF in the file release.config
chore(global): change the eslint rule "linebreak-style"
fix(global): replace the char endline with CRLF in the file commitlint.config
chore(global): update the regex to validate branch naming
feat(global): activate semantic-release action on merging feature branch on branch develop
chore(global): update release.yml github action file
docs(global): update ci.md file
chore(global): update commitlint config file
chore(all-doc): insert space between the links
chore(all-doc): change the rule for the end line
docs(all-doc): write new branch
feat(all-global): activate workflow on branch develop BREAKING CHANGE
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