'use strict';

import {onEvent, select, selectAll, create, log} from './utils.js';

import { User } from './User.js';

import { Subscriber } from './Subscriber.js';
/*****************************************
        Variables
*****************************************/

const postText = select('.content-input');
const postBtn = select('.post-btn');
const parentPostContent = select('.post');
const errorOutput = select('.error-output');

/*****************************************
        Creating new User
*****************************************/

const userInfo = select('.user-info');
const user = new User(34369, 'Enjae Antonio', 'EnjaeAC', 'enjaeantonio@gmail.com');

        userInfo.innerHTML = `
                <div class="user-wrapper">
                        <h3><i class="fa-solid fa-user"></i>Profile</h3>
                        <p><span>ID: </span>${user.id}</p>
                        <p><span>Name: </span>${user.name}</p>
                        <p><span>User Name: </span>${user.userName}</p>
                        <p><span>Email: </span>${user.email}</p>
                </div>
        `;

/*****************************************
        Creating new Subscriber
*****************************************/
const subInfo = select('.sub-info');
const sub = new Subscriber(['Shoe Market'], ['Keewatin Community Group'], 'False');

        subInfo.innerHTML = `
                <div class="sub-wrapper">
                        <h3><i class="fa-solid fa-check"></i>Subscription</h3>
                        <p><span>Pages: </span>${sub.pages}</p>
                        <p><span>Groups: </span>${sub.groups}</p>
                        <p><span>Monetized: </span>${sub.canMonetize}</p>
                </div>
        `;


/*****************************************
        Post Content
*****************************************/

function userPost(){

        // Variables for function
        let userPost = postText.value;
        let todaysDate = new Date();
        let img = select('.avatar').innerHTML;
        const selectedFile = document.getElementById('file-upload');
   
        // Validating empty fields
        if (userPost == '' && selectedFile.value == '') {
                errorOutput.innerText = 'Fields are empty';
        }  else if (selectedFile.value) {
                
                // Obtaining path of selected file
                let url = URL.createObjectURL(selectedFile.files[0]);
                errorOutput.innerText = '';

                // Creating div element
                let newDiv = create('div');
                newDiv.className = 'content'

                newDiv.innerHTML = `
                        <div class="content-header">
                                ${img}
                                <h1>${user.name}</h1>
                                <p>${todaysDate.toDateString()}</p>
                        </div>
                        <p class="user-output">${postText.value}</p>
                        <img class="user-img" src="${url}"/>
                        `;

                // Prepening and also resetting values
                parentPostContent.prepend(newDiv);
                postText.value = '';
                document.getElementById('file-upload').value = '';
                infoArea.textContent = '';

        } else {

                // If a picture is not selected, text box will still post
                // (I get a bug if a picture is not selected)
                errorOutput.innerText = '';
                let newDiv = create('div');
                newDiv.className = 'content'

                newDiv.innerHTML = `
                        <div class="content-header">
                                ${img}
                                <h1>${user.name}</h1>
                                <p>${todaysDate.toDateString()}</p>
                        </div>
                        <p class="user-output">${postText.value}</p>
                        `;

                parentPostContent.prepend(newDiv);
                postText.value = '';

        }
                
        

}       

/*****************************************
        Show file name
*****************************************/

let input = document.getElementById( 'file-upload' );
let infoArea = document.getElementById( 'file-upload-filename' );

input.addEventListener( 'change', showFileName );

function showFileName( event ) {
  
  input = event.srcElement;
  let fileName = input.files[0].name;
  infoArea.textContent =  fileName;
}

/*****************************************
        Display Profile
*****************************************/
let userInfoBtn = select('.info-btn')
onEvent('click', userInfoBtn, function() {
        let x = select('.user-sub-info');
        if (x.style.display === "block") {
          x.style.display = "none";
        } else 
          x.style.display = "block";
      });


/*****************************************
        OnEvent handler
*****************************************/
onEvent('click', postBtn, function(){
        userPost();
});