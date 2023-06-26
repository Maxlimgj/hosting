git clone https://github.com/GoodJeans/portfolio-reactjs.git
git remote add origin https://github.com/GoodJeans/portfolio-reactjs.git
git fetch https://github.com/GoodJeans/self_hosted.git
git config --global user.email "limguanji@gmail.com"
git config --global user.name "goodjeans"
git config --global --list
git add .
git push origin main
git remote -v  
git remote rm origin
git remote add origin https://github.com/GoodJeans/self_hosted.git
git fetch
git pull origin main
