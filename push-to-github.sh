#!/bin/bash

# NexaLearn AI Academy - GitHub 推送脚本
# 使用说明：
# 1. 确保已配置好 GitHub 访问权限（SSH 或 HTTPS token）
# 2. 运行方式: bash push-to-github.sh

echo "=== NexaLearn AI Academy - GitHub 推送脚本 ==="
echo ""

# 检查是否有未提交的更改
echo "[1/4] 检查工作状态..."
if ! git diff --quiet; then
    echo "发现未提交的更改，正在添加..."
    git add .
    echo -n "请输入提交信息: "
    read commit_msg
    git commit -m "$commit_msg"
else
    echo "工作区干净，跳过提交"
fi

# 推送主分支
echo ""
echo "[2/4] 推送代码到 GitHub..."
echo "尝试方式 1: 使用 SSH..."
git push github main 2>&1 || {
    echo "SSH 方式失败，尝试方式 2: 使用 HTTPS..."
    # 提示用户输入 GitHub token
    echo -n "请输入 GitHub Personal Access Token: "
    read -s token
    echo ""
    git remote set-url github "https://${token}@github.com/Taralili591/nexalearn.git"
    git push github main 2>&1 || {
        echo "HTTPS 方式也失败，请检查网络连接或 GitHub 权限"
        echo "备用方案：手动运行以下命令:"
        echo "  git remote set-url github https://<your-token>@github.com/Taralili591/nexalearn.git"
        echo "  git push github main"
        exit 1
    }
}

echo ""
echo "[3/4] 推送成功!"
echo ""
echo "[4/4] 仓库信息:"
echo "仓库地址: https://github.com/Taralili591/nexalearn"
echo "分支: main"

echo ""
echo "=== 推送完成 ==="