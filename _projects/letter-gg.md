---
title: letter-gg
link: https://letter-gg.web.app/
layout: project
image: /images/letter-gg.png
meta: A web app where people can create, comment or read guides about teamfight tactics.
description: Full Stack Technologies
permalink: /letter-gg
order: 2
emoji: 😀️
---

# letter-gg

<p class="project__intro">
 <a href="https://letter-gg.web.app/">visit web app</a>
</p>
<p class="project__intro">
 <a href="https://github.com/colorlessenergy/letter.gg">visit Github</a>
</p>

A place where people can create, comment or read guides about teamfight tactics


<a href="https://lastpad.herokuapp.com/">
   ![letter-gg web app]({{ site.baseurl }}/images/letter-gg.png "letter-gg web app")
</a>

## what is this

Letter-gg was built for people that played <a href="https://na.leagueoflegends.com/en/featured/events/teamfight-tactics">teamfight tactics</a>. Once an account is created you can make guides, like guides, and comment on guides.

I spent a lot of time designing a platform where it is easy to create guides and look at specific guides for a certain character in the game.


## how to use

If you don't want to make an account you can use this one 

* email: test@gmail.com
* password: test123

## Front End Tech

* React - create react app

## Back End Tech

* firebase
* firestore


## Hosting

* firebase hosting

## Version Control

* Git

## Design Software

* Figma


## challenges and knowledge acquired


### Firebase

Using firebase is like having a dedicated backend development team. There are some limits and the learning curve starts easy but when you are trying to create something complex the limits will make you have to create hacks to make it work.

Overall I would use firebase when I am creating something small that requires a database.

### There isn't a unique field in firestore

Firestore does not have a unique field. This was an issue when trying to create unique usernames. 

To solve this issue I had to create a collection with the id of each doc being the username that was being created. Every attempt to create a user this collection had to be queried by ID to see if the username was already created. If the username wasn't found in the collection it would create a new document with that username. If it was found a message will be sent to the user that the username is already taken.


### Logo

I research about logo designed and learned that logos should be an identifier and doesn't have to mean anything It just needs to be identifiable.

Knowing that logos should be unique I decided to use circles and move them around until I couldn't identify it with something. For the final design overlapped two circles and it made an arc that I liked. :)

<div class="img-container">
 <img class="img-container__img" src="{{ site.baseurl }}/images/letter-gg-logo-design.png" alt="letter-gg logo designs">
</div>

<p class="center">
 <a href="{{ site.baseurl }}/pdf/letter-gg-logo.pdf"> link to pdf of logo designs </a>
</p>

### UI

A mobile-first approach was taken when designing because It will guarantee that all screens will be supported


<div class="img-container">
 <img class="img-reset" src="{{ site.baseurl }}/images/home-design-letter-gg.png" alt="letter-gg website design">
</div>



<p class="center">
 <a href="https://www.figma.com/file/IfDB0HrqsPQOybUpkdkLhme2/Letter.gg?node-id=0%3A1"> link to figma of the full design</a>
</p>