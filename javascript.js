const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit' , (e) =>{
    let messages = []
    
    if(password.value === "12345678" && name.value === "vedprakashp615@gmail.com"){
      messages.push("sucessfull")
      window.location.href = "details.html"
    }


    if(messages.length > 0){
        e.preventDefault()   
        errorElement.innerHTML = messages.join(',')
    }
})
