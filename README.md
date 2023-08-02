# Creating a project to learn about API's and how to connect them to the front-end

In the database folder, you will find a file named 'schema.sql', which contains the commands to configure PostgreSQL. I'm using a docker container with the database image, and if you wish to do the same, you can find a simple tutorial on how to set it up below:
!!! Docker Desktop is necessary for the next steps !!!
### To set up the container
CONTAINER_NAME(Pick one that is easy for you to identify).
```
docker run --name CONTAINER_NAME -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```
### Acessing the container terminal
 ```
 docker exec -it CONTAINER_NAME bash
 ```
### Acessing the PostgreSQL
Use the POSTGRES_USER that you set during the docker run command
```
psql -U POSTGRES_USER

```
After that you will be loggend on the database and can run the commands in the database/schema.sql file.
(To verify if the database was successfully created, type '\l')
