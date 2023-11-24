// fill in javascript code here
const form = document.querySelector("form");
const tbody =document.querySelector("tbody");
const table = document.querySelector("table");

function onAddWebsite(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const employeeID = document.getElementById("employeeID").value;
    const department = document.getElementById("department").value;
    const exp = document.getElementById("exp").value;
    const email = document.getElementById("email").value;
    const mbl = document.getElementById("mbl").value;
// create function to know role on exp base
    function role(){
        if(Number(exp > 5)){
            return "Senior"
        }
        else if(Number(exp) <= 1){
            return "Fresher"
        }
        else{
            return "Junior"    
        }
    }
    const Role = role(exp)
// create html table for show output
    tbody.innerHTML += `
    <tr>
        <th>${name}</th>
        <th>${employeeID}</th>
        <th>${department}</th>
        <th>${exp}</th>
        <th>${email}</th>
        <th>${mbl}</th>
        <th>${Role}</th>
        <th><button class="delete_btn" >Delete</button></th>
    </tr>
    `
}
// create delete row function
function onDelete(e){
    if (!e.target.classList.contains("delete_btn")) {
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}
form.addEventListener("submit" , onAddWebsite);
table.addEventListener("click" , onDelete);