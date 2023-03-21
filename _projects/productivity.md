---
title: productivity
layout: project
image: /images/productivity.png
meta: A Progressive Web App to organize and complete tasks
description: Front End Technologies
permalink: /productivity
published: true
order: 1
emoji: 📜
more: { title: place, description: 340 x 340 canvas to create art with pixels }
---

<div class="project__header">
    <h1>productivity</h1>

    <div>
        <a href="https://productivity1.vercel.app/" title="web app">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path
                    d="M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6zm0-2h-5V2.003L21 7zM8 7v2h3V7H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z" />
            </svg>
        </a>

        <a
            href="https://github.com/colorlessenergy/productivity"
            title="GitHub">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
            </svg>
        </a>
    </div>

</div>

<p class="project__about">a Progressive Web App to organize and complete tasks</p>

<a href="https://productivity1.vercel.app/">
    ![productivity home page]({{ site.baseurl }}/images/productivity.png "productivity home page")
</a>

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

## 📖 features

### 🎨 tasks

tasks are separated into quick, medium and large tasks.

When a task is completed it is sent to the bottom.

![productivity task done]({{ site.baseurl }}/images/productivity/productivity-4.png "productivity task done")

Edit and delete functionality is hidden when a task is completed.

A modal shows when editing a task.

![edit task modal]({{ site.baseurl }}/images/productivity-edit-task.png "edit task modal")

Tasks are stored in localStorage.

### 🎉 reward

When all tasks are completed a celebration page is shown.

![reward]({{ site.baseurl }}/images/productivity/productivity-6.png "reward")

### 📜 stats

When all task for a day is completed a day is filled in on the calendar.

![streak chart]({{ site.baseurl }}/images/productivity-streak.png "streak chart")

Clicking on a filled in square shows all tasks completed on that day.

![previous tasks]({{ site.baseurl }}/images/productivity-previous-tasks.png "previous tasks")

When a task is completed it is added to the task count.

![task count]({{ site.baseurl }}/images/productivity-task-count.png "task count")

### ☀️ themes 🌙

Auto detects and applies preferred theme. The theme is stored into localStorage.

### add to home screen

You can add it to your home screen to easily revisit it again.
