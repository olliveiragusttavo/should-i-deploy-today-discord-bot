sudo rm /bin/sh
sudo ln -s /bin/bash /bin/sh
sudo apt-get update
sudo apt-get install -y apache2 curl git npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source /home/ubuntu/.bashrc
nvm install 16.14.2
npm install -g yarn pm2
git clone https://github.com/panacaqui/should-i-deploy-today-discord-bot.git
cd ~/should-i-deploy-today-discord-bot
yarn install
pm2 start src/index.js --name "deploy"
