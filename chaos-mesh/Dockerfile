FROM golang:1.16-alpine

# Install required packages
RUN apk add --no-cache git make

# Clone Chaos Mesh
RUN git clone https://github.com/chaos-mesh/chaos-mesh.git /go/src/github.com/chaos-mesh/chaos-mesh

WORKDIR /go/src/github.com/chaos-mesh/chaos-mesh

# Build Chaos Mesh
RUN make

# Set the entrypoint
ENTRYPOINT ["/go/src/github.com/chaos-mesh/chaos-mesh/bin/chaos-controller-manager"]

