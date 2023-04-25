FROM alpine:latest

RUN apk add --no-cache curl && \
    curl -L https://github.com/derailed/popeye/releases/download/v0.9.16/popeye_Linux_x86_64.tar.gz | tar xz && \
    mv popeye /usr/local/bin/ && \
    apk del curl

ENTRYPOINT ["popeye"]
