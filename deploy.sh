#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME
#echo -e 'www.leo0828.top\nleo0828.top' > CNAME

git init
git add -A
read -p "commit message:" message
git commit -m "${message}"

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
#git push -f git@github.com:leo0828/leo0828.github.io.git master
git push -f https://github.com/leo0828/leo0828.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -