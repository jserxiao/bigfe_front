#!/bin/bash
 
# 添加所有变更到暂存区
git add . & pid=$!
wait $pid
echo "<====================添加变更到暂存区成功====================>"
# 提交变更
git commit -m "$1" & pid=$!
wait $pid
echo "<====================commit成功====================>"
if git pull --rebase : then
# 推送到远程仓库
git push origin "$2" & pid=$!
wait $pid
echo "代码推送成功"
else 
echo "代码拉取失败，可能存在冲突"
fi
