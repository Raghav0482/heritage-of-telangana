function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}



function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email Invalid','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}


function validateForm() {
  if (!validateName() || !validateEmail()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
  }
  else {
    
  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}



function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat)){
    alert("Thank You for Subscribing our Newsletter.");
    document.form1.text1.focus();
  }
  else{
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
  }
}

mybutton = document.getElementById("myBtn")
            // when the user scrolls down 20px  from top of the document, show the button
            window.onscroll = function () { scrollFunction() }
            function scrollFunction() {
                  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                        mybutton.style.display = "block";
                  } else {
                        mybutton.style.display = "none"
                  }

            }

            // when user click on the button, scroll to the top of the document 
            function myFunction() {
                  document.body.scrollTop = 0; // for safari
                  document.documentElement.scrollTop = 0;// for chrome, firefox,opera,internet explorer
            }