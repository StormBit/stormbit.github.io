---
permalink: /__styleguide/index.html
title: styleguide
layout: default
---

<style>
    /* Primatives for the page until it can be styled properly. */
    .component {
        max-width: 1024px;
        padding: 10px;
        margin-bottom: 5px;
    }

    /* Help discern between the page and contained components. */
    .component__rendered {
        border: 1px solid red;
    }

    /* Dirty Hack until we can redo main navigation. */
    /* Withohut this, it will attempt to take over the main nav. */
    .component .navbar-fixed-top {
        position: relative;
        z-index: 1;
    }
</style>

{% assign componentsByType = site.components | group_by:"type" %}
<div id="main" class="wrap" role="main">
    <h1>StormBit Styleguide</h1>
    {% for type in componentsByType %}
    <h2 id="guide-{{ type.name }}" class="cf">{{ type.name | capitalize }}</h2>
    {% for entry in type.items %}
    {% include component.html %}
    {% endfor %}
    {% endfor %}
</div>