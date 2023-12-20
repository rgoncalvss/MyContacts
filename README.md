# A FullStack project to learn about JavaScript/Node.js with Express.js and React.js

### Environment Variables
I'm using the native support for dotenv from Node.js >= 20.6.0.
In the root directory create a .env file like the .env.example available in this repo.

!!! [Docker](https://www.docker.com/products/docker-desktop/) is necessary for the next steps !!!
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
