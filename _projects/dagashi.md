---
title: DAGASHI E-COMMERCE
link: https://dagashi.netlify.com
layout: project
image: /images/dagashitoyou.png
published: april 2018
meta: Dagashi is a ecommerce site that sells japense candy. It is made with the jamStack.
description: Front End Technologies
---

# dagashi

[live version](https://dagashi.netlify.com/)

this is a static E-commerce site. I chose to make a static site so I would't have to use the monolithic structure that modern sites have today. This site allows the owner of the site to edit items in the shop with the use of netlify cms. It was made with snipcart a powerful shopping cart platform.

<a href="https://dagashi.netlify.com">
    ![Dagshi]({{ site.baseurl }}/images/dagashitoyou.png "dagsahi")
</a>

## Built with

* HTML
* CSS
* JavaScript

## Challenges

this first problem I faced was making netlify cms connect with my github account. The first thing I did was try to figure out exactly what I was trying to do. After everything was clear and easy to understand I went on google to look at the netlify cms docs. I had to do a lot of digging around to find what I needed since there was a lot of documentation.

The second problem I faced was looking for a shopping cart platform. I look up best carts online and It lead to two options either shopify or snipcart. In the enf snipcart was the best option because it allows more freedom with what can be done with the cart. Snipcart also has a api to be able to make the cart be on the page instead of using their modal version of the cart.

The last major problem was having snipcart connect with jekyll to utilize the netlify cms to make it easy for non technical people to add, edit and delete items in the cart. This was the hardest part since I had to figure out how Jekyll can generate the snipcart shopping buttons and allow the netlify cms add, edit and delete the shopping buttons. I came up with the solution of making the items a collection and connect that with the netlify cms to be able to edit the items on the page.

