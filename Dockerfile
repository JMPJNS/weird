FROM archlinux

RUN pacman --noconfirm -Sy caddy

COPY caddy /etc/caddy/Caddyfile

COPY * /stuff

CMD caddy --conf /etc/caddy/Caddyfile