# NodeJS + Express + MySql + Sequelize + Docker

### Description

The base template written with NodeJS using Express, Sequelize.

In this example, each application contains two sections: one called "greeting", which is simply an endpoint that returns a greeting indicating the visitor's number, which is obtained from a cache, and the other is "books", which consists of a CRUD of books, which are stored in a database, either in MySQL or in Firestore.

### Construction 🛠️
* **Language:** NodeJS 14
* **Framework:** Express, Sequelize.

## Requirements
- Docker installed

## Installation and execution

- Clone or Fork the project.
- Copy **.env.example** to **.env**. It will be used as environment variables source.

Run ```docker-compose``` command inside **docker-nodejs** folder.

* Building the containers: ```docker-compose build```

* Starting the services: ```docker-compose up -d```

* Stoping the services: ```docker-compose stop```

* Removing the services: ```docker-compose down```

By default the microservices will run under the following ports:
- ecommerce-service: 3000 

Check the **.env.example** file to change these or any other params.

#### Note

The NodeJS application will probably throw an exception the first time, because it will try to connect to the MySQL service that is still initializing for the first time; in this case wait for MySQL to fully initialize first and then run the command `docker-compose restart $NAME_SERVICE` ('ecommerce-app' in this case) in another terminal to restart the crashed service.

**Database models:**
![image](backend%20test%20model.drawio.png)

### Testing ⚙️

### Autores ✒️

* **Autor:** Agustin Tafura, agustintafura@gmail.com
