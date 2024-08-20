# Backend Dockerfile
FROM golang:1.20-alpine

WORKDIR /app/backend

COPY . .

RUN go build -o main .

EXPOSE 3333
CMD ["./main"]
