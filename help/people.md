---
layout: page
title: StormBit Staff
subtitle: Who We Are
---

<div class="container">
{% for person in site.data.people %}
  {% assign who = person[1] %}
  {% include person.html person=who size="big" %}
{% endfor %}
</div>
