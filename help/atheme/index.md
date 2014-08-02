---
layout: page
title: Atheme How-To Guide
subtitle: For Atheme 7.1
---

##Bots:

[ALIS](#ALIS)  
[BotServ](#BotServ)  
[CHANFIX](#CHANFIX)  
[ChanServ](#ChanServ)  
[GameServ](#GameServ)  
[GroupServ](#GroupServ)  
[HelpServ](#HelpServ)  
[HostServ](#HostServ)  
[InfoServ](#InfoServ)  
[MemoServ](#MemoServ)  
[NickServ](#NickServ)  
[OperServ](#OperServ)  

<a name="ALIS"></a>
###ALIS
**Purpose**: Channel listing, matching a specific pattern.  
**Commands**: *list*  
**How to**:  
Search for a channel: */msg ALIS list * -min 5 -max 20*  
Explanation: This will search for all channels with a minimum of 5 users and a maximum of 20.
<a name="BotServ"></a>
###BotServ:  
**Purpose**: Custom name replacement for a Services bot in a channel.  
**Commands**: *assign, bot, botlist, info, say, set, unassign*  
**How To**:

Place a bot in a channel: */msg botserv ASSIGN #mychannelname BotName* 
Explanation: This will assign BotName to #mychannelname  

Creating a bot: */msg botserv bot add MyBot Is an.awesome.bot MyBot*  
Explanation: This will create a bot with a hostmask of MyBot!Is@an.awesome.bot with a realname of MyBot  

Deleting a bot: */msg botserv bot del MyBot*  
Explanation: This will remove MyBot from the list of available BotServ bots

Modifying a bot: */msg botserv bot change MyBot MyNewBot has a.new.name MyNewBot*  
Explanation: This will change the previously created MyBot to MyNewBot!has@a.new.name with the realname of MyNewBot

View available bots: */msg botserv botlist*  

View available information regarding a channel or bot: */msg botserv info #mychannelname*  
Explanation: This will display the bot assigned to #mychannelname  

Make the bot say something: */msg botserv say #mychannelname Hi guys, welcome to #mychannelname!*  
Explanation: The bot will say "Hi guys, welcome to #mychannelname!"

Disable fantasy mode: */msg botserv set #mychannelname fantasy OFF*  
Explanation: This will prevent !op, !kick, !flag, and the like from being used in-channel. You will have to use ChanServ to complete the desired action

Disable bot assignment to a channel: */msg botserv set #mychannelname nobot ON*  
Explanation: This will remove any assigned BotServ bots from #mychannelname  

Stop users without SOP from assigning a bot: */msg botserv set #mychannelname private ON*  
Explanation: This will prevent HOP and AOPs from assigning bots to #mychannelname  

Remove a bot without deleting it: */msg botserv unassign #mychannelname*  
Explanation: This will remove MyBot without deleting it from BotServ
<a name="CHANFIX"></a>
###CHANFIX:
**Purpose**: Assign ops to a channel without any ops currently assigned.
Commands: (none)  
**How To**:  

Restore ops to an opless channel: none. The channel must meet certain requirements, however:  
1: The channel must exist for the minimum amount of time  
2: There must be at least 4 users prior to the channel being monitored by CHANFIX  
3: At LEAST 1 person must have a high score on CHANFIX in order for the an op to be assigned to a channel  
4: A user must be opped for at least 15 out of the last 30 days  
5: The user's hostmask must not have changed in the last 30 days. Nick changes are fine.  
<a name="ChanServ"></a>
###ChanServ
**Purpose**: Maintain channel foundry and access levels  
**Commands**: access, akick, ban, clear, close, count, drop, fdrop, fflags, flags, forcexop, ftransfer, getkey, halfop/dehalfop, hold, info, invite, kick, kickban, list, mark, op/deop, voice/devoice, owner/deowner, protect/deprotect, quiet, recover, register, role, set, status, sync, taxonomy, template, topic, topicappend, topicprepend, unban, unquiet, why, xOP  
**Flags**:  
v - allows a user to voice/devoice themselves  
V - automatically gives a user voice when entering the channels  
h - allows a user to give themselves halfop, as well as remove it  
H - automatically gives a user halfop when entering the channel  
o - allows a user to op/deop themselves  
O - automatically gives a user op when entering a channel  
q - marks the user as owner of a channel  
Q - automatically applies owner to a channel  
s - allows access for to the set command  
i - permits access to the getkey/invite commands  
r - allows access to kick/kickban/ban/unban commands  
R - enables the use of /recover /sync and /clear commands  
f - enables modification of the channel access list  
t - allows a user to modify the topic  
A - allows users to view the access list of a channel  
S - Marks a user as a successor to channel foundership  
F - Marks the user as a Founder, with complete control over a channel  
b - automatic kickban applied to a user's account  
e - prevents a user from being automatically kickbanned, as well as unbanning yourself  
* - using +* applies every flag except autokick, Successor, and Founder. -* applies all except autokick and Founder  
**Templates**:  
VOP: applies AV  
HOP: applies AHhtv  
AOP: applies AOhiortv  
SOP: applies AOafhiorstv  
**HowTo**:
Assign an access role to a user: */msg chanserv add #mychannelname mynick HOP*  
Explanation: This will give mynick HOP access to #mychannelname  
Note: '!HOP add mynick' inside the channel will also work  

Remove a user's access: /msg chanserv del #mychannelname mynick  
Explanation: This will remove all flags applied to a user  
Note: '!hop del mynick' will also remove the user from the access list 

View a user's current access level: */msg chanserv info #mychannelname mynick*  
Explanation: This will show you the access level for mynick in #mychannelname   
View the entire access list for a channel: */msg chanserv access #mychannelname list*  
Explanation: This will display the entire access list for #mychannelname  
Note: '!access list' will display the same information when issued from the channel  

Apply roles to an account: */msg chanserv access #mychannelname set mynick +halfop*  
Explanation: Adds the nick mynick to the halfop role as well as the halfop flags  
Note: Full listing of roles are: voice, autovoice, halfop, autohalfop, op, autoop, protect, owner, set, invite, remove, recover, acl-change, successor, founder, banned)  

akick a user: */msg chanserv akick #mychannelname add mynick !T 60 disruptive user*  
Explanation: This will add mynick to the akick list for #mychannelname for 60 minutes, kicking them with the reason "disruptive user"  
Note: Alternatively, you can "!akick add mynick disruptive user" to add a user to the akick list  

ban a user: */msg chanserv ban #mychannelname mynick*  
Explanation: This will ban mynick from #mychannelname  
Note: You can also use "!ban mynick" in #mychannelname

Clear all bans from a channel: */msg chanserv clear #mychannelname bans*  
Explanation: This will remove every ban and excemption placed in #mychannelname  
Remove all entries on the access list (minus founders): */msg chanserv clear #mychannelname flags*  
Explanation: This will revert all users (except Founders) to normal users  

Remove all users in a channel: */msg chanserv clear #mychannelname users Channel is now closed to normal users, invite only!*  
Explanation: This will kick every user from #mychannelname with the reason "Channel is now closed to normal users, invite only!"

Close a channel without dropping: */msg chanserv close #mychannelname ON Illegal channel*  
Explanation: This will kickban everyone from the channel for the reason "Illegal channel" without dropping/unregistering it  

Count the number of entries on an access list: */msg chanserv count #mychannelname*  
This will display how many entries match an xOP value and how many that do not.

Remove a channel: */msg chanserv drop #mychannelname*  
Explanation: This will drop/unregister #mychannelname  

Force a channel drop (for opers): */msg chanserv fdrop #mychannelname*  
Explanation: This will force a channel to be dropped by ChanServ if you are not a Founder  

Change a user's flags on a channel: */msg chanserv flags #mychannelname mynick +t*  
Explanation: This will give mynick the ability to edit the topic in #mychannelname. -t will remove that flag

Force a flag change (for opers) */msg chanserv fflags #mychannelname mynick +b*  
Explanation: This will add a user to the autokickban list for #mychannelname  

Change a channel's access list to conform to the xOP format: */msg chanserv forcexop #mychannelname*  

Force a transfer of channel foundership (for opers): */msg chanserv ftransfer #mychannelname newnick*  
Explanation: This will force foundership from the old user to newnick.  
Note: using '!ftransfer newnick' in #mychannelname will also force a transfer  

Retrieve the password for a channel that is +k: */msg chanserv getkey #mychannelname*  
Explanation: This will return the key for #mychannelname if you have +i on #mychannelname's access list 

Apply +h to a user: */msg chanserv halfop #mychannelname newnick*  
Explanation: This will apply +h to newnick in #mychannelname  
Note: '!halfop newnick' in #mychannelname will accomplish the same  

Prevent a channel from expiring: */msg chanserv hold #mychannelname ON*  
Explanation: This prevents the channel from expiring due to time constraints  Note: if the Founder and all Successor accounts expire, the channel will still expire

Display information about a channel: */msg chanserv info #mychannelname*  
Explanation: This will display information about the channel registration date, assigned flags, and similar information  

invite yourself into a channel you have +i on: */msg chanserv invite #mychannelname*  
Note: You must have +i in order to use this command  

Remove a user from a channel: */msg chanserv kick #mychannelname nickname stop misbehaving*  
Explanation: This will remove nickname from #mychannelname with the reason "stop misbehaving"  
Note: Alternatively, '!kick newnick stop misbehaving' in #mychannelname will also kick the user  

Kick as well as ban a user: */msg chanserv kickban #mychannelname newnick Stop misbehaving please*  
Explanation: This will ban and then kick a user with the message "Stop misbehaving please"  
Note: You can also use '!kb newnick stop misbehaving please' to achieve the same effect 

View currently open channels: */msg chanserv list registered 7d*  
Explanation: This will only show channels that have been registered for at least 7 days.   

Mark/comment a channel (oper only): */msg chanserv mark #problemchannel ON Known spammers*  
Explanation: #problemchannel will now show "Known spammers" in its INFO output

OP/deOP/voice/devoice someone in a channel: */msg chanserv op #mychannelname newop  
Explanation: This will temporary assign newop as a channel operator  
Note: '!op newop' would also apply +o to the user when issued in #mychannelname

Give owner (+q) to a user: */msg chanserv owner #mychannelname newowner*  
Explanation: This will give newowner +q

Quiet a trouble user without kicking them: */msg chanserv quiet #mychannelname Trouble*  
Explanation: This will prevent Trouble from speaking in #mychannelname

Recover a channel that has been taken over: */msg chanserv recover #mychannelname*  
Explanation: This will deop everyone, remove the limit and channel keys, remove all bans, add an exception, mark it moderated, and invite you into the channel  

Register a channel: */msg chanserv register #mynewchan*  
Explanation: This will assign ChanServ to #mynewchan, mark you as founder, and prevent the channel from disappearing once everyone parts  

Create custom roles: */msg chanserv role #mychannelname add akicker +acl-change*  
Explanation: This will allow a user access to change the ACL and apply +b to a user's account  

Remove a custom role: */msg chanserv role #mychannelname del akicker*  
Explanation: This will remove akicker from the list of roles  

View the list of custom roles: */msg chanserv role #mychannelname list*  
  
Modify a custom role: */msg chanserv role #mychannelname set akicker +acl-view*  
Explanation: Adds the acl-view flag to the akicker role

Add an email address to a channel: */msg chanserv set #mychannelname email pokemon@fanclubs.com*

Set ChanServ to notice on join: */msg chanserv set #mychannelname entrymsg This is a NSFW channel, use discretion upon joining!*  
Explanation: This will cause a user to be noticed when they join the channel  

Prevent !op !voice (etc) commands in a channel: */msg chanserv set #mychannelname fantasy OFF*  
Note: You will have to use /msg chanserv (command) in the future. To re-enable, use */msg chanserv set #mychannelname fantasy ON*  

Stop users from using gameserv, but allowing ops: */msg chanserv set #mychannelname GameServ op*  
Note: Valid options are All, Voice, op, or OFF  

Set ChanServ to protect a channel: */msg chanserv set #mychannelname guard on*  
Note: ChanServ will join and protect a channel

Set ChanServ to keep a topic even after a netsplit: */msg chanserv set #mychannelname keeptopic on*  
Note: Doing so may revert the topic after a services outage  

allow a user to only akick: */msg chanserv set #mychannelname limitflags on*  
Explanation: This will limit the power of +f (access list editing flag). If a user does not have +s or +R but they do have +f they will only have access to +b (akick)  

Stop users from editing channel modes: */msg chanserv set #mychannelname MLOCK +mnt*  
Explanation: This will stop channel staff from removing chanmode m from a channel

Stop ChanServ from automatically applying all flags after a modification is made: */msg chanserv set #mychannelname nosync ON*  
Explanation: This stops ChanServ from applying the current access list automatically. You can manually set ChanServ to apply all roles using */msg ChanServ sync #mychannelname*  

Change the channel fantasy prefix: */msg chanserv set #mychannelname prefix ^*  
Hide information in INFO: */msg chanserv set #mychannelname private ON*  
Explanation: This will hide certain information in the channels INFO output  

Modify metadata for the channel: */msg chanserv set #mychannelname property URL http://example.tld*  
Note: To remove the metadata, just use */msg chanserv set #mychannelname property URL*  

Limit who can enter a channel: */msg chanserv set #mychannelname restricted ON*  
Note: This will only allow users on the channel's access list entry to enter

Stop people from gaining halfop/op on a channel (paranoid mode): */msg chanserv set #mychannelname SECURE ON*  
Note: This is not very useful thanks to modern anti-takeover measures implemented in the IRCd as well as Atheme  

Stop/Revert a topic automatically after a netsplit: */msg chanserv set #mychannelname topiclock ON*  

Set ops to receive a notice on an ACL change: */msg chanserv verbose #mychannelname ops*  
Note: The options available are OFF, ON, and OPS  

View metadata about a channel: */msg chanserv taxonomy #mychannelname*  
Explanation: This will display all the metadata associated with a registered channel, including custom defined metadata  

Create custom templates: _/msg chanserv template #mychannelname co-founder +* -H_  
Explanation: This will allow you to assign the co-founder template to users, which will automatically apply every mode, minus halfop  

Modify the topic: */msg chanserv topic #mychannelname bla bla*  
Explanation: this will assign the topic "bla bla" in #mychannelname  
Note'!topic bla bla' will do the same. replace topic with topicprepend or topicappend to achieve the desired effect  

Remove a ban: */msg chanserv unban #mychannelname nickname*  
Explanation: Removes all bans associated with nickname  
Note: '!unban nickname' in the channel does the same
<a name="GameServ"></a>
###GameServ:
**Purpose**: Assists with playing games over IRC  
**Commands**: eightball, namegen, roll  
**HowTo**:

Ask eightball a question: */msg gameserv eightball Will I grow three feet over night?*  
GameServ will respond with a typical "Magic 8 Ball" response

Requested a list of names: */msg gamerserv namegen 10*  
GameServ will respond with 10 usable names

Roll two 16 sided die: */msg gamerserv roll 2d16*  
Alternatively, '!roll 2d16' will do the same in a channel that has enabled GameServ
<a name="GroupServ"></a>
###GroupServ
**Purpose**: Manage groups  
**Commands**: ACSNOLIMIT, drop, fdrop, flags, fflags, info, join, list, register, regnolimit, set  
**Flags**:  
f - modifies group access list  
F - group foundership  
m - Read group memos  
c - applies group permissions if assigned in a channel  
v - take vhosts assigned by HostServ to a group  
s - access to GroupServ SET command  
b - bans a user from the group without removing the user's flags  
**HowTo**:  
Remove the limit of the access list entries for groups (opers only): */msg groupserv acsnolimit !networkgroup ON*  

Unregister a group: */msg groupserv drop !oldgroup*

Force the removal of a group (oper only): */msg groupserv fdrop !badgroup*

Change flags on a user in the group: */msg groupserv flags !group nickname +m  
Explanation: Allows nickname to read memos sent to the group

Force a flag change on a user in a group (oper only): _/msg groupserv fflags !groupname nickname -*_ 
Explanation: Removes all flags from nickname

View information about a group: */msg groupserv info !group*

Join a group: */msg groupserv join !anewgroup*  
Note: the group must be open in order to join, unless you have been invited

Search for a group: */msg groupserv list !nachos*  
Explanation: Lists all groups matching "nachos" registered with GroupServ

Create a group: */msg groupserv register !myawesomegroup*  
Explanation: This allows you to create myawesomegroup, or whatever name you choose

Remove the channel registration limit: */msg groupserv regnolimit !myawesomegroup ON*

Specify an official channel for a group: */msg groupserv set !myawesomegroup channel #mychannelname*

Add a description for a channel: */msg groupserv set !myawesomegroup description Our awesome group*  
Explanation: Changes the description of the group to "Our awesome group"

Set the group's email: */msg groupserv set !myawesomegroup email awesome@email.tld*

Change the flags that are applied to a user when they join a group: */msg groupserv set !myawesomegroup joinflags +mv*  
Explanation: Anyone that joins will be able to take vhosts and read all the memos sent to the group

Stop just anyone from joining: */msg groupserv set !myawesomegroup open OFF*  
You can use ON to allow public joining, as well as explicitely inviting members in the future

Add a URL to a group: */msg groupserv set !myawesomegroup URL http://our.awesome.site*
<a name="HelpServ"></a>
###HelpServ
**Purpose**: Request help from the network staff  
**Commands**: cancel, close, helpme, list, request, services  
**HowTo**:

Cancel a previously made request for help: */msg helpserv cancel*

Close another user's request for help (oper only): */msg helpserv close ineedhelp*

View available help requests: */msg helpserv list*

Ask for help: */msg helpserv request I need help with a channel*  
Note: Helpers will be notified after they view the available help requests. Your request will show "I need help with a channel" when a network helper

View all running services: */msg helpserv services*  
Note: This lists services that you can message to obtain more help, including their nicks
<a name="HostServ"></a>
###HostServ  
**Purpose**: Hide a user's connection from other users  
**Commands**: activate, group, listvhost, off, offer, offerlist, on, reject, request, take, unoffer, vhost, vhostnick, waiting  

**HowTo**:  

Activate a requested vHost (oper only): _/msg hostserv activate RequestingNick_   
Note: you can use a wildcard (*) to activate all waiting vHosts

Change a per-nick vhost to a group vhost: */msg hostserv group*

View all vhosts (oper only): */msg hostserv vhostlist ducks*  
Explanation: This returns every vhost containing "ducks." You can also search using other names as a criteria

Deactivate a vhost: */msg hostserv off*  
Note: This will temporarily deactivate your vHost, but it does not unassign it

Create a vHost that users can take (oper only): */msg hostserv offer hide.my.connection* 

Reactivate a vHost: */msg hostserv on*

Reject a requested vhost (oper only): */msg hostserv reject badnick*  
Note: To reject all requests, use *

Request a vhost: /msg hostserv request this.is.my.vhost

Accept an offered vhost: */msg hostserv take hide.my.connection*

Remove a previously offered vhost (oper only): /msg hostserv unoffer *hide.my.connection*

manually assign a vhost (oper only): */msg hostserv vhost nickname needs.to.hide*

Assign a vhost to just a nick, rather than an account: /msg hostserv vhostnick ThisNick Only.works.with.this.vhost

View waiting vhosts requests (oper only): */msg hostserv waiting*  
Note: to activate, use */msg hostserv activate <nick>*
<a name="InfoServ"></a>
###InfoServ
**Purpose**: Provide informational messages to users:  
**Commands**: del, list, odel, olist, post  
**HowTo**: 

Remove the third entry users see when they connect: */msg infoserv del 3*

View messages sent to users when they connect: */msg infoserv list*

Delete oper-only information messages: */msg infoserv odel 4*  
Explanation: removes the 4th entry listed when opers log in to their oper accounts

List informational messages opers see after logging into their oper accounts: */msg infoserv olist*

Add a message to infoserv to be seen by opers after opering up: */msg infoserv post 0 Expected downtime at 1330 UTC*

Add a message to infoserv to send to users upon connect: */msg infoserv post 1 Thanks for using our network!*

Send an emergency message to all users immediatetly: */msg infoserv post 4 DDoS is happening right now, sorry for the issues!*
<a name="MemoServ"></a>
###MemoServ
**Purpose**: Send messages to users that are not currently logged in  
**Commands**: delete, forward, ignore, list, read, send, sendgroup, sendops  
**HowTo**:

Remove a memo someone has sent you: */msg memoserv delete old*  
Note: Old removes already read memos. You can delete specific memos by specifying their numbers, or every memo using 'all'

Forward a memo a user has sent: */msg memoserv forward netadmin 3*  
Explanation: Forwards memo 3 to the nick netadmin

Stop a user from sending memos to you: */msg memoserv ignore problemuser* 

View available memos: */msg memoserv list*

Read a memo: */msg memoserv read NEW*  
Note: You can use NEW to read all unread memos, or a number to read a specific memo

Send a memo to a user: */msg memoserv send netadmin I can only send up to 300 characters D:* 

Send a memo to a group: */msg memoserv groupsend !myawesomegroup you guys are awesome!*

Send a memo to all ops on in a channel: */msg memoserv sendops #mychannelname watch out for guest444, he's mean to people*  
Note: You must have at least be able to view the access list in order to do this
<a name="NickServ"></a>
###NickServ
**Purpose**: Maintain nick ownership and allows users to modify/verify nick information  
**Commands**: acc, access, cert, drop, fdrop, freeze, fungroup, fverify, ghost, group, hold, identify, info, list, listchans, listmail, listownmail, listvhost, login, logout, mark, regain, register, regnolimit, release, resetpass, restrict, return, sendpass, set, setpass, status, taxonomy, ungroup, vacation, verify, vhost  
**HowTo**:  

Determine if an account exists: _/msg nickserv acc doyouexist *_  
Note: 0 means the account doesn't exist, 1 means it exists but is not logged in, 2 means the user is not logged in but is recognized, and 3 means the user is logged in  

Stop NickServ from changing your nick without logging in: */msg nickserv access add *@my.normal.connection*  
Note: You can use LIST, ADD and Delete  

Automatically log in to NickServ using CertFP: */msg nickserv cert add f3111bd27a08be18cc25ccc7111a4aaa*  
Note: You cannot associate one fingerprint with more than one account, otherwise NickServ would not be able to determine which account to log into

Remove your nickserv account: */msg nickserv drop MyNick MyPass*  
Note: You must supply your password in order to delete your account. If you do not know it, you can request a reset  

Force the removal of a nickserv account (oper only): */msg nickserv fdrop badnick*  
Note: Only opers can forcibly drop a nick

Prevent a user from logging in rather than dropping their account: */msg nickserv freeze badnick Repeated spammer*  
Note: this does not remove them from any access lists, but it does prevent them from using their account, making their channel powers inaccessible

Forcibly remove just a nick from an account: */msg nickserv fungroup badnick*  
Note: If badnick is associated with goodnick, goodnick will not be removed

Verify a user's change without them receiving the email (oper only): */msg nickserv fverify emailchg ichangedmyemail*  
Note: also allows registration verification, in addition to others

Kill a connection that is no longer active: */msg nickserv ghost mynick mypassword*  
Explanation: Useful when you lose your connection to IRC, and services has yet to recognize it.

Add a nick to an account without registering again: */msg nickserv identify oldnick mypassword* THEN */msg nickserv group*

Prevent an account from expiring from time: */msg nickserv hold*

Log in to NickServ: */msg nickserv identify mypassword*  
Note: You can use */msg nickserv identify myregularnick mypassword* if you are using a nick not registered to your acoount

View information regarding a user: */msg nickserv info nickname*

Search for users meeting a criteria: */msg nickserv list hold*  
Explanation: This will display all held nicknames

View all channels a user is on an access list for: */msg nickserv listchans nickname*

Find users registered using an email address: */msg nickserv listmail *@gmail.com*

List active vhosts assigned to nicks: */msg nickserv listvhost*

Log out of NickServ without disconnecting from IRC: */msg nickserv logout*

Comment on an account (oper only): */msg nickserv mark bad_nick ON PMs random people rudely*

Disconnect a user that is logged in using another user's nick: */msg nickserv regain myregularnick mypassword*

Create an account with NickServ: */msg nickserv register mypassword email@domain.tld*  
Note: Your current nickname will be the new account name

Stop a services enforcement on a nick: */msg nickserv release mynick mypass*  
Note: myass is not needed if you are logged in

Change a user's pass if they have forgotten it (oper only): */msg nickserv resetpass iforgotmynick*  
Note: NickServ will send you the generated password, the user MUST change it after they log in to maintain account integrity

Restrict what a user can do: */msg nickserv restrict badnick ON Grouping inappropriate nicks, registering bad channels, and requesting bad vhosts*  
Note: RESTRICT prevents the user from registering channels with ChanServ, requesting vHosts with HostServ, and grouping new nicks with NickServ

Give a user back a stolen account: */msg nickserv return stolen_account a.good@email.address*  
Note: Any current sessions will be logged out

Reset a nickserv password: */msg nickserv sendpass myforgottennick*

Change an account name: */msg nickserv set accountname nickname2*

Change email: */msg nickserv set email my.new@email.address*

Forward memos sent using memoserv to an email address: */msg nickserv set emailmemos Only*

Prevent users from using a registered nick without identifying: */msg nickserv set enforce on*  
Note: On by default

Modify how long someone has to log in before their nick is changed: */msg nickserv set enforcetime 60*  
Note: time is in seconds

Prevent standard users from viewing an email associated with an account: */msg nickserv set hidemail on*

Change the language services uses: */msg nickserv set language de*  
Note: Various languages are available, and more are being translated for Atheme

Prevent the addition of your nick to an access list: */msg nickserv set neverop ON*

Stop users from sending memos: */msg nickserv set nomemo ON*

Stop services from automatically applying channel modes: */msg nickserv set noop ON*

Change NickServ password: */msg nickserv set password mynewpasssword*

Hide various information about a nickserv account: */msg nickserv set private ON* 

Force services to send PMs rather than notices: */msg nickserv set privmsg ON*

Change metadata associated with an account: */msg nickserv set property sign gemini*  
Explanation: Change the entry "sign" to reflect "gemini." There are various property fields that can be edited.

Stop ChanServ notifications: */msg nickserv set quietchg ON*

Change your NickServ password without knowing the old one: */msg nickserv setpass thekeynickservsenttome mynewpassisawesome*

View information regarding your current NickServ status: */msg nickserv status*

View metadata about a registered user: */msg nickserv taxonomy nickname*

Remove a nick without removing your NickServ account: */msg nickserv ungroup oldnick*

Prevent NickServ from dropping your account due to time: */msg nickserv vacation*  
NoteThis extends the time it takes for NickServ to drop you by three, but channels will still expire. Disabled once you log in

Verify an account change: */msg nickserv verify EMAILCHG mynick mykeynickservemailedme*
<a name="OperServ"></a>
###OperServ
**Purpose**: Assists opers with the management of users and network services  
**Commands**: akill, clearchan, clones, compare, greplog, identify, ignore, info, inject, jupe, mode, modinspect, modlist, modload, modunload, noop, override, rakill, raw, readonly, rehash, restart, rmatch, rnc, rwatch, sgline, shutdown, soper, specs, sqline, update, uptime  
**_NOTE_**: Nearly every command used can drastically affect network performance and user experience. DO NOT ISSUE THESE COMMANDS LIGHTLY. Inject is NOT to be used on a live network. It is included here for informational purposes __ONLY__.  
**HowTo**:

Automatically kill badnick for the next 5 days for "repeated network rule breaking": _/msg operserv akill add badnick !T 5d repeated network rule breaking_  
Disclaimer: __DO NOT USE LIGHTLY__

Add a permanent akill: */msg operserv add badnick !P repeated network rule breaking*  
Disclaimer: __DO NOT USE LIGHTLY__

Remove an akill for badnick: */msg operserv akill del badnick* 

Remove the first five akills: */msg operserv akill del 1-5*

View all akills: */msg operserv akill list*

View all akills with reasons: */msg operserv akill list full*

Kick all users from a channel: */msg operserv clearchan kick #badchan illegal activity*  
Disclaimer: __DO NOT USE LIGHTLY__

Kill all users to force them out of a channel: */msg operserv clearchan kill #badchan bad bad bad*  
Disclaimer: __DO NOT USE LIGHTLY__

AKill all users to force them out of a channel: */msg operserv clearchan akill #badchan bad bad bad*  
Note: Akills are added for a week  
Disclaimer: __DO NOT USE LIGHTLY__

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

