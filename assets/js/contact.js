
let contactform = document.querySelector('#contactForm1');
let inputs = document.querySelectorAll('input')
let textariea = document.querySelector('textarea')



contactform.addEventListener('submit', function (event) {
  event.preventDefault();
  debugger;
  let fname = document.myform.name.value;
  let x = document.myform.email.value;
  let atposition = x.indexOf("@");
  let dotposition = x.lastIndexOf(".");
  let subject = document.myform.subject.value;
  let message = document.querySelector('textarea').value

  if (fname == "" || fname == null) {
    document.getElementById("demo").innerHTML = "Please enter your name";
    return false;
  }
  else {
    document.getElementById("demo").innerHTML = "";
  }

  if (x == "" || x == null) {
    document.getElementById("demo1").innerHTML = "Please enter your email address";
    return false;
  }

  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    document.getElementById("demo1").innerHTML = "Please enter a valid email address";
    return false;
  }
  else {
    document.getElementById("demo1").innerHTML = "";
  }

  if (subject == "" || subject == null) {
    document.getElementById("demo3").innerHTML = "Please enter your subject";
    return false;
  }
  else {
    document.getElementById("demo3").innerHTML = "";
  }

  if (message == "" || message == null) {
    document.getElementById("demo2").innerHTML = "Please enter a message";
    return false;
  }
  else {
    document.getElementById("demo2").innerHTML = "";
  }


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "itsnsandeep123@gmail.com",
    Password: "4E28AA336E9DD7F0409536F7ED9D28631FEE",
    To: 'admin@itsnsandeep.com',
    From: "itsnsandeep123@gmail.com",
    Subject: subject,
    Body: "Name:" + fname + "<br/> For email:" + x + "<br/> Subject:" + subject + "<br/> Message:"
      + message
  }).then(
  alert("Sending email successfully....")
  );



});



