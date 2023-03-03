#############
# git clone https://github.com/evilbobby/docker-multi
# sudo sh docker-start.sh
#    
# 
#############

mkdir var/lib/mysql -p # create directory for volumes
sudo docker-compose up -d --build