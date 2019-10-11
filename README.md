# Mentor-On-Demand-Project
Mentor On Demand Project (LearnApp)

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
        - Run`mvnw spring-boot:run` in each folder to run the spring boot application via CLI.
     
     - To run using IDE
        - Import as Maven project and install dependencies.
        - Run the application.
        
  #### Default Configuration
   | microservice | port| application_name | 
   |--------------|------|-----------------|
   |mentor |`htttp://localhost:8761/`|mentor|




