FROM golang:1.17-alpine3.14 AS builder

RUN apk add --no-cache git

RUN git clone https://github.com/chaos-mesh/chaos-mesh.git && \
    cd chaos-mesh && \
    git checkout v1.1.1

WORKDIR /go/src/github.com/chaos-mesh/chaos-mesh

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags="-w -s" -o chaos-controller-manager cmd/chaos-controller-manager/main.go

FROM alpine:3.14

RUN apk add --no-cache ca-certificates

COPY --from=builder /go/src/github.com/chaos-mesh/chaos-mesh/chaos-controller-manager /chaos-controller-manager

ENTRYPOINT ["/chaos-controller-manager"]
