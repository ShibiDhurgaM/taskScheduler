
const Task=[
    
    {
        TaskName:'Learning javascript',
        dueDate:'19-Aug',
        priority:'high',
        completed:'true'
    },
    {
        TaskName:'Interview',
        dueDate:'2-Oct',
        priority:'high',
        completed:'false'
    },
    {
        TaskName:'Workout',
        dueDate:'11-Sept',
        priority:'medium',
        completed:'true'
    },
    {
        TaskName:'Learning Figma',
        dueDate:'20-Oct',
        priority:'high',
        completed:'false'
    },
{
    TaskName:'Watching movie',
        dueDate:'15-sept',
        priority:'low',
        completed:'false'
}];
function getSummary()
{

  document.write("Your Scheduled Tasks:"+"<br/>");
 document.write("<br/>");
     for (let i = 0; i < Task.length; i++) {
         document.write("Your task: " + Task[i].TaskName+ "<br/>"+"Due Date:" + Task[i].dueDate + "<br/>"+"Priority: " + Task[i].priority+"<br/>"+"Completion Status:"+Task[i].completed+"<br/>");
         document.write("<br/>");
     }
 
 
    
 }
 
 function  CompletionStatus()
   {
    
    document.write("Completion status of our task: "+"<br/>");
    document.write("<br/>");
    for (let i = 0; i < Task.length; i++)
    {
       if(Task[i].completed==="true")
       {
       
           document.write("Your task "+Task[i].TaskName+" is already completed"+"<br/>");
           document.write("<br/>");
       }
       else
       {
        document.write("Your task "+Task[i].TaskName+" is yet to be completed" +"<br/>");
        document.write("<br/>");
       }
   }
}
let taskList=[];

for(let i=0;i<Task.length;i++)
{
    taskList[i]=Task[i];
    
}
function addTask()
{
 let n=prompt("Enter no of tasks to be added: ");
    for(let i=0;i<n;i++)
    {
    taskList.push({TaskName: prompt("Task name"), dueDate: prompt("Due date"), priority: prompt("Task priority"), completed: prompt("Task status")});
   alert('Task Added');
    }
    document.write("After adding a task"+"<br/>")
    document.write("<br/>");
    taskList.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"<br/>"}`);
           
        }
        document.write("<br/>");
       
    })
    
}

 
function deleteTask()
{
  

 taskList.pop();
 document.write('After deleting a task '+"<br/>");

 document.write("<br/>");
 //document.write(JSON.stringify(library));
 taskList.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
 })
 
}

function addTaskInfront()
{
    let n=prompt("Enter no of tasks to be added:");
    for(let i=0;i<n;i++){
    taskList. unshift({TaskName: prompt("Task name"), dueDate: prompt("Due date"), priority: prompt("Task priority"), completed: prompt("Task Status")});
    alert('Task added');
    }
    document.write("After adding task at front"+"<br/>");
    document.write("<br/>");
    taskList.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"<br/>"}`);
           
        }
        document.write("<br/>");
       
    })
    
}
function deleteFirstTask()
{
 taskList.shift();
document.write('After deleting first task'+"<br/>");
document.write("<br/>");
taskList.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})
}
function saveTask()
{
    window.localStorage.setItem('Python', 'Save tasks to local storage'+'<br/>');
    window.localStorage.setItem('result', JSON.stringify(Task));
    let data1 = window.localStorage.getItem('Python');
    let data2 = window.localStorage.getItem('result');
   
   document.write(data1);
   document.write("<br/>");
   document.write(data2);
   document.write("<br/>");
}

