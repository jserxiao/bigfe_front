#!/bin/bash
# 配置这些变量
REMOTE_REPO="https://github.com/jserxiao/bigfe_front.git" # 替换为你的远程仓库URL
BRANCH_NAME="main" # 替换为你想要推送的分支名

 
# 添加所有变更到暂存区
git add . & pid=$!
wait $pid
# 提交变更
git commit -m "$1" & pid=$!
wait $pid
git pull --rebase & pid=$!
wait $pid
# 推送到远程仓库
git push origin "$2"