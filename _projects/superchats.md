---
title: superchats
link: https://superchats.herokuapp.com/
layout: project
image: /images/superchats.png
meta: superchats is a chatting app built with Vue
description: Full Stack Technologies
permalink: /superchats
order: 3
published: false
---

### superchats

<p class="project__intro">
 <a href="https://superchats.herokuapp.com/">visit site</a>
</p>
<p class="project__intro">
 <a href="https://github.com/colorlessenergy/devsuperchats">visit Github</a>
</p>

<div class="img-container">
 <img class="img-container__img" src="{{ site.baseurl }}/images/superchats.png" alt="superchats website">
</div>

## what is this

superchats is a chatting app where you can chat with your friends. You can make group chats and tell your friends to join by giving them a code. It utilizes socket.io to update the DOM when a new message is sent and received. It uses a service worker to send a notification to a user when a message is sent into one of the group chats they are in. When the web app is visited it will ask the user to download the app to their phone to be able to easily access the web app later.

## how to use

If you don't want to make an account you can use this one

- email: test1234@gmail.com
- password: test1234

## Front End Tech

Utilize the Vue CLI to build the front end which included

- webpack - to bundle and build into the dist folder
- Vuex - to manage the token state
- Progressive Web app (pwa) - to make it an app you can download on your phone!
- vue-router - to make my app a SPA
- linter
- socketio

## Back End Tech

- Node
- Express
- Mongo
- JWT
- socketio

## Hosting

- Mlabs to host MongoDB
- Heroku

## Version control

- Git

## Design Software

- Figma

## Challenges and knowledge acquired

### Setting up the service worker (PWA)

Getting the PWA aspect of the app to work was hard because the documentation isn't very informative for web push notification and some blogs or articles are outdated.

The easiest part to implement of the PWA is to ask the user to add the web app to their phone.

For the most part, I had to see how things work through trial and error.

The two best places that helped me figure out web push notification was this [github repo](https://github.com/mozilla/serviceworker-cookbook/tree/master/push-get-payload) and googles [blog post](https://developers.google.com/web/fundamentals/codelabs/push-notifications/).

The main reason why it was difficult to set up notifications is that most blog posts used firebase cloud messaging, which requires the use of firebase which is owned by Google, to generate an endpoint to use for web push notification.

I choose not to use Firebase because I was already using Heroku for hosting and Mongo for the database so it wasn't needed.

All it did was generate a subscription endpoint using a private and public key. Knowing this information I use the library [web push](https://www.npmjs.com/package/web-push) to generate the keys and make a subscription and stored this subscription so I can use it to send notifications to people that subscribed to it.

### heroku struggles

I am abusing the free tier of Heroku LOL.

Heroku broke web push on my backend because it would go to "sleep" after 30 mins. Every time it woke up it would run my backend code again. This made web push error with a 401 because it would create a new public and private key while still using the old subscription endpoint. The way I fixed this was to save both keys into localStorage in the frontend then every time the page is loaded to send them to the backend so I can always have the original keys saved in the backend.

### bcrypt crashing the server when starting it up

When the server started on herkou it would crash immediately with this error:

node: symbol lookup error: /app/superchat-backend/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node: undefined symbol: napi_add_finalizer

To fix this I had to update the node and npm version that was set in the package.json file.

### Designing the logo

I chose to use a basic design because I noticed how every other successful chatting service uses a simple design for their logos such as facebook and snapchat. I had to create different sizes for all the different ways the app can be downloaded.

<div class="img-container">
 <img class="img-container__img" src="{{ site.baseurl }}/images/superchats-logo.png" alt="superchats logo designs">
</div>

<p class="center">
 <a href="{{ site.baseurl }}/pdf/superchats-logo.pdf"> link to pdf of logo designs </a>
</p>

## Designing the view

Designed using the mobile first approach.

<div class="img-container">
 <img class="img-container__img" src="{{ site.baseurl }}/images/superchats-login-register-design.png" alt="superchats website design">
</div>

Register and login UI.

<div class="img-container">
 <img class="img-container__img" src="{{ site.baseurl }}/images/superchats-messaging-ui.png" alt="superchats website design">
</div>

Messaging UI.

At first I tried a dark theme but It didn't match up with the whole site so I changed it to a light theme.

<p class="center">
 <a href="{{ site.baseurl }}/pdf/superchats-design.pdf"> link to pdf of website designs </a>
</p>
