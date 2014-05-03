---
layout: page
title: Connecting to the StormBit Bouncer Service
---

### Configuring Your User: ###

To begin configuring your user, navigate to https://hosting.rikairchy.net:5050/
Input your username and password in the login field ![](http://puu.sh/8pY1i.png)
On the right, you will see your available configuration options ![](http://puu.sh/8pY4r.png) Select "Your Settings"
Change your password from the pre-assigned one if you wish. It is recommended you do so. ![](http://puu.sh/8pY65.png)
By default, your nickname, alternate nickname, ident, and Realname are all your ZNC username. You may modify them as you wish


### Configuring Networks: ###

Log in to ZNC's Webmin interface
Select "Your Settings"
Under Networks, select the 'Add' link
Under Network Name, you may name it anything you like. Please note that it is case sensitive and must be typed exactly when you are logging in to a multi-network user.
Specify your nickname, alternative nickname, Ident, and Realname if you would like them different from the previously configured ones
Under the servers section, specify which IRC servers you would like to connect to. Note: they must belong to the same IRC network.
Scroll down to Modules. Awaynick, chansaver, highlightattach, nickserv/q, and route_replies are recommended but not necessary.
Select the "Add Network" button the bottom of the page and your ZNC user will connect to the specified IRC server.


### Configuring Your Client: ###
Note that due to the sheer number of clients available, we will not be able to provide instructions for them all.

##### Desktop Clients: #####
- [mIRC](#mirc)
- [HexChat](#hexchat) 
- [Textual](#textual)
- [Quassel](#quassel)
- [Colloquy (desktop)](#colloquy-desktop)
- [LimeChat](#limechat)
- [BitchX](#bitchx)
- [kvirc](#kvirc)

##### Mobile Clients: #####
- [AndChat](#andchat)
- [AndroIRC](#androirc)


#### <a name="mirc">Setting up mIRC with ZNC:</a> ####

To connect once, simply use the format /server hosting.rikairchy.net [port] (either +5050 for SSL, or 4950 for insecure connections) username/network:password
For example: ```/server hosting.rikairchy.net +5050 newuser/StormBit:password```

To make it permanent, press the Tools menu, and select Scripts Editor
Use the following format to automatically connect to IRC networks on startup under the remotes tab:
```on *:START:{
  server hosting.rikairchy.net +5050 user/network1:password
  server -m hosting.rikairchy.net +5050 user/network2:password
  server -m hosting.rikairchy.net +5050 user/network3:password
  server -m hosting.rikairchy.net +5050 user/network4:password
  server -m hosting.rikairchy.net +5050 user/network5:password
}```


#### <a name="quassel">Setting up Quassel with ZNC</a> ####
1. Select the Networks submenu 
2. Select 'Add'
3. Name the network something you'll remember.
4. Under the network details, select add
5. Under the server address, enter hosting.rikairchy.net
6. The port will be either 4950 or 5050. If you select 5050, be sure to check the SSL block.
7. Under the password field, use the format User/Network:Password
8. Save your changes and connect


#### <a name="limechat">Setting up LimeChat with ZNC</a> ####
1. Start LimeChat and select New Server
2. Under the server hostname, input hosting.rikairchy.net
3. Scroll to the bottom and select Advanced
4. Change the port to either 4950 or 5050. Remember to enable SSL if you use 5050
   Under Server Password, use the format User/Network:Password
5. Select Done and save your changes.


#### <a name="hexchat">Setting up HexChat with ZNC</a> ####
1. Open the Networks List
2. Select Add. After naming the network, select Edit use hosting.rikairchy.net/5050 or hosting.rikairchy.net/4950
   If you use port 5050, check both SSL-related blocks
3. Under the Password section, use the following format: User/Network:Password


#### <a name="andchat">Setting up AndChat with ZNC</a> ####
1. Open AndChat and select the encircled plus button to add a server
2. Under Name, name your ZNC connection.
3. Under Address, input hosting.rikairchy.net
   under Port, input either 4950, or 5050. If you use 5050, check the SSL block.
4. Scroll down to Authentication, and select the Set Up button
5. Check the "use server password" block, and use User/Network:Password as the server password