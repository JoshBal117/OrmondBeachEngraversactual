// The is will be the JS for the backbone of the website
//unless another option or a better version is created//
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});




const pre = document.getElementById('pre-btn')
const nxt = document.getElementById('nxt-btn')
const list = document.getElementById('item-list')
const itemWidth = 150
const padding = 10

pre.addEventListener('click', () => {
    list.scrollLeft -= (itemWidth + padding)
})
nxt.addEventListener('click',()=>{
    list.scrollLeft += (itemWidth + padding)
})




function sendMessageToEmail() {
  var emailAddress = "recipient@example.com";
  var subject = "Message from Website";
  var body = "Write your message here.";

  var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
  // Open default email client with pre-filled email
  window.location.href = mailtoLink;
}



const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: $(mess.value}<br>';

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == 'OK') {
      Swal.fire({
        title:"Success!",
        text: "Message sent successfully",
        icon: 'success'
      }); 
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll('.items');

  for (const item of items) {
      if (item.value == "") {
          item.classList.add("error");
          item.parentElement.classList.add("error");
      }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  //sendEmail();
}); 