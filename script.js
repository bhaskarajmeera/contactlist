/* slide to go to apps screen    */


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