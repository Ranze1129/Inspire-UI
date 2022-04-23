rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:Ranze1129/Inspire-UI-website.git &&
git push -f -u origin main &&
cd -
echo https://ranze1129.github.io/Inspire-UI-website/index.html