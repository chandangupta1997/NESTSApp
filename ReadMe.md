//Viamagus - Node JS Developer Challenge for Chandan Gupta
// NESTS Apps with the CRUD (Create,Read,upadate,delete ) functionality of task 
// task  must have a assignee (i have also add assignedBy)




// Packages used 
{
  "dependencies": {
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.6.5",
    "nodemon": "^2.0.20"
  }


mongoose for mongoDB

json web token for authentication and authrisation  


Task 1:-Ability to create multiple tasks with properties, id, description,due_date, assignee, status, etc.

Task 2 :- Ability to add a team with various team members  
Ans :-
this has been handles through userModel  as we have a section 
of TeamName in userModel 

so user having same teamName will be in Same Team 

 teamName:{
        type:String

    },



Task 3:- Ability to assign a task to a team member
solution :- while assigning you can add their unique userId or if you want to assign by Name then we will search in database for his/her id and proceed 













task 4  :-Ability to load all tasks with the assignee


Solution :-  assigned Task field in userModel   
as assignedTask:[]





Task 5 : Ability to change the status/properties of task

ans: status:{
        type:Boolean,
        required:true
    }


task 6:-Use Typeform for ORM

ans:- Object relational Mapping is done via mongoose model 



task 7 :- Use Mysql/Mssql/Mongo for storing the tasks/team info

ans:- used MongoDb


task 8 :- All the APIs need to be authenticated with a bearer token



Hardcoded user credentials can be used to generate jwt token ( use .env for storing creds)

ans : apis are protected with the authentication and authorisation using jwt. and .env  file is created to prevent sensitive information 




{
    "title": " this is task 1",
    "description": " this is description of task 1 ",
    "assignedDate": "2021-12-31T18:30:00.000Z",
    "dueDate": "2022-05-01T18:30:00.000Z",
    "assignee": "63414c5ed3dd90cbd3a56e08",
    "assignedTo": "63414cd4d3dd90cbd3a56e0a",
    "status": false,
    "_id": "63414d67190705de854cfbbf",
    "__v": 0
}




{
    "_id": "63438830fa00c83e60392d84",
    "fName": "Chandan  i  ",
    "lName": "gupta io ",
    "age": 21,
    "teamName": "junior ",
    "assignedTask": [
        "",
        {
            "title": " this is task 1",
            "description": " this is description of task 1 ",
            "assignedDate": "2021-12-31T18:30:00.000Z",
            "dueDate": "2022-05-01T18:30:00.000Z",
            "assignee": "63438830fa00c83e60392d84",
            "assignedBy": "634382d791427b04e3638212",
            "status": false,
            "_id": "6343885efa00c83e60392d87",
            "__v": 0
        }
    ],
    "__v": 0
}
