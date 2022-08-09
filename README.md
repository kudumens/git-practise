# GIT COMMANDS
  git help clone #Get Help on commands
  git clone https://github.com/kudumens/git-practise.git  
  OR git clone git@github.com:kudumens/git-practise.git  
  git config --global user.name "Kudu Mens"  
  git config --global user.email "support@rhomicom.com"  
  git config --global --list  
  git status  # Show the working tree status
  git status -s #Give the output in the short-format
  echo "Test Git Quick Start Demo" >> start.txt  
  (use "git add <file>..." to update what will be committed)  
  (use "git checkout -- <file>..." to discard changes in working directory E.g. git checkout -- start.txt)  
  git add start.txt  
  (use "git reset HEAD <file>..." to unstage E.g. git reset HEAD start.txt)  
  git commit -m "Add Start Text File" 
  git commit -am "Add Start Text File" #Perform git add and commit at the same time  
  git commit -a # same as git add  
  git commit --amend #Modify last commit message  
  git push origin main  
  git config --global core.editor "mate -w"  
  git config --global -e #To edit global config from a Text Editor  
  git pull #Same as git pull origin main
  git fetch origin test-branch
  git push origin main   
  git ls-files #get all files git is tracking  
  git add . #Recursive add All files  
  git commit #for Multiline Text Editor Message  
  git mv start.txt newStart.txt #Rename a file using git  
  git add -A#Recursively add changed files but also take care of file additions, renamings or deletions  
  git add start.txt  
  git add -u #Update a recently added/renamed file  
  git rm newfile.txt #Delete a file tracked by git  
  git help log #get help on log command  
  git log #General History  
  git log --abrev-commit  
  git log --oneline --graph --decorate  
  git log --all --oneline --graph --decorate  
  git log ae2341t...726hg43  
  git log --since="3 days ago"  
  git log -- start.txt  
  git log --follow -- start.txt  
  git show ae43729shmdgtf688655457900121  
  git config --global alias.hist "log --all --one-line --graph --decorate"  
  git diff #Compare diff between local changes i.e working directory changes versus staging area changes  
  git diff HEAD #Compare diff between working directory and last commit  
  git difftool #git diff Visually   
  git difftool HEAD #git diff Visually  
  git diff --staged HEAD #Compare diff between staging area and last commit in current branch  
  git difftool --staged HEAD  
  git diff -- start.txt #Limit diff to one file  
  git diff e5c4f47 HEAD #Diff btween a commit and the latest commit in the current directory #Type q to quit  
  git diff HEAD HEAD^ #Diff between lastest commit and last but one commit  
  git difftool HEAD HEAD^  
  git diff main origin/main #Diff between local branch and remote branch  
  git difftool main origin/main  
# BRANCHES
git branch #List Current Branch  
git branch -a #List All Branches  
git branch mynewbranch #Create a new branch  
git branch nwbranch origin/nwbranch #Create a new branch to track remote branch 
gti checkout mynewbranch #Switch to the new branch  
git branch -m mynewbranch newbranch # Rename a branch  
git branch -d newbranch # Delete a branch  
git branch -D newbranch # Force Delete a branch
git checkout -b add-copyright # Create and Switch to a branch called add-copyright  
git diff main add-copyright #compare main branch with newbranch branch  
git difftool main add-copyright #compare main branch with newbranch branch visually  
git checkout main  
git merge add-copyright #Copy changes from add-copyright branch to current branch  
git merge add-copyright --no-ff #Disables fast-forward commit so you have to manually enter commit message  
git merge add-copyright -m "AutoMerge commit message" #Merge automatically  
git mergetool #Visually inspect merge conflicts and correct  
# REBASE
git checkout featurebranch  
git rebase main #Rewind featurebranch to be in-line with main branch and then reapply changes made to featurebranch  
git rebase --abort # ABort a rebase  
git mergetool #Visually inspect merge conflicts and correct    
git rebase --continue  
# STASH
git stash  
git stash save # same as git stash  
git stash apply or git stash pop # Bring back what git stash removed  
git stash list # List all stashed changes  
git stash drop # Remove stashed change  
git stash -u # Stash a file not tracked by git  
git stash pop #Reapply and drop last stash| Same as git stash apply and git stash drop  
git stash save "Simple Stash Label" # Save stash changes with a label for reference  
git stash list  
git stash show stash@{0} # Show a labeled stash  
git stash show stash@{1}  
git stash show stash@{2}   
git stash apply stash@{1} # Apply a labeled stash  
git stash drop stash@{1} # Drop a labeled stash  
git stash clear # Remove all labeld stash changes  
git stash branch newchanges # Send all stash changes to a new created branch called newchanges  
# TAGGING
git tag myTag #Label for current commit  
git tag --list # List all tagged commits  
git show myTag  
git tag --delete myTag  
git tag -a v-1.0 # Annotated Tag to label major milestones  
git tag -a v-1.2 -m "Release 1.2" # Annotated tag direct message  
git diff v-1.0 v-1.2 # Compare tags  
git difftool v-1.0 v-1.2 # Compare tags visually  
git tag -a v-0.9-beta 09abcd3es # Tag specific commit ID
git tag -a v-0.9-beta -f b98as346f # Force update Tag to a new commit ID
git push origin v-0.9-beta #Push tag to github
ig tpush origin main --tags #Push all tags to github
git push origin :v-0.8-alpha #Delete remote tag on github

# RESET
git reset HEAD # reset to Lastest commit
git reset HEAD^ # reset to Lastest commit minus 1
git reset HEAD^^ # reset to Lastest commit minus 2
git reset HEAD^2 # reset to Lastest commit minus 2
git reset HEAD^3 # reset to Lastest commit minus 3
git reflog # show all your git commands
git reset HEAD@{2} # reset to specific commit
git reset e393678d # reset to specific commit ID
