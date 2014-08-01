---
layout: page
title: Services
subtitle: A Vague Overview
---

# Services #
Stormbit offers various services to faclitate the registration of nicknames and channels. All of the commands on this page are case-insensitive, with the exception of passwords. 

# NickServ #
NickServ enables you to register your nickname and prevent other users from being stolen or used by
  other people.

#### `/msg NickServ REGISTER <nickname> <password> <email@example.com>` ##
*Example: `/msg NickServ register JohnDoe besebaww123 johndoe123@stormbit.net`* - Registers an account under the name JohnDoe on NickServ.

#### `/msg NickServ IDENTIFY [username] <password>` ##
*Example: `/msg NickServ identify besebaww123`* - Log into the current nickname you are using on NickServ, if it is registered.  
*Example: `/msg NickServ identify JamesDoe besebaww123`* - Log into the nickname 'JamesDoe' without switching to it, so long as yuor current nickname is grouped to it.

#### `/msg NickServ GROUP` ##
*Example: `/msg NickServ group`* - Group the nickname you are currently using to the NickServ account you are logged into. You should **only** group names that you acutally intend to use. 


# ChanServ #
ChanServ lets you register and protect a channel.  You don't need to use ChanServ to create a new
  channel, you can do that with `/join`, it's just a convenient way to make sure you maintain control
  over the channel.

#### `/msg ChanServ REGISTER <#channel>` ##
*Example: `/msg ChanServ register #CherryJelly`* - Registers the channel '#CherryJelly' to you.  This makes the channel permanent and gives you status as the owner of
  the channel.  Once again, don't abuse this, just use it to maintain channels you have created.

#### `/msg ChanServ AOP ADD <username>` ##
*Example: `/msg ChanServ AOP ADD JamesDoe`* - Adds the user 'JamesDoe' to the AOP (auto-op) list.  This means that they are automatically assigned channel operator (@)
  status when they join the channel.

There is *much* more to running a channel, but the more detailed aspects of channel management can be found on the [Managing A Channel](channel.html) help page.

# HostServ #
HostServ allows you to change that ugly ISP-assigned hostname to something prettier.  You know, the
  part that's all "StormBit-6cu93m.internet-provider-from-2002.net" -- you can change that!

  Though our policy on this is highly liberal, there's a couple rules you should still know:

 * It *can* be a real domain... if you can prove that you own it or represent the owner (and you
   have to contact network staff directly to do this, HostServ can't handle it)
 * Put a dot (.) in it somewhere. This is primarily for neatness.
 * Whilst there are no rules _against_ offensive vHosts, bear in mind that you could be banned for having one at the channel owner's discretion.

#### `/msg HostServ REQUEST <your.vhost.goes.here>` ##
*Example: `/msg HostServ Request i.really.like.cherry.jelly`* - Requests the hostmask 'i.really.like.cherry.jelly'.  It may take up to a day to approve the hostmask, and if it's denied you are
  allowed to fix any problems and resubmit it.
