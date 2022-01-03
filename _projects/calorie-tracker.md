---
title: calorie tracker
layout: project
image: /images/calorie-tracker.png
meta: A Progressive Web App to keep track of calories in a fun and interactive way. 
description: Front End Technologies
permalink: /calorie-tracker
published: true
order: 5
emoji: 😀️
---

# calorie tracker

<p class="project__intro">
 <a href="https://calorie-tracker.vercel.app/">visit web app</a>
</p>
<p class="project__intro">
 <a href="https://www.figma.com/file/dcEdzCTNeaVPuyk8PRzJI1/calorie-tracker?node-id=0%3A1">screenshots of calorie tracker</a>
</p>

<a href="https://calorie-tracker.vercel.app/">
    ![calorie tracker dashboard]({{ site.baseurl }}/images/calorie-tracker.png "calorie tracker dashboard")
</a>

## what is this

A Progressive Web App to keep track of calories that works offline.

## how to use

Select a date from the calendar and start adding food to keep track of calories.

## technologies

<div class="project__skills">
    <span class="project__skill">
        HTML
    </span>
    <span class="project__skill">
        SASS
    </span>
    <span class="project__skill">
        JavaScript
    </span>
    <span class="project__skill">
        React 
    </span>
    <span class="project__skill">
        Next.js
    </span>
    <span class="project__skill">
        localStorage
    </span>
</div>

## core features

### food blocks

The food blocks are stored in localStorage which allows the web app to perform CRUD operations offline. 

The food blocks were designed for ease of use and look fun by giving it a cartoonish feel.

<div class="case-study__img-container">
    <img src="{{ site.baseurl }}/images/calorie-tracker-food-block.png" alt="calorie tracker food block" title="calorie tracker food block">
</div>

When food blocks are updated the inputs values are checked with previous one to determine if is new or it is already exists. If the food block is new it is added to the previous food blocks array in localStorage.

![calorie tracker modal]({{ site.baseurl }}/images/calorie-tracker-modal.png "calorie tracker modal")

The previous food blocks are shown when opening the add a food block modal.

![calorie tracker edit food block modal]({{ site.baseurl }}/images/calorie-tracker-edit-food-block-modal.png "calorie tracker edit food block modal")

When I wanted to change a food block it wasn't convenient because I had to go to the food blocks page then look for it. To make it easier to edit a food block I added a modal that opens when clicking on a food block.

### snackbars

I noticed when I submitted forms It seemed that they didn't do anything because there weren't any visual queues. I decided to use Snackbars to make it clear that the forms were submitted.

![pink Snackbar]({{ site.baseurl }}/images/calorie-tracker-pink-snackbar.png "pink Snackbar")

![green Snackbar]({{ site.baseurl }}/images/calorie-tracker-green-snackbar.png "green Snackbar")

### reward system

Confetti falls from the top of the screen when the calorie goal is met.

![confetti]({{ site.baseurl }}/images/calorie-tracker-confetti.png "confetti")


### add to home screen

You can add it to your home screen to easily revisit it again.

### offline functionality

All the pages are available offline. I used localStorage as a database to store food blocks. This makes the user experience feel smooth and interactive.
