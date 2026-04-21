/* slide to go to apps screen    */
const apiEP ="https://randomuser.me/api?results=2";
let userList = [];
const slider=document.getElementById("mySlider");
slider.addEventListener('change',(e)=>{
    const {value}=e.target;
    console.log(value);
    const label=document.getElementById("label");

    if(value>70){
label.textContent = "";
displayAppScreen();
    }else{
        label.textContent = "slide To Unlock";
    }
});
/* hide home screen */
const displayAppScreen=()=>{
document.querySelector(".homeScreen").remove();
/* show appps screen  */
document.querySelector(".appScreen").style.display = "block";

};

/* rest full api usage */
const fetchUsers= async(url)=>{
/* fetch user */

/* promise method */

/* aysnc await */
const response= await fetch(url);
const data = await response.json();
userList = data.results;
console.log(userList);

/* hide spinner */
document.querySelector(".showSpinner").style.display ="none";

/* show the user details */


};
fetchUsers(apiEP);