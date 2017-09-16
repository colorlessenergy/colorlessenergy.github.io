---
layout: post
title: "first website guide"
date: 2017-09-12
categories: code
---


This guide will show you how to make a very basic website, this guide is meant for
beginners. I will show you how to make a website that looks like the image below.

<br />

I structured this guide so that a anyone can just a text editor and build this website
anywhere, from your phone or your computer! All you need a browser and a text editor.

<img src="../../../../blog-pics/first-website-guide/finished-page-2017-09-16.png" />


<section>

<h2>1. first you have to find a text editor. </h2>
<p>
  I recommend <a href="https://atom.io/"> atom </a> if you are developing on a laptop or computer. I recommend
  <a href="https://play.google.com/store/apps/details?id=com.maskyn.fileeditor&hl=en"> turbo edtior </a> for mobile devices. You can use any editor of your choice HTML can be built and ran on any device with a text editor and a browser. this is the hardest step in the whole guide. Usually the hardest part is downloading and getting the application to work. If you thought this was easy this guide will be a breeze! Once you found the application you have download it.
</p>

<div>
  <img src="../../../../blog-pics/first-website-guide/atom-text-editor-2017-09-16.png" />
</div>
</section>
<section>

  <h2> 2. Make a new document or file and have the extension be .html </h2>

  <div>
    <p>
      First make a folder with the name of website. The folder can be named anything
      I am just using that name just for this guide!
    </p>
    <img src="../../../../blog-pics/first-website-guide/folder-name-2017-09-16.png" />
  </div>
  <div>
    <p>
      After you have created the folder, open the folder (see first pic) and make a file named "index.html" (see second pic), again this can be named whatever you choose but it is best practice to name file for the main page as index.html, but you can name it what ever you feel like naming it.
    </p>
    <img src="../../../../blog-pics/first-website-guide/folder-name-2017-09-16.png" />
    <img src="../../../../blog-pics/first-website-guide/files-name-2017-09-16.png" />
  </div>

</section>
<section>
  <h2> 3. open the file </h2>

  <div>
    <p>
      open up the index.html file or what ever you named your file, remember that it needs to have the extension or that it ends with ".html" and open it with the text editor of your choice.
    </p>
    <img src="../../../../blog-pics/first-website-guide/open-file-2017-09-16.png" />
  </div>
</section>
<section>
  <h2> 4. file structure </h2>

  <div>
    <p>
      once you open it with your text editor. Before we go even further there is a basic skeleton that even the most complex websites have.
    </p>
    <img src="../../../../blog-pics/first-website-guide/html-skeleton-2017-09-16.png" />
    <p>
      The text editor I am using is <a href="https://atom.io/"> Atom </a> and not all text editors look the same. My text editor has a theme that makes the text and everything about it darker than normal. Yours might be lighter with a background color of white.
      This is the basic structure of a website and all websites have it because it is the best way for the browser to understand what to render on the persons device. first It is important to learn some terminology such as tags. Tags are everything that starts with a less than sign "<" and ends with a greater than sign ">" there are two tags usually when there is content to display so an example would be
    </p>
    <img src="../../../../blog-pics/first-website-guide/tags-explain-2017-09-16.png" />
    <p>
    there is a opening tag and a closing tag <xmp> <p> </p> </xmp> and the content goes between the opening and closing tag. this code will produce this website. to be able to see your website you have to either double click on the file with the .html extension, if you are on the computer or you can right click and left click or hover open with and choose what ever browser you have. If you are on a device you can either open it with your text editor or go to the file manager and tap and hold and choose open with and then tap on browser of your choice.
    </p>
    <img src="../../../../blog-pics/first-website-guide/hi-2017-09-16.png" />

    <p>
      now time to explain what each tag means, remember a tag is anything with a opening and closing tag, there are some special cases that I will talk about in another guide.
      <h3> "<!DOCTYPE html>" </h3>
      this just declares what version of HTML you are using this is the version you will always use until it gets updated again.

      <h3> <xmp> <html></html> </xmp>  </h3>

      html tag is just for semantics and structure so the browser knows what is HTML

      <h3> <head> </head> </h3>
      the head tag includes any metadata which just explain data about the website, such as the characters to use, a description, and also a title. nothing in the head gets render, which means the everything you put in the head it won't be seen on the page.

      <h3> <xmp> <meta charset="utf-8"> </xmp> or can be <xmp> <meta charset="utf-8"> </xmp></h3>

      this is one of the special cases that it doesn't have a closing tag. when it does not have a closing tag it is called an enclosing tag. it can either be close with a
      forward slash or without a slash it doesn't matter.

      <h3><xmp> <title>first website</title> </xmp> </h3>

      what this does is put some text on the tab

      <img src="../../../../blog-pics/first-website-guide/tab-2017-09-16.png" />


    </p>
  </div>
</section>

<section>
  <h2> adding content to the website </h2>

  <section>
    <p>
      Tags mostly are semantics, you don't to have the tags for the browser to display text. You should try to avoid that all times. Make sure to use semantic tags.

      the tags we are going to use are the <xmp> <p> </p> </xmp> and <xmp> <h1> </h1> </xmp> and <xmp> <h2> </h2> </xmp>
    </p>

    <p>
      in between the <xmp> <h1> </h1> </xmp> you can put content. we will put the title which is, "first website!", in between of the h1 tags.
    </p>

    <img src="../../../../blog-pics/first-website-guide/h1-tag-2017-09-16.png" />

    <p>
      in between the <xmp> <h2> </h2> <p> </p> </xmp> in between the tags we will put "hello world" and "My name is your name". now open up the file with either tapping and holding on the file on devices and on a computer double click.
    </p>

    <img src="../../../../blog-pics/first-website-guide/complete-code-2017-09-16.png" />

    <p>
      now you are complete. open it up on the browser and search on google for more things you want to do!! I recommend going to <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"> mdn </a> for more information on all topics i discussed.
    </p>

    <img src="../../../../blog-pics/first-website-guide/finished-page-2017-09-16.png" />

    <p> this is the completed site. Congratulation you are now a web developer! </p>
  </section>
</section>
