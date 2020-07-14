FROM archlinux

RUN pacman --noconfirm -Sy caddy

COPY caddy /etc/caddy/Caddyfile

COPY * /stuff/
RUN rm /stuff/caddy

CMD caddy --conf /etc/caddy/Caddyfile