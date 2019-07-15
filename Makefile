up:
	docker-compose up

up-silent:
	docker-compose up -d

down:
	docker-compose down

dev-server:
	json-server --port 3333 -d 1000 server.json


