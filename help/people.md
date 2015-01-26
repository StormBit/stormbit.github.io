---
layout: page
title: StormBit Staff
subtitle: Who We Are
---

<div class="container">
{% assign count = 0 %}
{% for person in site.data.people %}
  {% cycle '<div class="row">', '', '' %}
  {% assign who = person[1] %}
  <div class="col-md-4">
  {% include person.html person=who size="big" %}
  </div>
  {% cycle '', '', '</div>' %}
{% endfor %}
</div>
