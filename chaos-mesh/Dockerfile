FROM golang:1.17.2 AS build

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o chaos-mesh .

FROM alpine:3.14.2

WORKDIR /app

COPY --from=build /app/chaos-mesh .

EXPOSE 2333

CMD ["./chaos-mesh"]
