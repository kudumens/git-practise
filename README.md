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
  git push origin main  
  git config --global core.editor "mate -w"  
  git config --global -e #To edit global config from a Text Editor  
