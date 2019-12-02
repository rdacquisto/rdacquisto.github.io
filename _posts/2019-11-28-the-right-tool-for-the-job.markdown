---
title: The right tool(s) for the job
layout: post
categories:
- development
tags:
- development
- mantras
- Jekyll
---

Today I am starting a project using Jekyll. Jekyll is a tool I have not heard about before.
[This commit] is the reason for this project.
I had to duplicate a bunch of markup for my 404 page.
I knew that maintaining a header across multiple files would quickly become a problem.

Initially I thought that React would be a good solution to my problem.
I love using react for any HTML markup, and at first I though that this use case would be no different.
It turns out this is not the case. Sure there are tools that exist that allow you to accomplish what I want to do, but they all feel hacky.
The fact of the matter is I want a static site generator, and github even recommends Jekyll.
As far as I can tell, that makes it the right tool for the job.

Using the right tool for the job is something I struggle with at work all the time.
I recently wrote a program in nodejs.
The infrastructure in which this application interacted with already existed in Java.
The problem was I was building HTML emails.
I have tried to write HTML in Java and it always feels cumbersome.
I knew I wanted to use server-side React to build the email content.
Since the entire purpose of this micro-service was to send html emails, I felt this made nodejs the obvious choice.
At the end of the day, the node versions of the SDKs we were already using in Java were simple to configure in nodejs.

But why am starting a blog? Well, I am not sure that I am.
If this turns into only a handful of posts over the next five years, then so be it.
There are topics I want to write about, from internet privacy and mountain biking, but there is one problem, I don't have an audience.
Right now I am just writing so that I have some content for this cool new domain I purchased.
And honestly, the only reason I purchased the domain was for the email address.

Anyways, if nothing else, I hope to write about how easy it was to get a static site up and running with Jekyll.

Note: This is a rough draft. My focus is primarily on getting a site up and running.
Cleaning up the existing content will follow at a later date.

[this commit]: https://github.com/rdacquisto/rdacquisto.github.io/commit/cc5e9f6c9e158553ea3fcbe5467ad65c6ec4a185
