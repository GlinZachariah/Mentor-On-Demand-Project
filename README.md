# Mentor-On-Demand-Project
Mentor On Demand Project (LearnApp)

Course Management System 

![Completed](https://img.shields.io/badge/status-completed-green)

 ![Angular](https://img.shields.io/badge/Front%20End-Angular-red)  ![Spring](https://img.shields.io/badge/Middleware-SpringBoot-green)  ![MySQL](https://img.shields.io/badge/Back%20End-MySQL-blue)

# Contents
- Angular Project
- Spring Boot (Microservices) 
   - Server
   - User
   - Mentor
   - Admin
   
# Tools 
- Angular 8
- Maven 2.1.9 (Spring Boot)
- Java 8
- MySQL 5.7+

# Project Setup

## Angular Setup
- Run `npm install` in Angular folder to install all dependencies.
- Run `ng serve --proxy-config proxy.conf.json` to serve the Angular Project 

#### NB: (Proxy Configuration : `proxy.conf.json` to default microservice server set to `htttp://localhost:8761/`)

## Spring Boot Setup
- Run each microservice starting with `learnapp-server` first.
- It can be run using CLI or IDE :
    - To run using CLI
        - Run `mvnw install` within each folder to install dependencies.
        - configure msql and create databases with given names.
        - Run`mvnw spring-boot:run` in each folder to run the spring boot application via CLI.
     
     - To run using IDE
        - Import as Maven project and install dependencies.
        - configure msql and create databases with given names.
        - Run the application.
        

## Default Configuration
  
   | microservice | port| application_name | databases|
   |--------------|------|-----------------|----------|
   |learnapp-server |`htttp://localhost:8761/`|learnapp-server| |
   |learnapp-mentor-client |`htttp://localhost:8092/`|mentor|learnapp_mentor|
   |leanapp-user-client|`htttp://localhost:8091/`|users|learnapp_user|
   |leanapp-admin-client|`htttp://localhost:8093/`|admin|learnapp_admin|
   
   ##### Database username:`root`
   ##### Database password:`root`


