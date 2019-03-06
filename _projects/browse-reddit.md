---
title: PWA browse reddit
link: https://browses.herokuapp.com/
layout: project
image: /images/browse-reddit.png
published: March 2019
meta: a PWA that can view reddit subreddits offline.
description: full stack Technologies
---



# PWA browse reddit

<a href="https://browses.herokuapp.com/">
    ![pwa browse reddit]({{ site.baseurl }}/images/browse-reddit.png "pwa browse reddit")
</a>

[Live Version](https://browses.herokuapp.com/)

Reddit on mobile loaded too slow on my phone so I decided to use their API to make a web app which loaded way faster because there is less stuff having to be loaded. This is a website that prompts you to download it.

## how to use

You put the subreddit you are trying to visit in the search box. Once you initially search a subreddit with a internet connetion it will be able to use view it offline.


## Built with

* HTML
* CSS
* JavaScript
* Node
* PWA - service worker

## design doc

I made a design doc at the start to map out how the app will be made and what will be used to make it.

## service worker

The service worker caches every request made and if it can't be found it will fetch it through the network.

A problem I had with this is that the json fetched from the reddit API will never be updated because everytime a request is made the service worker intercepts it and gets it from the cache. I realize the only content that ever changes is the json files that are fetched from the reddit API so I always made a network request for them and cached the new one every time a subreddit was searched.

I am very proud of this project because I fixed a problem I had.
