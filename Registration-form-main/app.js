// //Database connectivity code
// const submit = document.querySelector('#Next');

// const savelead = async () =>{
//     let PatientName = document.getElementById("Name").value
//     let Age = document.getElementById("Age").value
//     let Mobile = document.getElementById("Mobile").value
//     let PatientOccupation = document.getElementById("Occupation").value
   
//     //GET the data on console
//     let response = await fetch('http://localhost:8090/lead/getLeads');
//     //POST the data to our database
//     let response2 = await fetch('http://localhost:8090/lead/save',{
//         method : 'POST' ,
//         headers : {
//             'Accept' : 'application/json',
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify({
//             name : clientName,
//             email: email,
//             mobile: mobile,
//             occupation: occupation
//         })
//     });
//     console.log(response)
//    console.log(response2)
//    //to clear the form
//    document.getElementById("myForm").reset();
// }


// submit.addEventListener('click',savelead);


function submitevent(){
    document.write
}


function scrollUp(){
    const scrollUp = document.getElementById('scroll-top');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)