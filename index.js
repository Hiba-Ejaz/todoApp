let editButtonStatus=0;
let cells;
const submitform = document.getElementById("mainform")
submitform.style.display = 'none';
/////OPEN FORM FOR ADDING NEW ITEM////
const openFormBtn=document.getElementsByClassName("addNewItemBtn")[0];
///////listener for opening form on click
openFormBtn.addEventListener('click', () => {
        submitform.style.display = 'block'; 
  });
  /////CANCEL BUTTON////
  const closeFormBtn=document.getElementsByClassName("cancelNewItemBtn")[0];
  ///////listener for opening form on click
  closeFormBtn.addEventListener('click', () => {
        submitform.style.display = 'none';
    });


const marked_status=document.getElementsByClassName("mainform__status")[0];
const obj={title:""};
const td_row1=document.getElementsByClassName("table__row2__col1")[0];
var rowCount=0;
var check=1;
submitform.addEventListener('submit', ((e) => {
e.preventDefault();
console.log("inside submit event");
check=1;
const inputTitle=document.getElementsByClassName("mainform__text")[0].value;
const inputDate=document.getElementsByClassName("mainform__date")[0].value;
const inputStatus=document.getElementsByClassName("mainform__status")[0].value;
const tableBody = document.getElementById("table");
const rows = tableBody.querySelectorAll("tr");
rows.forEach((row) => {
    const cells = row.querySelectorAll("td,th");
console.log(cells[0].textContent)
   if(cells[0].textContent===inputTitle && rowCount>0  && editButtonStatus!=1){
        document.getElementById("mainform__errorMessage").text="Title already exists"; 
        alert("Title already exists");
       submitform.reset(); 
       console.log("value of check",check);
       check=0;
       console.log("value of check2",check);
    }

});
if(editButtonStatus==1){
    cells[0].textContent= document.getElementsByClassName("mainform__text")[0].value;
 cells[1].textContent=document.getElementsByClassName("mainform__date")[0].value;
 cells[2].textContent=document.getElementsByClassName("mainform__status")[0].value;
console.log("edit status update, submit walay ma nahi gaya. wapis ub status 0 kar rahi hoon");
console.log(cells[0].textContent,"errorrr na aana ub");
console.log(cells[1].textContent,"errorrr na aana ub");
console.log(cells[2].textContent,"errorrr na aana ub");
cells={};
editButtonStatus=0;
submitform.style.display = 'none';

 }
    else if(check===1 && editButtonStatus===0){
        if(inputTitle.trim() !== ""){
        const newRow = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = inputTitle;
        newRow.appendChild(titleCell);
        const dateCell = document.createElement("td");
        dateCell.textContent = inputDate;
        newRow.appendChild(dateCell);
        const statusCell = document.createElement("td");
        statusCell.textContent = inputStatus;
        newRow.appendChild(statusCell);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete Item';
        const deleteButtonCell = document.createElement("td");
        deleteButtonCell.appendChild(deleteButton);
        newRow.appendChild(deleteButtonCell);
        deleteButton.addEventListener('click', () => {
        console.log('Button clicked!');
const rowToDelete = deleteButton.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete);
    submitform.reset();
    submitform.style.display = 'none';
    rowCount--;
  });
 const editButton = document.createElement('button');
 editButton.classList.add('editButton');
 editButton.textContent = 'Edit Item';
 const editButtonCell = document.createElement("td");
 editButtonCell.appendChild(editButton);
 newRow.appendChild(editButtonCell);
 editButton.addEventListener('click', () => {
    editButtonStatus=1;
 console.log('Button clicked!');
const rowToEdit = deleteButton.parentNode.parentNode;
console.log("rowToEdit",rowToEdit);
 cells = rowToEdit.querySelectorAll("td");
 
 
submitform.style.display = 'block';
document.getElementsByClassName("mainform__text")[0].value=cells[0].textContent;
document.getElementsByClassName("mainform__date")[0].value=cells[1].textContent;
document.getElementsByClassName("mainform__status")[0].value=cells[2].textContent;
});
        table.appendChild(newRow);
        submitform.style.display = 'none';
        rowCount++;
    }
    else{
        alert("title cannot be empty");
        submitform.reset();
    }
}
submitform.reset();
}));
