Client–Server Initialization
============================

<div class="alert alert-info">
  **HC SVNT DRACONES**
  This article outlines engine-level behavior. The following information is best
  suited for engine modders rather than game developers.
</div>

**Client–Server initialization** occurs in two or one Lua states depending on
whether or not initialization takes place in a dedicated server context or in a
listen server context, respectively.

Connecting to Dedicated Servers
-------------------------------

In [Vertex Adventure,](/vadventure) the engine connects to the
[Prime Universe](api/Prime_Universe) in the main menu.

`game.client.gui.mainmenu`

```lua
if ( not engine.isConnectedToServer() ) then
	if ( _DEBUG ) then
		engine.connect( "localhost" )
	else
		-- TODO: Update this to use a universe browser.
		engine.connect( "newton.andrewmcwatters.com" )
	end
else
	engine.disconnect()
end
```

Connecting to Listen Servers
----------------------------

Since Grid was written for [Vertex Adventure,](/vadventure) an MMORPG, and no
server browser exists yet, connecting to a listen server is typically only done
for debugging purposes by using the `region` console command.

`engine.shared.region`
```lua
concommand( "region", "Loads the specified region",
	function( _, _, _, _, argT )
		-- ...

		engine.connectToListenServer()
	end
)
```

Establishing a Connection
-------------------------

After making a call to either [engine.connect()](api/engine.connect) or
[engine.connectToListenServer()](api/engine.connectToListenServer), Grid loads
`engine.client.network` which then allows
[network.connect()](api/network.connect) or [network.connectToListenServer()](api/network.connectToListenServer) to be
called.

Depending on which method is called, the engine will either use
[lua-enet](http://leafo.net/lua-enet/) to connect to the server or emulate the
network procedures in-memory.

### Stack Trace <small>with console output</small>

1. Connect to server in:
  * *Client* `game.client.gui.mainmenu`
  or
  * *Client* `engine.shared.region`
2. *Client* [engine.connect()](api/engine.connect) or
[engine.connectToListenServer()](api/engine.connectToListenServer)
  * > Connecting to *address:port*...
3. *Server* [engine.onConnect()](api/engine.onConnect)
  * > *peer* has connected.
4. *Client* [engine.onConnect()](api/engine.onConnect)
  * > Connected to the server!
5. *Client* `sendAuthTicket()`
6. *Server*
  * > Received payload "authenticate" from *peer*
7. *Server* [engine.onPlayerAuthenticate()](api/engine.onPlayerAuthenticate)
  * > Player *username* has joined the game.
8. *Server* [engine.sendServerInfo()](api/engine.sendServerInfo)
  * *Client*
    * > Received payload "serverInfo"
9. *Client* [engine.sendClientInfo()](api/engine.sendClientInfo)
  * *Server*
    * > Received payload "clientInfo" from *peer*
10. *Shared* [player:initialSpawn()](api/player.initialSpawn)

See Also
--------

* [Game Loop](api/Game_Loop)
