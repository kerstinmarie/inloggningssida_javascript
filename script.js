"use strict";
// Variabler och händelsehanterare
const name = "test";
const password = "1234";
let headerDiv = document.getElementById("headerDiv");
let mainDiv = document.getElementById("mainDiv");
let inputName = document.getElementById("name");
let inputPassword = document.getElementById("password");
window.onload = init;

//Start-funktion
function init(){
    //console.log("Initierar....");
    if(localStorage.getItem("userName") !== null){
        // Det som ska hända om det finns ett sparat värde
        console.log("localstorage 1");
        console.log(localStorage);
        displayWelcomeView();
    } else {
        displayStartView();
    }
}

// Kontrollerar om korrekt inlogging 
function checkLogin(){
    console.log("Kontrollerar användarnam och lösenord");
    inputName = document.getElementById("name").value;
    inputPassword = document.getElementById("password").value;
    //console.log(inputName);
    //console.log(inputPassword);
     // Kontrollerar att både användarnamn och lösenord är korrekt
    if(inputName === name && inputPassword === password){
        console.log("Inloggad");
        // Om korrekt sätts localStorage
        setLocalStorage();
        displayWelcomeView();
    } else{
        console.log("Ej inloggad");
        displayErrorView();
    }
}


// Sätter localstorage
function setLocalStorage(){
    //console.log("Sätter localstorage");
    let userName = document.getElementById("name").value;
    console.log("click sparar namn", userName);
    if (userName !== null && userName !== "" ) {
        localStorage.setItem("userName", userName);
        console.log(localStorage);
    } else {
        console.log("en tom sträng");
    }
}


// Skapar ett formulär för inloggning
function createLoginForm(){
    //console.log("Skapar formulär för att logga in");
    headerDiv = document.getElementById("headerDiv");
let loginDiv = document.createElement("div");
    loginDiv.setAttribute("id", "loginDiv");

let inputName = document.createElement("input");
let labelName = document.createElement("label");
    labelName.setAttribute("for", "name");
    labelName.setAttribute("class", "name");
let labelNameText = document.createTextNode("Användarnamn:");
    labelName.appendChild(labelNameText);
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("placeholder", " Fyll i ditt användarnamn");
    loginDiv.appendChild(labelName);
    loginDiv.appendChild(inputName);

let inputPassword = document.createElement("input");
let labelPassword = document.createElement("label");
    labelPassword.setAttribute("for", "password");
    labelPassword.setAttribute("class", "password");
let labelPasswordText = document.createTextNode("Lösenord:");
    labelPassword.appendChild(labelPasswordText);
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "password");
    inputPassword.setAttribute("name", "password");
    inputPassword.setAttribute("placeholder", " Fyll i ditt lösenord");
    loginDiv.appendChild(labelPassword);
    loginDiv.appendChild(inputPassword);

let loginButton = document.createElement("button");
let loginButtonText = document.createTextNode("Logga in");
    loginButton.setAttribute("id", "loginButton" );
    loginButton.appendChild(loginButtonText); 
    loginDiv.appendChild(loginButton);
    headerDiv.innerHTML = " ";
    headerDiv.appendChild(loginDiv)
    //console.log(loginDiv);

    loginButton.addEventListener("click", function() {
        //console.log("click"); 
        // Kallar på funtionen checkLogin 
        // för att kontrollera om korrekt inlogging 
        checkLogin();
    });
}


// Skapar meddelandet på startsidan
function createStartMessage(){
    console.log("Skapar meddelande på startsidan");
    mainDiv = document.getElementById("mainDiv");
    let startDiv = document.createElement("div"); 
    let startHeading = document.createElement("h2"); 
    let startText = document.createTextNode("Välkommen till vår sida - ej inloggad!");
        startDiv.setAttribute("id", "startDiv");
        startDiv.appendChild(startHeading); 
        startHeading.appendChild(startText);
    mainDiv.innerHTML = " ";
        mainDiv.appendChild(startDiv);
        //console.log(startDiv);
}


// Skapar logga ut knapp som också raderar localstorage
function createLogoutButton(){
    console.log("Skapar logga ut knapp");
let logoutDiv = document.createElement("div"); 
let logoutButton = document.createElement("button");
let logoutButtonText = document.createTextNode("Logga ut");
    logoutDiv.setAttribute("id", "logoutDiv");
    logoutButton.setAttribute("id", "logoutButton");
    logoutButton.appendChild(logoutButtonText); 
    logoutDiv.appendChild(logoutButton);
    headerDiv.innerHTML = " ";
    headerDiv.appendChild(logoutDiv);
    //console.log(logoutDiv);

    logoutButton.addEventListener("click", function() {
        //console.log("click"); 
        // Raderar localstorage
        localStorage.clear();
        console.log(localStorage);
        // Kallar på funtionen som visar startvyn
        displayStartView();
    });
}


// Skapar välkomstmeddelande till användaren "test"
function createWelcomeMessage(){
    console.log("Skapar välkomstmeddelande");
    mainDiv = document.getElementById("mainDiv");
    let welcomeDiv = document.createElement("div"); 
    let welcomeHeading = document.createElement("h2"); 
    let welcomeText = document.createTextNode("Välkommen " + name + "!");
        welcomeDiv.setAttribute("id", "welcomeDiv");
        welcomeDiv.appendChild(welcomeHeading); // Append <p> to <div>
        welcomeHeading.appendChild(welcomeText);
        mainDiv.innerHTML = " ";
        mainDiv.appendChild(welcomeDiv);
        //console.log(welcomeDiv);
}


//Skapar felmeddelande vid felaktigt användarnamn eller lösenord
function createErrorMessage(){
    console.log("Skapar felmeddelande");
    mainDiv = document.getElementById("mainDiv");
    let errorDiv = document.createElement("div"); 
    let errorPara = document.createElement("p"); 
    let errorText = document.createTextNode("Fel användarnamn eller lösenord! Försök igen.");
        errorDiv.setAttribute("id", "errorDiv");
        errorDiv.appendChild(errorPara); 
        errorPara.appendChild(errorText);
    let errorParaNext = document.createElement("p"); 
    let errorTextNext = document.createTextNode("Har du glömt användarnamn eller lösenord?");
        errorDiv.appendChild(errorParaNext); 
        errorParaNext.appendChild(errorTextNext);
        mainDiv.innerHTML = " ";
        mainDiv.appendChild(errorDiv);
        //console.log(errorDiv);    
}


//Visar vyn på startsidan
function displayStartView(){
    //console.log("Visar loggin formulär och startmeddelande");
    // Visar formulär för att logga in
    createLoginForm();
    // Visar startmeddelande
    createStartMessage();
}

//Visar vyn när användaren är inloggad
function displayWelcomeView(){
    //console.log("Visar logga ut knapp och välkomstmeddelande");
    // Visar logga ut-knapp 
    createLogoutButton();
    // Visar välkomstmeddelande 
    createWelcomeMessage();
}

// Visar vyn med felmeddelande
function displayErrorView(){
    //console.log("Visar loggin formulär och felmeddelande");
   // Visar förmulär för att logga in 
   createLoginForm();
   // Visar felmeddelande
   createErrorMessage()
}

