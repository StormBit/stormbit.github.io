---
layout: post
title: "2016 - Year of the monkey"
date: "2016-01-17 01:32"
author: antoligy
published: true
---

First and foremost, it is long overdue, but I'd love to wish everybody a happy new year!  May 2015 be an awesome year for you-  _... Hold on ..._ Right so I've just been informed that actually another entire year managed to slip by without us even really noticing.  _Yikes, it's now 2016_.

What a year 2015 has been, behind the scenes we've been looking at remodeling our infrastructure to allow us to be more resilient with rolling out new servers and with maintaining existing ones.  It's quite an exciting area of change, as architectural best practices have been changing for the better over the past decade, changes which are only just now starting to be realised in the world of IRC. - _But more on that later._

In terms of immediate changes to the network, there are a few things on the cards to happen very soon.

- Making our reconnection throttling less aggressive, so as to not punish victims of netsplits or weaker connections.
- Auto-deploying and renewing [LetsEncrypt](https://letsencrypt.org/) SSL certificates for irc.stormbit.net on all servers.  A long requested feature, right now we have a valid SSL certificate in place for [Ridley](http://ridley.stormbit.net/), but not for other servers, which causes users no end of hassle.  It was unreasonable and presumptuous of us to assume users blanket-accept invalid SSL certificates, hence the new stance.
- Enabling usermode `+c` on autoconnect, which will prevent users who do not share channels with you, from messaging you by default. - We will post a further message when this change is being rolled out, but it will still be possible to opt out simply by running `/mode <username> -c`.


On a side-note, the majority of my own communications have been now swallowed up by Slack, a start-up which has proven that IRC's so-called decline is most likely due to the number of little inconveniences that have been around for all-too-long, and so to stay relevant it's becoming increasingly important to us as a network (and for the wider IRC community) to try and address some of these and to generally make IRC more accessible to newcomers.
To this end, we are currently planning on providing a new webclient (as well as documentation for its not-so-webby siblings) and are also looking at how we can bring more functionality to IRC through services, as well as making our services package easier and friendlier to use.
(Of course, these changes all come alongside the wonderful features of [IRC3](http://ircv3.net/), which we are following as closely as possible.)

Of course these changes are fairly opinionated and come solely from the crucible that is staff communication channels.  We would like to hear from you, and so have attached a survey to the bottom of this post!  It may take up some of your day, but those few minutes are of great value to us and are very appreciated!

Oh and before I forget, from all of us here at StormBit, may you have an incredible 2016!

<iframe src="https://docs.google.com/forms/d/1Ca_x9AV8Sd2N-JvR-v-qk-joyfVVAhODEOjM3hxtYfQ/viewform?embedded=true" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0"></iframe>