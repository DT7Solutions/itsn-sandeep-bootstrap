
let contactform = document.querySelector('#contactForm1');
let inputs = document.querySelectorAll('input')
let textariea = document.querySelector('textarea')



contactform.addEventListener('submit', function(event){
  event.preventDefault()
  debugger
  let fname = document.myform.name.value;
  
  let x = document.myform.email.value;
  let atposition =x.indexOf("@");
  let dotposition = x.lastIndexOf(".");
  let subject = document.myform.subject.value;
  // let message = document.myform.message.value;
  let message = document.querySelector('textarea').value
  debugger

  

  if (fname == "" || fname == null) {
    document.getElementById("demo").innerHTML = "Please enter your name";

  }
  else {
    document.getElementById("demo").innerHTML = "";
    
  }

  if (x == "" || x == null) {
    document.getElementById("demo1").innerHTML = "Please enter your email address";
    
  }



  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    document.getElementById("demo1").innerHTML = "Please enter a valid email address";
    
  }
else {
    document.getElementById("demo1").innerHTML = "";
  }

  if (subject == "" ||subject == null) {
    document.getElementById("demo3").innerHTML = "Please enter your subject";

  }
  else {
    document.getElementById("demo3").innerHTML = "";
  }

  if (message == "" || message == null) {
    debugger;
    alert(message)
    document.getElementById("demo2").innerHTML = "Please enter a message";
  
  }
  else {
   
    document.getElementById("demo2").innerHTML = "";

    
    alert(message)
  }
  // c

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "itsnsandeep123@gmail.com",
    Password : "4E28AA336E9DD7F0409536F7ED9D28631FEE",
    To : 'admin@itsnsandeep.com',
    From : "itsnsandeep123@gmail.com",
    Subject : subject,
    Body :"Name:"+ fname +"<br/> For email:" + x +"<br/> Subject:" + subject +"<br/> Message:"
    + message 
}).then(
  message => alert(message)
);

        

}); 






// // jscode for email sending
// function valid(){
// 	debugger
// let name=document.myform.name.value;

// if (name==""||name==null){
// 	document.getElementById("demo").innerHTML="PLEASE ENTER YOUR NAME";
// 	return false;}
// }













// // event.preventDefault();
// // debugger;
// // $.ajax({
// //   type:'POST',
// //   url:'/',
// //   data:{
// //     name:$("#name").val(),
// //     email:$("#email").val(),
// //     message:$("#message").val(),
// //     csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
// //   },
// //   success: function(data) {

// //     swal("success", "Your Message was sending successfully ", "success");
  
// //   },
// //   error: function(xhr, status, error) {
// //     swal("error!", "Please Try Agian", "error");
  
// //   },
// //   dataType: 'text'
// // })
// // inputs.forEach(input => input.value = '');













// function hello(){
//     // event.preventdefult();
//     debugger
//     let fname = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let subject = document.querySelector('#subject').value;
//     let message = document.querySelector('#message').value;
    
//     // let mes = "Name:" + fname + "<br/> For email:" +  email + "<br/> Subject:" + subject + "<br/> Message:" + message 
     
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "itsnsandeep123@gmail.com",
//         Password : "4E28AA336E9DD7F0409536F7ED9D28631FEE",
//         To : 'priya4241honey@gmail.com',
//         From : "itsnsandeep123@gmail.com",
//         Subject : subject,
//         Body : "Name:"+ fname +"<br/> For email:" + email +"<br/> Subject:" + subject +"<br/> Message:"
//         + message 
//     }).then(
//       alert("sucessfully sending email!")
//     );
    
// }
  
// // // textariea.value =''




// function hello(){
//     // event.preventdefult();
//     let fname = document.querySelector('#name').value;
//     let x = document.querySelector('#email').value;
    
//     let subject = document.querySelector('#subject').value;
//     let message = document.querySelector('#message').value;

 
     
//       // let subject = document.getElementById("subject").value;
//       // let message = document.getElementById("message").value;
       
     
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "itsnsandeep123@gmail.com",
//         Password : "4E28AA336E9DD7F0409536F7ED9D28631FEE",
//         To : 'priya4241honey@gmail.com',
//         From : "itsnsandeep123@gmail.com",
//         Subject : "subject",
//         Body : "Name:"+ fname +"<br/> For email:" + x +"<br/> Subject:" + subject +"<br/> Message:"
//         //         + message
//     }).then(
//       message => alert(message)
//     );
    
// }
  