function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const form=document.getElementById('form');
const firstName=document.getElementById('first');
const lastName=document.getElementById('last');
const email=document.getElementById('email');
const birthDate=document.getElementById('birthdate');
const quantity=document.getElementById('quantity');
let term=document.getElementById('checkbox2');
let emailRegex=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
let nameRegex= /^[a-zA-Z\-]+$/;

function sentDenied(input, message){
   const formData =input.parentElement;
  const span =formData.querySelector('span');
  input.style.border="solid 2px red";
  span.innerText=message;
  span.style.color="red";
  span.style.fontSize="15px";
}

function sentPermitted(input){
  const formData =input.parentElement;
  const span =formData.querySelector('span');
  input.style.border="solid 3px lightgreen";
  span.innerText='';
  
}

  
   function  functionFName(){
        if (firstName.value===''){
          sentDenied(firstName, 'Veuillez saissir un prénom');
          return false;
     }else if(nameRegex.test(firstName.value)===false) {
          sentDenied(firstName, 'Veuillee saisir un prénom valid');
          return false; 
        }
      else if(firstName.value.length<2) {
          sentDenied(firstName, 'Veuillez saissir un Prénom de plus 2 caractères');
          return false;
        }
      else{
          sentPermitted(firstName);
          return true;
        }
}
 
 function  functionLName(){
  if (lastName.value===''){
       sentDenied(lastName, 'Veuillez saissir un nom');
       return false;
  }else if(nameRegex.test(lastName.value)===false) {
       sentDenied(lastName, 'Veuillee saisir un nom valid');
       return false; 
     }
   else if(lastName.value.length<2) {
       sentDenied(lastName, 'Veuillez saissir un nom de plus 2 caractères');
       return false;
     }
   else{
       sentPermitted(lastName);
       return true;
     }
}


function  functionEmail(){
   if (email.value===''){
    sentDenied(email, 'Veuillez saissir un email');
    return false;
  }
  else if(emailRegex.test(email.value)===false) {
    sentDenied(email, 'Veuillez saissir un email valid');
    return false;
  } else{
    sentPermitted(email);
    return true;
  }
}

function  functionBirthdate() {
  if(birthDate.value===''){
    sentDenied(birthDate,'Veuillez saisir une date de naissance');
    return false;
  } else{
    sentPermitted(birthDate);
    return true;
  }
}


function  functionQuantity(){ 
  if(quantity.value===''){
  sentDenied(quantity,'Veuillez choisir un nombre');
  return false;
  } else{
  sentPermitted(quantity);
  return true;
  } 
}


function  functionTown(){
    
  let towns=document.querySelectorAll('input[type=radio] ');
  const town=document.getElementById('town');
  for(i=0; i<towns.length; i++){  
    if(towns[i].checked){
      town.innerText="";
      return true;             
  }}   
   town.innerText='Veuillez choisir une ville';
   town.style.color="red";
   return false; 
}

  const condition=document.getElementById('checkbox1');
  const condition1=document.querySelector('.checkbox2-label');
  const span1=document.createElement('span');
  condition.append(span1);
function  functionConditions(){

    if(!condition.checked){
    span1.textContent="veuillez accepter les conditions d'utilisation";
    span1.style.fontSize='20px';
    span1.style.color='red';
    return false;
  }else{
    span1.textContent="";
    
    return true
  }  
}

function validate(){
 if(functionFName()===false){
  return false;
}else  if(functionLName()===false){
  return false;
}else if(functionEmail()===false) {
  return false;
}else if(functionBirthdate()===false){
  return false;
}else if(functionQuantity()===false){
  return false;
}else if (functionTown()===false){
return false;
}else if(functionConditions()===false ){
  return false;
}else{ 
  
  form.remove();
  let modal=document.querySelector('.modal-body');
  let message1=document.createElement('p');
  message1.classList.add('message1-validation');
  message1.textContent='Merci pour voutre réservation';
  modal.appendChild(message1);
  let btnCloseModal=document.createElement('button');
  btnCloseModal.classList.add('btn-submit');
  btnCloseModal.textContent='Fermer';
  modal.appendChild(btnCloseModal);

  btnCloseModal.addEventListener('click',function(){
  modalbg.style.display="none";
});
} 
} 

let closeIt=document.querySelector('.close');
let content=document.querySelector('.content');

function functionClose(){
content.style.display='none';
}

let subscribe=document.querySelector('.modal-btn');
function functionOpen(){
content.style.display='block';
}

