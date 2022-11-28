'use strict';

import {onEvent, select, selectAll, create, log} from './utils.js';

import { User } from './User.js';

/*****************************************
        Variables
*****************************************/

const postText = select('.content-input');
const postBtn = select('.post-btn');
const parentPostContent = select('.post')
const errorOutput = select('.error-output')


/*****************************************
        Creating new User
*****************************************/
function newUser(id, name, userName, email) {
    const createUser = new User(id, name, userName, email)
    return createUser
};

/*****************************************
        Post Content
*****************************************/

function userPost(){
        let userPost = postText.value;

        if (userPost == '') {
                errorOutput.innerText = 'Fields are empty'
        } else {

                // Creating content wrapper
                let postContentWrapper = create('div');
                postContentWrapper.className = 'content';
                parentPostContent.prepend(postContentWrapper);

                // Creating profile header
                let postContentHeader = create('div');
                postContentHeader.className = 'content-header';
                postContentWrapper.append(postContentHeader);
                let profilePic = create('img');
                profilePic.src = "./assets/img/gokus.png";
                postContentHeader.append(profilePic);
                let userName = create('h1');
                userName.innerText = 'Enjae Antonio'
                postContentHeader.append(userName)
                let date = create('p');
                date.innerText = 'Nov 28, 2022';
                postContentHeader.append(date)

                // Inputting user content
                let userContent = create('p');
                userContent.className = 'user-output';
                postContentWrapper.append(userContent)

                userContent.innerText = `${postText.value}`
                errorOutput.innerText = '';
        }

}       
    
onEvent('click', postBtn, function(){
        userPost(newUser())
});