//destrcutre object

let employees = {
    name:"Smith Devid",
    email:"smithdevid@gmail.com",
    skills:["Java", "SQL", "Python", "Azure"],
    role:[
        {company:"wipro", title:"Architecht"},
        {company:"LTS", title:"Analyst"}
    ]
};

//Q1. print last 3 skills of employees  ... is read as spread operator used to
// copy array
let _skills = [...employees.skills];
_skills[0]="A";
_skills[1]="B";
_skills[2]="D";
_skills[3]="E";

console.log(employees.skills);

