---
layout: page
title: StormBit Staff
subtitle: Who We Are
---

{% assign limit         = 3 %}
{% assign people_size   = site.data.people|size %}
{% assign total         = people_size|divided_by:limit %}
{% if people_size|modulo:limit != 0 %}
    {% assign total     = total|plus:1 %}
{% endif %}

<div class="container">
{% for i in (1..total) %}
    <div class="row">
        {% assign offset = forloop.index0|times:limit %}
        {% for person in site.data.people offset:offset limit:limit  %}
            {% assign who = person[1] %}
            <div class="col-md-4">
                {% include person.html person=who size="big" %}
            </div>            
        {% endfor %}
    </div>
{% endfor %}
</div>
