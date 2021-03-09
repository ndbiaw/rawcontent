#! /bin/bash
printf "Đang cài đặt..." >&2
{
sudo useradd -m ALOK
sudo adduser ALOK sudo
echo 'ALOK:ndbiaw' | sudo chpasswd
sed -i 's/\/bin\/sh/\/bin\/bash/g' /etc/passwd
sudo apt-get update
wget https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb
sudo dpkg --install chrome-remote-desktop_current_amd64.deb
sudo apt install --assume-yes --fix-broken
sudo DEBIAN_FRONTEND=noninteractive \
apt install --assume-yes xfce4 desktop-base
sudo bash -c 'echo "exec /etc/X11/Xsession /usr/bin/xfce4-session" > /etc/chrome-remote-desktop-session'  
sudo apt install --assume-yes xscreensaver
sudo systemctl disable lightdm.service
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg --install google-chrome-stable_current_amd64.deb
sudo apt install --assume-yes --fix-broken
wget https://media.codeweavers.com/pub/crossover/cxlinux/demo/crossover_20.0.4-1.deb
sudo dpkg -i crossover_20.0.4-1.deb
sudo apt install --assume-yes --fix-broken
wget https://discord.com/api/download?platform=linux&format=deb
sudo dpkg --install discord-0.0.13.deb
sudo apt install --assume-yes --fix-broken
sudo apt install nautilus nano -y 
sudo apt -y install obs-studio
sudo apt -y install firefox
sudo adduser ALOK chrome-remote-desktop
} &> /dev/null &&
printf "\nCài đặt hoàn tất! " >&2 ||
printf "\nĐã phát hiện lỗi! " >&2
su - ALOK -c """DISPLAY= /opt/google/chrome-remote-desktop/start-host --code="4/0AY0e-g7JkDDQYY0CV81Txgnie6XDBWdq_sQaTx876Ww2BfWn3R4PEF6sGQ8Iqv8HbqtU3w" --redirect-url="https://remotedesktop.google.com/_/oauthredirect" --name=$(hostname)"""
printf 'Truy cập https://remotedesktop.google.com/access/ để sử dụng.\n'
printf 'Mật khẩu của bạn là ndbiaw \n'
printf 'https://github.com/ndbiaw/'
