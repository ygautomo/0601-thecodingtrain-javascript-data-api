<!-- /**
 * Project: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Filename: 01 The Coding Train -- Working with Data and APIs in JavaScript- Notes.txt
 * Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Description: 01 The Coding Train -- Working with Data and APIs in JavaScript- Yotube Playlist
 * Directory: D:\06 Training Course\07 JavaScript\01 The Coding Train -- Working with Data and APIs in JavaScript
 * Reference Link: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X
 * Repository: https://github.com/ygautomo/0701-codingtrain-javascript-api.git
 * 
 * Author: Yugo Gautomo
 * Status: Final April 01, 2022
 */  -->

# 0701-codingtrain-javascript-api
0701-codingtrain-javascript-api

## Git Standard Command
git version \
git status \
git config --list\
  core.repositoryformatversion=0\
  core.filemode=true\
  core.bare=false\
  core.logallrefupdates=true\
  remote.origin.url=https://{{userGitHub}}:{{tokenGitHub}}@github.com/{{userGitHub}}/0601-thecodingtrain-javascript-data-api.git\
  remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*\
  branch.master.remote=origin\
  branch.master.merge=refs/heads/master\
  user.name={{userGitHub}}\
  user.email={{userEmail}}\
git remote --verbose\
git remote add origin https://{{userGitHub}}:{{tokenGitHub}}@github.com/{{userGitHub}}/{{repoGitHub}}.git\
git remote set-url origin https://{{userGitHub}}:{{tokenGitHub}}@github.com/{{userGitHub}}/{{repoGitHub}}.git\

## Git Commit Repository
git add .\
git commit -am "comment"\
git push -u origin master
