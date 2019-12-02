---
layout: page
title: Posts
permalink: /posts/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> ({{post.date}})
      <ul>
        {% for tag in post.tags%}
          <li>{{tag}}</li>
        {% endfor %}
      </ul>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
