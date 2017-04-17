---
permalink: /__styleguide/index.html
title: styleguide
layout: default
---

<div id="main" class="inner wrap" role="main">

<div markdown="1">
# StormBit Styleguide #

A collection of the colors, typography, visual elements and components that
make up the StormBit websites and brand.
</div>

    <h2 id="colors" class="cf">Colors</h2>
    {% for entry in site.colors %}
        {% include component.html component_type="color" %}
    {% endfor %}

    {% assign componentsByType = site.components|group_by:"type" %}
    {% for type in componentsByType %}
    <h2 id="guide-{{ type.name }}" class="cf">{{ type.name | capitalize }}</h2>
    {% for entry in type.items %}
        {% include component.html component_type=type.name %}
    {% endfor %}
    {% endfor %}
</div>