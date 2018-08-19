---
title: DAGASHI E-COMMERCE
descone: This site has a cms integration.
desctwo: a site selling japanese candy.
link: https://dagashi.netlify.com
layout: project
class: proj__bg-color
image: /images/dagashitoyou.png
---

# dagashi

<a href="https://dagashi.netlify.com">
    ![Dagshi]({{ site.baseurl }}/images/dagashitoyou.png "dagsahi")
</a>

link to site [dagashi](https://dagashi.netlify.com/)

link to github [dagashi](https://github.com/colorlessenergy/dagashi)

## What this is

<!-- this is a static E-commerce site. This site was made to sell
Japanese candy. This site uses snipcart for the E-commerce. It also has
the Netlify cms. Both snipcart and Netlify cms use Github as the backend -->

this is a static E-commerce site. I chose to make a static site so I would't have to use the monolithic structure that modern sites have today. This site allows the owner of the site to edit items in the shop with the use of netlify cms. It was made with snipcart a powerful shopping cart platform.

## Built with

* HTML
* CSS
* JavaScript

## Challenges

this first problem I faced was making netlify cms connect with my github account. The first thing I did was try to figure out exactly what I was trying to do. After everything was clear and easy to understand I went on google to look at the netlify cms docs. I had to do a lot of digging around to find what I needed since there was a lot of documentation.

The second problem I faced was looking for a shopping cart platform. I look up best carts online and It lead to two options either shopify or snipcart. In the enf snipcart was the best option because it allows more freedom with what can be done with the cart. Snipcart also has a api to be able to make the cart be on the page instead of using their modal version of the cart.

The last major problem was having snipcart connect with jekyll to utilize the netlify cms to make it easy for non technical people to add, edit and delete items in the cart. This was the hardest part since I had to figure out how Jekyll can generate the snipcart shopping buttons and allow the netlify cms add, edit and delete the shopping buttons. I came up with the solution of making the items a collection and connect that with the netlify cms to be able to edit the items on the page.
