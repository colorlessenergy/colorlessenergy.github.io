---
title: calorie tracker
layout: project
image: /images/calorie-tracker.png
meta: A Progressive Web App to keep track of calories in a fun and interactive way
description: Front End Technologies
permalink: /calorie-tracker
published: true
order: 3
emoji: 😀️
more:
    {
        title: codinglead,
        description: a platform to post content about web development
    }
---

# calorie tracker

<p class="project__intro">
 <a href="https://calorie-tracker.vercel.app/">visit web app</a>
</p>

<p class="project__intro">
 <a href="https://github.com/colorlessenergy/calorie-tracker">visit GitHub</a>
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

To ease the flow of creating a food block there is a button on the home page thats add a food block.

Clicking on a food block opens a modal to edit the food block.

![calorie tracker edit food block modal]({{ site.baseurl }}/images/calorie-tracker-edit-food-block-modal.png "calorie tracker edit food block modal")

### duplicate and merge previous day

One of the previous 10 days can be duplicated and merged with the current day.

![calorie tracker duplicate previous day]({{ site.baseurl }}/images/calorie-tracker-duplicate-previous-day.png "calorie tracker duplicate previous day")

### food dictionary

I noticed there was a pain point where I need to find out how many calories a certain food has and calculate how many calories the food I am eating has.

This lead to the creation of the food dictionary page which allows you to create a list of food blocks that automatically calculate calories.

![food dictionary]({{ site.baseurl }}/images/calorie-tracker-food-dictionary.png "food dictionary")

An item in the food dictionary can be connected to a food block.

![connect food dictionary to food block]({{ site.baseurl }}/images/calorie-tracker-edit-food-block-modal.png "connect food dictionary to food block")

The connected food dictionary item is used to automatically calculate the calories for the amount.

### snackbars

I noticed when I submitted forms it seemed that they didn't do anything because there weren't any visual cues. I decided to use Snackbars to make it clear that the forms were submitted.

![snackbar]({{ site.baseurl }}/images/calorie-tracker-snackbar.png "snackbar")

### reward system

Confetti falls from the top of the screen when the calorie goal is met.

![confetti]({{ site.baseurl }}/images/calorie-tracker/calorie-tracker-3.png "confetti")

### ☀️ themes 🌙

It auto detects and applies preferred theme.

![calorie tracker dark theme]({{ site.baseurl }}/images/calorie-tracker-dark-theme.png "calorie tracker dark theme")

### add to home screen

You can add it to your home screen to easily revisit it again.
