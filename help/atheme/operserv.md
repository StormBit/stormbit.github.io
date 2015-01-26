---
layout: page
subtitle: Who Are We?
---

# OperServ

## Commands for IRC Operators

**Purpose**: Assists opers with the management of users and network services

**Commands**: akill, clearchan, clones, compare, greplog, identify, ignore,
info, inject, jupe, mode, modinspect, modlist, modload, modunload, noop,
override, rakill, raw, readonly, rehash, restart, rmatch, rnc, rwatch,
sgline, shutdown, soper, specs, sqline, update, uptime

<div class="warning">
<strong>
  <em>NOTE</em>: Nearly every command used can drastically affect network
  performance and user experience.
</strong>
</div>

<div class="warning">
<strong>DO NOT ISSUE THESE COMMANDS LIGHTLY.
Inject is NOT to be used on a live network.
It is included here for informational purposes <em>ONLY</em>.</strong>
</div>

Add a clones excemption, this creates a permanent exception for 127.0.0.1
permanently with the reason "no place like home":

    /msg operserv clones addexempt 127.0.0.1 !P no place like home*

Automatically kline hosts that go over the Clones limit,

    /msg operserv clones kline on

View all hosts that meet the clones threshold:

    /msg operserv clones list

Remove a previously made exemption:

    /msg operserv clones delexmpt 127.0.0.1

Compare two users:

    /msg operserv compare nickone nicktwo

Compare two channels:

    /msg operserv compare #channelA #channelB

Search NickServ logs for the last time NickName was mentioned:

    /msg operserv greplog NickServ NickName

Search ChanServ logs for #mychannelname within the last seven days:

    /msg operserv greplog ChanServ #mychannelname

Identify to OperServ (if your account is set to require a seperate
SOPER password):

    /msg operserv identify mySOPERpassword

Force Services to ignore a user:

    /msg operserv ignore add nick!*@* abusing services

View all nicks that Services is ignoring:

    /msg operserv ignore list

Clear all nicks that services is ignoring:

    /msg operserv ignore clear

View information regarding services:

    /msg operserv info

Royally screw up the network:

    /msg operserv inject :services.ournetwork.net PING target.ournetwork.net

Prevent a server from connecting (during upgrades and such):

    /msg operserv jupe upgrading.ournetwork.net

Force a ChanServ-like mode change on a channel:

    /msg operserv mode #mychannelname +o opnick

View important information about a module (in this case, SASL):

    /msg operserv modinspect protocol/sasl

View all loaded modules:

    /msg operserv modlist

Load a specific module:

    /msg operserv modload contrib/badwords

Unload a module from OperServ:

    /msg operserv modunload contrib/badwords

Prevent users on a server from obtaining IRCop status:

    /msg operserv noop add server badserver.ournetwork.net

Prevent users from a hostmask from obtaining IRCop status:

    /msg operserv noop add hostmask bad@host

Remove a user from the noop list:

    /msg operserv noop del server badserver.ournetwork.net

Perform an action as another user:

    /msg operserv override channelowner chanserv flags #mychannelname othernick +

Perform a regex-based akill:

    /msg operserv rakill /^please don't make me learn regex^/

Inject raw information into the uplink:

    /msg operserv raw :OperServ WALLOPS :Beep boop

Change services into read-only mode:

    /msg operserv readonly ON

Reload the services config file and update the services database:

    /msg operserv rehash


Shutdown and reinitialize services:

    /msg operserv restart


Check ten most common RealNames:

    /msg operserv rnc 10


Check a regex for active matches:

    /msg operserv rmatch /^please don't make me learn to regex/


Stop services completely:

    /msg operserv shutdown


View all SOPERs and their access levels:

    /msg operserv soper list


View all SOPER access levels:

    /msg operserv soper listclass


Add a user to the SOPER database:

    /msg operserv soper add accountname accesslevel


Remove a user from the SOPER database:

    /msg operserv SOPER del accountname


Change a user's SOPER account password:

    /msg operserv SOPER setpass accountname

Check your privilege in Services:

    /msg operserv specs user mynick

Prevent the channel #badchannel from being registered:

    /msg operserv sqline add #badchannel !P bad channel

Prevent any nickname containing badnick from being registered for the next 60 days:

    /msg operserv sqline add *badnick* !T 60d

Save the services database:

    /msg operserv update

View the services runtime:

    /msg operserv uptime
