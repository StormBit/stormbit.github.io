---
layout: page
title: Services
subtitle: An Overview
---

# Services
Stormbit offers various services to faclitate the registration of nicknames
and channels. All of the commands on this page are case-insensitive, with the
exception of passwords.

## NickServ
NickServ enables you to register your nickname and prevent other users from
being stolen or used by other people.

### Usage

    /msg NickServ REGISTER <password> <email-address>
    /msg NickServ IDENTIFY <nick> <password>
    /msg NickServ GROUP

### Examples

Register an account under the name JaneDoe with NickServ:

    /nick JaneDoe
    /msg NickServ REGISTER MyGreatPassword janedoe@stormbit.net

Log into the current nickname you are using on NickServ, if it is registered:

    /msg NickServ IDENTIFY MyGreatPassword

Log into the nickname 'JaneDoe' without switching to it,
so long as your current nickname is grouped to it:

    /msg NickServ IDENTIFY JaneDoe MyGreatPassword

Group the nickname you are currently using to the NickServ account you are
logged into. You should **only** group names that you acutally intend to use:

    /msg NickServ GROUP

## ChanServ

ChanServ lets you register and protect a channel.
You don't need to use ChanServ to create a new channel, you can do that with
`/join`. ChanServ is a way to guarantee that you remain in control of a
channel.

### Usage

    /msg ChanServ REGISTER <#channel>
    /msg ChanServ AOP <#channel> ADD <nick>

### Examples

Register the channel `#CherryJelly` to you. This makes the channel permanent
and gives you status as the owner of the channel.

    /msg ChanServ register #CherryJelly

Don't abuse this, just use it to maintain channels you have created.

Add the user 'JaneDoe' to the AOP (auto-op) list.
This means that they are automatically assigned channel operator (@)
status when they join the channel:

    /msg ChanServ AOP #CherryJelly ADD JaneDoe

There is *much* more to running a channel, but the more detailed aspects of
channel management can be found on the [Managing A Channel](channel.html)
help page.

## HostServ

HostServ allows you to change the default Stormbit host masking into something
prettier. By default, masked hosts look like
`StormBit-6cu93m.internet-provider-from-2002.net` -- you can change that!

Though our policy on this is highly liberal, there's a couple rules you
should still know:

* It *can* be a real domain... if you can prove that you own it or represent
  the owner (and you have to contact network staff directly to do this,
  HostServ can't handle it)
* Put a dot (.) in it somewhere. This is primarily for neatness, but not necessary.
* Whilst there are no rules _against_ offensive vHosts, bear in mind that you
  could be banned for having one at the channel owner's discretion.

It may take up to a day to approve the hostmask, and if it's denied you will
be allowed to fix any problems and resubmit it.

### Usage

    /msg HostServ REQUEST <vHost>

### Examples

Request the hostmask `i.really.like.cherry.jelly`:

    /msg HostServ Request i.really.like.cherry.jelly
