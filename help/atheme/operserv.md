#OperServ
_Commands for IRC Operators_

**Purpose**: Assists opers with the management of users and network services  
**Commands**: akill, clearchan, clones, compare, greplog, identify, ignore, info, inject, jupe, mode, modinspect, modlist, modload, modunload, noop, override, rakill, raw, readonly, rehash, restart, rmatch, rnc, rwatch, sgline, shutdown, soper, specs, sqline, update, uptime  
**_NOTE_**: Nearly every command used can drastically affect network performance and user experience. DO NOT ISSUE THESE COMMANDS LIGHTLY. Inject is NOT to be used on a live network. It is included here for informational purposes __ONLY__.  

Add a clones excemption: */msg operserv clones addexempt 127.0.0.1 !P no place like home*  
Explanation: This creates a permanent exception for 127.0.0.1 permanently with the reason "no place like home"

Automatically kline hosts that go over the Clones limit: */msg operserv clones kline on*  
Disclaimer: __DO NOT USE LIGHTLY__

View all hosts that meet the clones threshold: */msg operserv clones list*

Remove a previously made exemption: */msg operserv clones delexmpt 127.0.0.1*

Compare two users: */msg operserv compare nickone nicktwo*

Compare two channels: */msg operserv compare #channelA #channelB*

Search NickServ logs for the last time NickName was mentioned: */msg operserv greplog NickServ NickName* 

Search ChanServ logs for #mychannelname within the last seven days: */msg operserv greplog ChanServ #mychannelname*

Identify to OperServ (if your account is set to require a seperate SOPER password): */msg operserv identify mySOPERpassword*

Force Services to ignore a user: _/msg operserv ignore add nick!*@* abusing services_  
Disclaimer: __DO NOT USE LIGHTLY__

View all nicks that Services is ignoring: */msg operserv ignore list*

Clear all nicks that services is ignoring: */msg operserv ignore clear*  
Disclaimer: __DO NOT USE LIGHTLY__

View information regarding services: */msg operserv info*

Royally screw up the network: */msg operserv inject :services.ournetwork.net PING target.ournetwork.net*  
Note: **_DO NOT USE IN AN ACTIVE NETWORK._**

Prevent a server from connecting (during upgrades and such): */msg operserv jupe upgrading.ournetwork.net*  
Disclaimer: __DO NOT USE LIGHTLY__

Force a ChanServ-like mode change on a channel: */msg operserv mode #mychannelname +o opnick*  
Disclaimer: __DO NOT USE LIGHTLY__

View important information about a module (in this case, SASL): */msg operserv modinspect protocol/sasl*

View all loaded modules: */msg operserv modlist*

Load a specific module: */msg operserv modload contrib/badwords*  
Disclaimer: __DO NOT USE LIGHTLY__

Unload a module from OperServ: */msg operserv modunload contrib/badwords*  
Disclaimer: __DO NOT USE LIGHTLY__

Prevent users on a server from obtaining IRCop status: */msg operserv noop add server badserver.ournetwork.net*  
Note: Users will be killed upon opering up  
Disclaimer: __DO NOT USE LIGHTLY__

Prevent users from a hostmask from obtaining IRCop status: */msg operserv noop add hostmask bad@host*  
Disclaimer: __DO NOT USE LIGHTLY__

Remove a user from the noop list: */msg operserv noop del server badserver.ournetwork.net*  
Note: substitute hostmask for server to remove a specific mask

Perform an action as another user: _/msg operserv override channelowner chanserv flags #mychannelname othernick +*_  
Disclaimer: __DO NOT USE LIGHTLY__

Perform a regex-based akill: _/msg operserv rakill /^please don't make me learn regex^/_  
Disclaimer: __DO NOT USE LIGHTLY__

Inject raw information into the uplink: _/msg operserv raw :OperServ WALLOPS :Beep boop_
Disclaimer: **_DO NOT ON AN ACTIVE NETWORK_**

Change services into read-only mode: */msg operserv readonly ON*  
Disclaimer: __DO NOT USE LIGHTLY__

Reload the services config file and update the services database: */msg operserv rehash*  
Disclaimer: __DO NOT USE LIGHTLY__

Shutdown and reinitialize services: */msg operserv restart*  
Disclaimer: __DO NOT USE LIGHTLY__

Check ten most common RealNames: */msg operserv rnc 10*  
Note: You can choose your own number

Check a regex for active matches: */msg operserv rmatch /^please don't make me learn to regex/*

Stop services completely: */msg operserv shutdown*  
Disclaimer: __DO NOT USE LIGHTLY__

View all SOPERs and their access levels: */msg operserv soper list*

View all SOPER access levels: */msg operserv soper listclass*

Add a user to the SOPER database: */msg operserv soper add accountname accesslevel*  
Disclaimer: __DO NOT USE LIGHTLY__

Remove a user from the SOPER database: */msg operserv SOPER del accountname*  
Disclaimer: __DO NOT USE LIGHTLY__

Change a user's SOPER account password: */msg operserv SOPER setpass accountname*  
Disclaimer: __DO NOT USE LIGHTLY__

Check your privilege in Services: */msg operserv specs user mynick*

Prevent the channel #badchannel from being registered: */msg operserv sqline add #badchannel !P bad channel*  
Disclaimer: __DO NOT USE LIGHTLY__

Prevent any nickname containing badnick from being registered for the next 60 days: _/msg operserv sqline add *badnick* !T 60d_  
Disclaimer: __DO NOT USE LIGHTLY__

Save the services database: */msg operserv update*

View the services runtime: */msg operserv uptime*

