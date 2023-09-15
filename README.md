# RnHealth Project

### Structure
There are 3 folders containing the required services to run this application: 
1. RnAPi - Contains the API. Uses the framework FastAPI in Python.
2. RnHealthWeb - Contians the frontend of the application. Uses Angular + Angular Material.
3. RnHealthDB - Contains the files necessary to create a MongoDB database for the application to use.

### Docker Compose
The docker compose generates a container with 3 services, one for each compoment of the application. All the envoirement variables necessary are contained in the dockerfiles of each service in it's respective folder.

> To run this application in docker use:

`docker compose up`

> To recreate the container and force the re-building of the images use:

`docker compose up --build`
