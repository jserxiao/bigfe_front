#!/bin/bash
 
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