FROM mongo:6

# The root user and password come from .env through docker-compose.yml.
ENV MONGO_INITDB_DATABASE=RnHealthDB

COPY /init_data /docker-entrypoint-initdb.d

CMD ["mongod", "--auth"]
