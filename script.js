/* slide to go to apps screen    */
const apiEP ="https://randomuser.me/api?results=5";
let userList = [];
const slider=document.getElementById("mySlider");
slider.addEventListener('change',(e)=>{
    const {value}=e.target;
    
    const label=document.getElementById("label");

    if(value>70){
label.textContent = "";
displayAppScreen();
    }
    else{
        label.textContent = "slide To Unlock";
    }
});
/* hide home screen */
const displayAppScreen=()=>{
document.querySelector(".homeScreen").remove();
/* show appps screen  */
document.querySelector(".appScreen").style.display = "block";

};
const displayContactScreen=()=>{
document.querySelector(".appScreen").remove();
/* show contact screen  */
document.querySelector(".contactListScreen").style.display = "block";
fetchUsers(apiEP);
};

/* rest full api usage */
const fetchUsers= async(url)=>{
/* aysnc await */
const response= await fetch(url);
const data = await response.json();
userList = data.results;
/* hide spinner */
document.querySelector(".showSpinner").style.display ="none";
console.log(data);
/* show the user details */
displayContactList(userList);
};
/* display Contact List */
const displayContactList = (userList)=>{
                console.log(userList);
    document.getElementById("list").style.display = "block";
    let str ="";
  userList.map((item,i)=>{
    str += `<div class="accordion-item">
    <h2 class="accordion-header">
    <button class="accordion-button collapsed" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#collapse${i}" 
    aria-expanded="false" 
    aria-controls="collapse${i}">
    <img src="${item.picture.large}" 
    alt="" width="50px" 
    class="rounded-circle"/>
    <div class="ms-2">
    <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}
    </div>
    <small>${item.location.street.number} ${item.location.street.name}</small>
    </div>
    </button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body d-flex flex-column align-items-center">
       <img src="${item.picture.large}" alt="" width="150px" class="rounded-circle"/> 
       <div>
         <div class="fw-bolder">
            <i class="bi bi-person-circle"></i>${item.name.title} ${item.name.first} ${item.name.last}
         </div>
         <div >
         <a href="tel:${item.cell}" target="_blank">
            <i class="bi bi-phone"></i>${item.cell}</a>
         </div>
         <div >
         <a href="mailto:${item.email}" target="_blank">
            <i class="bi bi-envelope-at"></i> ${item.email}  
         </a>
         </div>
         <div>
         <a href="https://www.bing.com/maps/${item.location.street.number}+${item.location.street.name}+${item.location.city}+${item.location.state}+${item.location.country}" target="_blank">
            <i class="bi bi-geo-alt">
              ${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.state} ${item.location.country}
            </i>
         </a>
         </div>
      </div> 
      </div>
    </div>
  </div>`;
  });
  document.getElementById("userAccordion").innerHTML = str;

  document.getElementById("userCount").innerText = userList.length;
};

/* search contact  */
document.getElementById("search").addEventListener("keyup",(e)=>{
    const {value} =e.target;
    console.log(value);

    const filteredUsers = userList.filter((item)=>{
        const name = (item.name.first + " " + item.name.last).toLowerCase();
return name.includes(value.toLowerCase());
    });

console.log(filteredUsers);
displayContactList(filteredUsers);
});

