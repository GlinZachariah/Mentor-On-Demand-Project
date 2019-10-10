# Mentor on Demand (UX Phase 2)

## Included files
  -  Screenshot (+ Wireframe)
  -  Source Code for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Dependency files
Run `npm install` within the directory to install dependencies before testing.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Instructions (to run)
  - Start the development server initially to run the application.
  
  - ### For User (without Logging In): 
  
    -  User can search for Training based on the technology and date and preferred Time slots. On clicking the propose trainer button on the selection of the result. The user will be redirected to the signIn page.
    -  Or can signIn as `USER` , using the temporary credentials username :`user@learnapp` and password :`user`. 
    -  Or can signIn as `MENTOR` , using the temporary credentials username :`mentor@learnapp` and password :`mentor`
    -  To signIn as `ADMIN` , navigate to `/admin/signIn` and click 'submit'.
    -  User can also signUp as new Trainee or Trainer using the corresponding registration links.
  
  
  - ### For User (Logged In):
  
    - User upon successful signIn will be redirected to the profile page where he can edit the existing credentials, save card details or seek support.
    - He can also browse through the trainings and can propose the training.
    - He can view the completed trainings.
    - He can view the trainings in progress.
  
  - ### For Mentor:
  
    - He can view his profile and edit the details.
    - He can edit the skills.
    - He can view the history of the courses (apporve/reject course request).
    - He can view trainings details of the courses under him.
  
  - ### For Admin:
  
    - He can edit the technologies.
    - He can edit the commission of all the available courses.
    - He can block/unblock user and mentor.
    - He can generate reports for each trainer with the details of trainees enrolled and their progress and payments.
    
  

