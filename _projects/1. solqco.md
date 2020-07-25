---
title: soloq.co
layout: project
image: /images/soloq.png
meta: soloq.co is an E-commerce website
description: Front End Technologies
permalink: /soloq
---



### soloq.co

<p class="project__intro">
 <a href="https://soloq.co/">visit Site</a>
</p>

<a href="https://soloq.co/">
   ![soloq.co a website to buy items I have created]({{ site.baseurl }}/images/soloq.png "soloq a website to buy items I have created")
</a>


## what is this

soloq is an E-commerce website, where I sell my art and items I have created.

## how to use

You can browse different items and buy them. :)



## Front End Tech

* HTML
* CSS
* JavaScript 
* React - Create React App
* Stripe - payment gateway

## Hosting

* Netlify

## Version control

* Git

## Design Software

* Figma

## challenges and knowledge acquired

### Cost & Stripe

Stripe has many ways to accept payment, Stripe Checkout is the best option because it doesn't require a server to use, this allows the cost to be as low as it possibly can be.

The only cost there is the domain name which is $ 9.99 a year.

### netlify redirects

The website is built with Create React App, which is a SPA, a redirect rule has to be provided to serve the index.html file instead of giving a 404 when requesting for a URL.

### React Context API

React Context was used to allow the Stripe provided API, `stripe.redirectToCheckout()`, be used in all components that needed it.

A context first needs to be created with `React.createContext()`. 

The React.context was updated when the page was loaded because Stripe wouldn't load quickly enough.

All the components were wrapped with `<[context].provider></[context].provider>` to be able to use the context anywhere in the nested components.

This context is then imported everywhere it is needed. After the context is imported, it is declared in the class it is being used. The context is accessed with `this.context.[propertyName]`

<strong>Redux</strong> could have been used for this but I didn't want to import that for only one function.