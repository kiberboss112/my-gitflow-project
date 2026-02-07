# Git Commands Cheatsheet

## View commit history
```bash
git log --oneline --graph --all
```
## Move changes from one branch to another (cherry-pick)
```bash
git checkout target-branch
git cherry-pick <commit-hash>
```
## View tag history
```bash
git tag -l
git show <tag-name>
```
## Delete a branch (locally and remotely)
```bash
# Delete locally
git branch -d branch-name
# Force delete locally
git branch -D branch-name
# Delete remotely
git push origin --delete branch-name
```
## List all branches
```bash
git branch -a  # All branches (local and remote)
```
