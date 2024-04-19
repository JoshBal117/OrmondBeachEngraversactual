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
