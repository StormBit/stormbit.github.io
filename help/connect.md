---
layout: page
title: Join Us
subtitle: Bring Your Own Client
---

# Recommended Settings

Server: **[irc.stormbit.net](irc://irc.stormbit.net)**

Port: **6697**

SSL: **enabled**

# Servers

Main rotation: **[irc.stormbit.net](irc://irc.stormbit.net)**

Pointers: **[irc.pomf.se](irc://irc.pomf.se)**

<span class="warning">
  The following list is not guaranteed to be up-to-date, so we recommend
  using the main rotation instead.
</span>

<table class="table table-striped table-bordered"><tbody>
  <tr>
    <td><strong>Name</strong></td>
    <td><strong>Address</strong></td>
    <td><strong>Location</strong></td>
  </tr>
{% for server in site.data.servers %}
  <tr>
    <td>{{ server.name }}</td>
    <td>{{ server.address }}</td>
    <td>{{ server.location}}</td>
  </tr>
{% endfor %}
</tbody></table>

All StormBit servers listen on ports 6667 and 6697 (SSL).

# Donate A Server

The network is seeking more servers in Europe and the South Pacific:
if you think you might be able to help with this, contact an operator.
