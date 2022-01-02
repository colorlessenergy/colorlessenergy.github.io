---
title: lastpad
layout: project
image: /images/lastpad.png
meta: A Progressive Web App that allows you to create, view, edit and delete notes offline and have them be updated and saved as soon as you get back on an internet connection.
description: Full Stack Technologies
permalink: /lastpad
published: true
order: 6
emoji: 😎️
---

### PWA lastpad take notes offline

<p class="project__intro">
 <a href="https://lastpad.herokuapp.com/">visit web app</a>
</p>
<p class="project__intro">
 <a href="https://github.com/colorlessenergy/lastpad">visit Github</a>
</p>
<p>
 <a href="/pdf/lastpad-designs.pdf">PDF of lastpad designs</a>
</p>


<a href="https://lastpad.herokuapp.com/">
   ![PWA lastpad to access notes offline]({{ site.baseurl }}/images/lastpad.png "PWA lastpad to access notes offline")
</a>


## what is this

A progressive web app where you can create, view, edit and delete notes offline and have them be updated and saved as soon as you get back on an internet connection. I designed and developed a REST API with Node and Express that connects to MongoDB using Mongoose. This allowed me to issue CRUD operations from the React frontend. This web app was designed with a mobile first approach in Figma and utilizes React to implement the design.

## how to use

You have to create an account to use this web app to be able to save your notes and have them accessible everywhere you sign in. Also you can look at the [all the designs](/pdf/lastpad-designs.pdf "PDF of lastpad designs"). When you create an account you will be able to view, edit, create and delete your notes offline and online. When the web app is loaded it will prompt you to download it to your device.

If you don't want to create an account you can log in as a guest.


## technologies

<div class="project__skills">
    <span class="project__skill">
        HTML
    </span>
    <span class="project__skill">
        CSS
    </span>
    <span class="project__skill">
        JavaScript
    </span>
    <span class="project__skill">
        React 
    </span>
    <span class="project__skill">
        Redux 
    </span>
    <span class="project__skill">
        Redux-Thunk 
    </span>
    <span class="project__skill">
        Service Worker 
    </span>
    <span class="project__skill">
        Node 
    </span>
    <span class="project__skill">
        JWT for authentication 
    </span>
    <span class="project__skill">
        Express 
    </span>
    <span class="project__skill">
        MongoDB 
    </span>
    <span class="project__skill">
        Mongoose 
    </span>
    <span class="project__skill">
        Heroku 
    </span>
</div>

## challenges and knowledge acquired



### difficulties of displaying HTML with React

React by default escapes and sanitizes anything that comes from a variable before it is put into JSX to protect from XSS attack. This created a problem because when a note was created it will be saved as HTML and when rendered into the page the literal tags will be shown instead of just the content.

To fix this issue I used the library [react-render-html](https://www.npmjs.com/package/react-render-html). It takes in a string and creates React Elements.

I know React has a way to [set HTML from a variable](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) called `dangerouslySetInnerHTML` It makes it so that React will not escape the HTML when putting into JSX. 

Knowing that all it does is not escape the HTML I decided to just use `react-render-html` because it creates React Elements.


### service worker

The service worker was really easy to set up with Create React App all you need to do is allow it to register a service worker for you and it cached certain assets and allowed the user to download the web app to there home screen.


### create, view, edit and delete note operations offline

To make the web app useable offline the service worker cached all resources needed.

Every operation that can be done on a note had a different array so there was an `allNotes` array which was populated initially when the user loads into the dashboard with all their notes, `deletedNotes` array, `createdNotes` array, and `updatedNotes` array. These arrays were stored in localStorage.

Every time someone would try to make a CRUD operation for notes it would first check if there are online by using `navigator.onLine`. `navigator.onLine` isn't a very good way to check if the user is connected to an internet connection because it will be true if the user is connected to a network.

If `navigator.onLine` is true it will make a fetch request otherwise if it was false or the fetch failed it will try to make the operation offline using the arrays in localStorage.

I have a JavaScript timer that runs every 5 seconds to check if the user went back online and there was changes made offline to send requests to the backend to create the new changes in MongoDB.

#### this is the general idea that happens with every operation

If a note is created and the user is offline it will first check if the `createdNotes` array has anything inside if it does not it will set an array in localStorage with the note that is created after that it will use `JSON.stringfy()` to make sure the objects are saved and not turned into `[object Object,...object Object]`. If the `createdNotes` is already created it will `JSON.parse()` the `createdNotes` array and push the new one into the array then `JSON.stringfy()` before saving it into localStorage.


#### issue with creating notes offline and going online

If someone were to edit or delete a note that was created offline and the user goes online it would try to make changes to the database with fake notes that had fake IDs. To fix this I first check if the note that was being made changes to is inside the `createdNotes` arrays if it was it will edit or delete the note inside that array instead of pushing it into a new array which could have been `updatedNotes` or `deletedNotes`.