FROM golang:1.16.4-alpine3.13 AS builder

WORKDIR /go/src/github.com/derailed/popeye
COPY . .

RUN go mod download
RUN go build -ldflags="-s -w" -o /go/bin/popeye ./cmd/popeye

FROM alpine:3.13

COPY --from=builder /go/bin/popeye /usr/local/bin

ENTRYPOINT ["/usr/local/bin/popeye"]
