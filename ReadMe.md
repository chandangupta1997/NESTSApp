//Viamagus - Node JS Developer Challenge for Chandan Gupta
// NESTS Apps with the CRUD (Create,Read,upadate,delete ) functionality of task 
// task  must have a assignee (i have also add assignedto)




// Packages used 
express 


mongoose for mongoDB


Ability to create multiple tasks with properties, id, description,due_date, assignee, status, etc.

Ability to add a team with various team members  
Ans :-
this has been handles through userModel  as we have a section of TeamName in userModel


Ability to assign a task to a team member
Ans :- while assigning you can add their unique userId or if you want to assign by Name then we will search in database for his/her id and proceed 


Ability to load all tasks with the assignee


ans:-  assigned Task field in userModel   
as assignedTask:[]



Ability to change the status/properties of task

ans: status:{
        type:Boolean,
        required:true
    }


Use Typeform for ORM

Use Mysql/Mssql/Mongo for storing the tasks/team info

All the APIs need to be authenticated with a bearer token

Hardcoded user credentials can be used to generate jwt token ( use .env for storing creds)




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
    "fName": "Deepaika",
    "lName": "Kanwariya",
    "age": 21,
    "teamName": "junior",
    "assignedTasked": [],
    "_id": "63414cd4d3dd90cbd3a56e0a",
    "__v": 0
}