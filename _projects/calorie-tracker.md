---
title: calorie tracker
layout: project
image: /images/calorie-tracker.png
meta: A Progressive Web App to keep track of calories in a fun and interactive way. 
description: Front End Technologies
permalink: /calorie-tracker
published: true
order: 2
emoji: 😀️
---

# calorie tracker

<p class="project__intro">
 <a href="https://calorie-tracker.vercel.app/">visit web app</a>
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

The food blocks were designed for ease of use and to look fun by giving it a cartoonish feel.

<div class="case-study__img-container">
    <img src="{{ site.baseurl }}/images/calorie-tracker-food-block.png" alt="calorie tracker food block" title="calorie tracker food block">
</div>


To ease the flow of creating a food block a button is added to the home screen thats add a new empty food block and opens a modal to fill in the data.

Also when clicking on a food block a modal opens with a form to edit the food block data.

![calorie tracker edit food block modal]({{ site.baseurl }}/images/calorie-tracker-edit-food-block-modal.png "calorie tracker edit food block modal")

### duplicate and merge previous day

One of the previous 10 days can be duplicated and merged with the current day.

![calorie tracker duplicate previous day]({{ site.baseurl }}/images/calorie-tracker-duplicate-previous-day.png "calorie tracker duplicate previous day")


### food dictionary

I noticed there was a pain point where I need to find out how many calories a certain food has and calculate how many calories the food I am eating has.

To help with this issue I created the food dictionary page which allows you to create a food block and calculate the calories by inputting the amount.


![food dictionary]({{ site.baseurl }}/images/calorie-tracker-food-dictionary.png "food dictionary")

### snackbars

I noticed when I submitted forms it seemed that they didn't do anything because there weren't any visual cues. I decided to use Snackbars to make it clear that the forms were submitted.

![pink Snackbar]({{ site.baseurl }}/images/calorie-tracker-pink-snackbar.png "pink Snackbar")

![green Snackbar]({{ site.baseurl }}/images/calorie-tracker-green-snackbar.png "green Snackbar")

### reward system

Confetti falls from the top of the screen when the calorie goal is met.

![confetti]({{ site.baseurl }}/images/calorie-tracker-confetti.png "confetti")

### mobile nav

On mobile the nav is moved to the bottom of the screen to provide a native like experience.


<div class="case-study__img-container">
    <img src="{{ site.baseurl }}/images/calorie-tracker-mobile.png" alt="calorie tracker mobile" title="calorie tracker mobile">
</div>

### ☀️ themes 🌙

It auto detects and applies preferred theme. 

![calorie tracker dark theme]({{ site.baseurl }}/images/calorie-tracker-dark-theme.png "calorie tracker dark theme")


### add to home screen

You can add it to your home screen to easily revisit it again.

### offline functionality

All pages and functionality work offline.
