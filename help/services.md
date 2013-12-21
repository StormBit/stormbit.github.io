---
layout: page
title: Services
subtitle: A Vague Overview
---

# NickServ
NickServ enables you to register your nickname and prevent other users from being stolen or used by
other people.

## `/msg NickServ REGISTER username password email@example.com`
Register an account on NickServ.  Also automatically groups your current nick.

## `/msg NickServ IDENTIFY username password`
Logs in to an account on NickServ.  You can leave off your account username if your current nick is
grouped to it.

## `/msg NickServ GROUP`
Groups a nick to your account.  This links the nick to your account, allowing you to enforce control
over it.  Don't abuse this, just use it to claim nicks you actually intend to use.


# ChanServ
ChanServ lets you register and protect a channel.  You don't need to use ChanServ to create a new
channel, you can do that with `/join`, it's just a convenient way to make sure you maintain control
over the channel.

## `/msg ChanServ REGISTER #channel`
Registers a channel to you.  This makes the channel permanent and gives you status as the owner of
the channel.  Once again, don't abuse this, just use it to maintain channels you created.

## `/msg ChanServ AOP ADD username`
Adds a user to the AOP list.  This means that they are automatically assigned channel operator (@)
status when they join the channel.

# HostServ
HostServ allows you to change that ugly ISP-assigned hostname to something prettier.  You know, the
part that's all "StormBit-6cu93m.internet-provider-from-2002.net" -- you can change that!

Though our policy on this is highly liberal, there's a couple rules you should still know:

 * It **can** be a real domain... if you can prove that you own it or represent the owner (and you
   have to contact network staff directly to do this, HostServ can't handle it)
 * Put a dot in it somewhere.

## `/msg HostServ REQUEST your.vhost.goes.here`
Requests a hostmask.  It may take up to a day to approve the hostmask, and if it's denied you are
allowed to fix any problems and resubmit it.
