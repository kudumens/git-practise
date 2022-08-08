# GIT COMMANDS
  git clone https://github.com/kudumens/git-practise.git  
  OR git clone git@github.com:kudumens/git-practise.git  
  git config --global user.name "Kudu Mens"  
  git config --global user.email "support@rhomicom.com"  
  git config --global --list  
  git status  
  echo "Test Git Quick Start Demo" >> start.txt  
  (use "git add <file>..." to update what will be committed)  
  (use "git checkout -- <file>..." to discard changes in working directory E.g. git checkout -- start.txt)  
  git add start.txt  
  (use "git reset HEAD <file>..." to unstage E.g. git reset HEAD start.txt)  
  git commit -m "Add Start Text File" 
  git commit -am "Add Start Text File" #Perform git add and commit at the same time  
  git commit -a same as git add
  git push origin main  
  git config --global core.editor "mate -w"  
  git config --global -e #To edit global config from a Text Editor  
  git pull origin main
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
  git log --one-line --graph --decorate  
  git log --all --one-line --graph --decorate  
  git log ae2341t...726hg43  
  git log --since="3 days ago"  
  git log -- start.txt  
  git log --follow -- start.txt  
  git show ae43729shmdgtf688655457900121  
  git config --global alias.hist "log --all --one-line --graph --decorate"  
  