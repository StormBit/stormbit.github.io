---
title: Profile (Big)
type: profile
description: Embedded user-profile.
usage: Used to showcase information about a given user.
---

{% assign who = site.data.people['antoligy'] %}
{% include person.html person=who size='big' %}