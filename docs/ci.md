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

commit validi e eseguiti:
```
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