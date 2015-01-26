---
layout: page
title: Large Channel Administration
subtitle: Keeping Users Happy
---

## This page is a work in progress! More content is to come.

# Things that make a good large channel 
Running an IRC channel can be stressful when you have a large amount of users.
However, there are several things that you can do to make it easier for
yourself. The most important of those things is to __take advantage of
services__. ChanServ and BotServ, amongst many of the other services, provide
many tools that will help you run your channel. Services can only help you
part of the way though, and so this page will also cover general things
to bear in mind when running a channel.  

**Note that this page is based on _personal_ experience, and some may
disagree with my methods of running a channel. This page is meant to serve
as a guide for inexperienced channel owners, and is by no means a
definitive guide for running an IRC channel. So don't get mad at me if
you don't agree!**

# Promotions and staffing
_Not Giving people too much power_

## Types of channel operator
There are several types of channel operator, each with different levels of
power. The typical levels of power are as follows:

* **Founder** - Highest level of power. Has complete access to the channel,
  including the ability to remove everyone from the channel and close it.
* **Owner** - Has access to all channel commands. In a channel, an owner can
  kick and ban all other users. Owners are indicated by the tilde `~` symbol
  or by the `+q` mode. Owners can set any mode on other users, including
  making them owners too. For this reason, only **_very_** trusted people
  should be set as channel owners. 
* **Super Operator** - Also known as SOP or SuperOP, a Super Operator has
  access to all operator commands. As well as this, they can also manage the
  Auto Kick (AKICK) lists for channels, and modify channel bad word lists.
  SOPs are indicated by the `&` symbol or the `+oa` modes. 
* **Operator** - Also known as an OP, or AOP (Auto-OP). Operators are able
  to kick and ban users from the channel, as well as modify the channel's
  topic. Operators have access to channel ban lists, and can ban and unban
  users. Users that are Auto-OPped can invite themselves to (and unban
  themselves from) the channel as necessary. Operators have the at `@`
  symbol, and have the mode `+o`.
* **Half Operator** - Halfops, or HOPs, are the least powerful of the
  operator ranks. Halfops can kick and ban users, as well as modify the topic.
  However, half operators cannot kick or ban anyone that is set to Half
  operator or above - Only regular users and voiced users. Half Operators
  have a `%` symbol to identify them by, as well as the flag `+h`. 
* **Voice** - Voiced users, or VOPs, are not operators. However they are
  worth mentioning as there are still a couple of notable differences
  between voiced users and regular users. If your channel is set to +m
  (Moderated), voiced users can still talk in your channel. As well as this,
  voiced users can also view the channel's access list. Voiced users will
  have a `+` symbol next to their name, and have the mode `+v` set on them. 

## Putting this into context
Okay, so we know what each different type of operator can do. What does this
mean in an actual scenario though? Let's say we have a channel which has 4
active people; three of them set as Super Operators with no one above them.

    <&User1111> I hate you, User2222
    <&User2222> lol i bet ur dad loves u User1111
    <&User4444> You're both idiots.
    <&User2222> lol no 1 even likes u User4444 why r u here
    * User4444 sets mode +b on (User2222!user2222@host-1337.stormnetbit.eu.tk)
    * User4444 kicks User2222 (Get lost.)
    <&User1111> what was that for? you're so obnoxious and ban-happy User4444, someone needs to show you what it's like
    * User1111 sets mode +b on (User4444!*@i.am.your.father)
    * User1111 kicks User4444 (see how you like it)
    <RegularUser> This place is stupid.
    * RegularUser has left (Bye)

What you see above is an (admittedly slightly exaggerated) situation in which
there are three users with `+oa`. These three users clearly do not get along,
and end up banning and kicking each other. This incident has caused
RegularUser to question the channel's stability, and made them leave.
Whilst this may seem ridiculous, plenty of channels collapse due to
disagreements between operators. A solution to this, and the key point of this
section, is **give power to responsible users**, and **don't 'over-OPulate'
your userlist.** A userlist of a more organized channel may look like this:

* ~ChannelOwner
* &ResponsibleAdmin
* &ResponsibleAdmin2
* @TrustworthyOperator
* %UsefulHalfop
* %AnotherHalfop

With a structure like this, you're more likely to maintain a stable channel.
If there was a disagreement between `UsefulHalfop` and `AnotherHalfop`,
then anyone above them could step in before things get out of hand. By them
being halfops, it is not possible for them to kick or ban each other -
This makes `+h` useful for giving some amount of power to people that you
don't quite yet trust enough to keep the channel pleasant, but you trust
enough to deal with unruly users.

## Power and Responsibility
Running a successful IRC channel can give you power over a large number of 
people. However, I feel this is a very, very important point. **Do not let it 
get to your head.** In much the same way as we discussed making sure your 
operators aren't causing problems, it is important to bear in mind that this 
applies to you too. Users are not toys. You can enforce rules without 'power 
abusing', and the difference between enforcement and abuse is what will make 
your channel thrive. Since 'abuse' can be used as a blanket term for many, many 
situations, I'll briefly sum up some examples of ways you *shouldn't* use your 
power.

* *"I don't like you."* - Banning or kicking users simply because you personally 
don't like them is a surefire way to make people question your authority. Just 
because you don't like a user, doesn't mean other members of your channel 
don't! Naturally, if you do not like a user becuase they do not abide by your 
rules, then it's a different story.
* *"Stop liking what I don't like."* - On the internet, people have different 
opinions. More often than not, banning a user because they don't share the same 
opinion with you on a subject is just going to make people dislike you.
* *"It was just a joke."* - This one is really more personal judgement and common 
sense. A joke kick might fly every now and then with your users, but you should 
always bear in mind that it might not be funny the 600th time you kick a user 
because 'lol dongs.'

This is by no means a complete list. In short, 'abusing' your power is to use 
your power to kick and ban people for little to no valid reason. 


# Rulemaking
_Writing awesome rules_

You should have a clear idea of what you want out of your channel. You should 
use this idea to form your channels rules, which will be vital for keeping 
peace in a large community. There are many things to consider when writing a 
set of rules, but here are a few pointers to keep in mind

* **Be concise.** You want your rules to make sense, and to not leave room for 
manipulation. You should try and cover all possible applications of your rules.
* **Be sensible.** It may seem obvious, but make sure that following your rules 
is actually feasible. Ridiculous rules such as 'you must call me John The 
Great' are obviously not going to be followed due to their sheer silliness. 
Your rules should cover the *essential* requirements for your channel.
* **Be fair.** This one depends on the purpose of your channel. In certain 
circumstances, your channel may need to be very strict. However in most cases 
with a large channel, you want your rules not to be *too* strict. There's a 
difference between being strict and being draconian in your channel management. 
* **Rules for all.** Make sure your rules apply to all of your users. 'Rules 
for one, rules for another' methods of running a channel tend to lead to 
disputes about how and when rules should be enforced. Rules should be applied 
to everyone, even if they're your friends. 

# Enforcing Rules
_Controlling your users_
