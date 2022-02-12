const errorMsg=document.querySelectorAll("small")
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
const errorImg=document.querySelectorAll(".image")
const form=document.querySelector(".sign-up")
const input=document.querySelectorAll("input")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
   input.forEach((i)=>{
    if(i.type=="email"){
        if(!isValidEmail(i.value)){
            i.nextElementSibling.classList.add("active")
            i.nextElementSibling.nextElementSibling.classList.add("active")
            i.style.border="2.5px solid hsl(0, 100%, 74%)"
            i.placeholder=" "
        }
        else{
            i.nextElementSibling.classList.remove("active")
            i.nextElementSibling.nextElementSibling.classList.remove("active")
            i.style.border="1px solid hsl(246, 25%, 77%)"
        }
    } 
    if(i.value.length===0){
        
            i.nextElementSibling.classList.add("active")
            i.nextElementSibling.nextElementSibling.classList.add("active")
            i.style.border="2.5px solid hsl(0, 100%, 74%)"
            i.placeholder=" "
        
    }
    else{
        i.nextElementSibling.classList.remove("active")
        i.nextElementSibling.nextElementSibling.classList.remove("active")
        i.style.border="1px solid hsl(246, 25%, 77%)"
    }
   })
})