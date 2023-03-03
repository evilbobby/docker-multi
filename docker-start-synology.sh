#############
# git clone https://github.com/evilbobby/docker-multi
# sudo sh docker-start-synology.sh
#    
# 
#############

mkdir var/lib/mysql -p # create directory for volumes
sudo docker-compose -f docker-compose-synology.yml up -d --build 