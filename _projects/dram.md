---
title: dram
layout: project
image: /images/dram.png
meta: A Progressive Web App to invite, draw and guess.
description: Front End Technologies
permalink: /dram
published: true
order: 5
---

# dram

<p class="project__intro">
 <a href="https://dram.vercel.app/">visit web app</a>
</p>

<a href="https://dram.vercel.app/">
    ![dram drawing page]({{ site.baseurl }}/images/dram.png "dram drawing page")
</a>

## what is this

A Progressive Web App to invite, draw and guess.

## how to use

Once a name is created you can either create a game or join a game.

The game can only start if there is at least two players in a game the person who created the game can start the game.

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
        Firebase / Firestore
    </span>
</div>

## 📖 features

### 🎨 drawing

-   every person that joins the game has one round to draw
-   in the beginning of the round the person chosen to draw will choose a word
-   customize brush color and brush radius
-   clear and undo buttons
-   time limit of 200 seconds

### 🥇 scoring

-   the person who guesses correctly first gets 10 points, second gets 8 points, 3rd gets 6 points and everyone else after gets 2 points
-   if no one guesses correctly the drawer gets 2 points
-   once everyone goes a round a leaderboard is shown with the scores

### 🤔 guesses

-   everyone that isn't drawing can guess
-   repeated guesses don't show
-   a message will appear when someone guesses correctly

### 🎭 gallery

-   can look at your previous drawings

### ☀️ themes 🌙

-   auto detects and applies preferred theme
-   light and dark theme

### add to home screen

You can add it to your home screen to easily revisit it again.
