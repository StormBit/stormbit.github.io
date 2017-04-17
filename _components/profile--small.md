---
title: Profile (Small)
type: profile
description: Miniture user-profile, linking to "People" page.
usage: Used to showcase information about a given user.
---

{% assign who = site.data.people['antoligy'] %}
{% include person.html person=who size='small' %}