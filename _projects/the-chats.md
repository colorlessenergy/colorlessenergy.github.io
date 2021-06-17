---
title: The Chats
layout: project
image: /images/the-chats.png
meta: a progressive web app where we can send messages to chat rooms and a notification is sent to people in the chat room.
description: Full Stack Technologies
permalink: /the-chats
published: true
---

# the chats

<p class="project__intro">
 <a href="https://the-chats.netlify.app/">visit web app</a>
</p>

<p class="project__intro">
 <a href="/pdf/the-chats-designs.pdf">PDF of The Chats designs</a>
</p>

![The Chats chat room]({{ site.baseurl }}/images/the-chats.png "the chats chat room")

## what is this

A progressive web app where we can send messages to chat rooms and a notification is sent to people in the chat room.

## how to use

You can sign in with this account 

email: test@brianmunoz.co   
password: test1234

## Front End Tech

* HTML
* CSS
* JavaScript 
* React - Create React App
* Redux - Redux Thunk
* React Redux Firebase

## Back End Tech

* Firebase
* Node
* Express
* web push

## Hosting

* Netlify

## Version control

* Git

## Design Software

* Figma

## challenges and knowledge acquired

### react-redux-firebase

#### populate

React Redux Firebase doesn't support populating arrays. I had to do it manually by looping through the array and replacing IDs with the objects.

#### pagination / infinite scrolling

To paginate / infinite scroll messages in a chat room I had to store a global variable that keep track of the current page. Once the chat box is scrolled to the top a request is made to to get 25 more. These messages are stored with the current pagination number into redux. Once the fetching is done the paginated messages stored in redux are looped through and combined into one.

### custom emojis

Custom Emojis are images that are uploaded to firebase storage. A collection is made for custom emojis in firestore the ID of the document is set to the name of the custom emoji. 

When typing it will check if the value has a colon followed by a letter if it does a box will appear showing all matching custom emojis. When selecting one it will replace what is typed with the emoji full complete name in the input.

When rendering the custom emojis it is search for in the text by checking if there are any words between two colons if there is it check if it exists on the custom emoji collection and replace the text with an image tag. 

### cursor position resets 

When adding a custom emoji from all custom emojis menu it would add the custom emojis to the wrong place. To fix this I had to set the `selectionStart` of the input to be the `selectionStart` before adding the custom emoji plus the custom emoji name length after the custom emojis is added to the input.

### push notification

When a user is logged in it will prompt for notifications to be enabled. If the user allow notifications a request is made to my node express server hosted on heroku to retrieve public vapid key this key is used to subscribe the user to push notifications. The subscription is sent to firestore to store it on the user document.

When a message is sent to a chat room the populated people array is looped through and a notification is sent to every person.