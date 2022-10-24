const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
} 

if(close){
    close.addEventListener('click' , ()=>{
        nav.classList.remove('active');
    })
    
    
}
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students =  JSON.parse(localStorage.getItem("students")) ||  [];
      
const addstudent = (name , age , roll) => {

    students.push({
        name: name,
        age : age,
        roll : roll,
    })
     localStorage.setItem("students",JSON.stringify(students));

    return{name , age , roll};
};


 const createStudentElement = ({name , age , roll}) => {
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2"); 
    const studentAge = document.createElement("p"); 
    const studentRoll = document.createElement("p"); 

    studentName.innerText = " Name:- " + name;
    studentAge.innerText = "Email:- " + age;
    studentRoll.innerText = "Message:- " + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length == 0 ? "none" : "flex";
 };


 students.forEach(createStudentElement);

 studentForm.onsubmit = ()=>{
    
    const newstudent = addstudent(nameInput.value,ageInput.value,rollInput.value);

     createStudentElement(newstudent);

     nameInput.value = "";
     ageInput.value = "";
     rollInput.value = "";
 }


  