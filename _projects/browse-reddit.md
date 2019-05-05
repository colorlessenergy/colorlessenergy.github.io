---
title: PWA browse reddit
link: https://browses.herokuapp.com/
layout: project
image: /images/browse-reddit.png
published: March 2019
meta: a PWA that can view reddit subreddits offline.
description: full stack Technologies
---



### PWA browse reddit

<p class="project__intro">
 <a href="https://browses.herokuapp.com/">visit Site</a>
</p>
<p class="project__intro">
 <a href="https://github.com/colorlessenergy/pwa-browse-reddit">visit Github</a>
</p>


<a href="https://browses.herokuapp.com/">
   ![pwa browse reddit]({{ site.baseurl }}/images/browse-reddit.png "pwa browse reddit")
</a>


## what is this

A progressive web app that allows you to access reddit offline.

## how to use

You put the subreddit you are trying to visit in the search box. Once you initially search a subreddit with a internet connection you will be able to view it offline. If you are on chrome it will prompt you to download it to your home screen and if you are on safari you will have to manually do it yourself.


## Built with

* HTML
* CSS
* JavaScript
* Node
* PWA - service worker



## challenges and knowledge acquired


### main problem

Reddit loaded too slow on my phone so I decided to use their API they exposed to make a web app which loaded way faster because there is less stuff having to be loaded.

### design doc

I made a design doc at the start to map out how the app will be made and what will be used to make it.

### service worker

The service worker caches every request made and if it can't be found it will fetch it through the network.

A problem I had with this is that the JSON fetched from the reddit API will never be updated because everytime a request is made the service worker intercepts it and gets it from the cache. I realize the only content that ever changes is the JSON files that are fetched from the reddit API so I always made a network request for them and cached the new one every time a subreddit was searched.

I am very proud of this project because I fixed a problem I had.