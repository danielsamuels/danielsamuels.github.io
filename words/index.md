---
layout: listing
title: Words
---

Articles I've written over the years, some written for the company blog, some written for my own site.

{% for post in site.posts %}
* <small>{{ post.date | date_to_long_string }}</small><br>[{{ post.title }}]({{ post.url }})
{% endfor %}
