FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME=rnadmin
ENV MONGO_INITDB_ROOT_PASSWORD=change-me
ENV MONGO_INITDB_DATABASE=RnHealthDB

COPY /init_data /docker-entrypoint-initdb.d


EXPOSE 27017:27017


CMD ["mongod", "--auth"]


