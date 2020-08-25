FROM hayd/alpine-deno:1.3.1

EXPOSE 8000

WORKDIR /app

USER deno

COPY --chown=deno . .

RUN deno cache --unstable app.ts

CMD ["run", "--allow-net=0.0.0.0:8000", "--allow-read=less,public/assets", "--allow-write=public/assets/css", "app.ts"]
